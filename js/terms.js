/**
 * Central Term System
 * Handles term loading, linking, and the Term Panel UI.
 */
const TermSystem = (function () {
    // State
    let terms = {}; // termId -> term object
    let termIndex = []; // Array of { termId, normalizedLabel, originalLabel, length } for matching
    let userTerms = {}; // termId -> user overrides
    let activeTermId = null; // Currently open term

    // Storage Keys
    const KEYS = {
        USER_DATA: 'flex_terms_user_v1',
        STATS: 'flex_term_stats_v1',
        MIGRATION: 'flex_data_migration_v1'
    };

    /**
     * Initialize the system
     */
    async function init() {
        console.log('Initializing Term System...');
        await loadTerms();
        buildIndex();
        injectTermPanel();
        loadUserOverrides();
        setupGlobalSearch();

        // Expose to window for debugging and interaction
        window.TermSystem = this;

        console.log(`Term System initialized with ${Object.keys(terms).length} terms.`);
    }

    /**
     * Load terms from JSON and merge with local storage
     */
    async function loadTerms() {
        try {
            const response = await fetch('data/terms.json');
            if (!response.ok) throw new Error('Failed to load terms.json');
            const data = await response.json();

            data.terms.forEach(term => {
                terms[term.id] = term;
            });
        } catch (e) {
            console.error('Error loading terms:', e);
            // Fallback or empty init
        }
    }

    /**
     * Load user overrides from local storage
     */
    function loadUserOverrides() {
        try {
            const stored = localStorage.getItem(KEYS.USER_DATA);
            if (stored) {
                userTerms = JSON.parse(stored);
            }
        } catch (e) {
            console.error('Error loading user term data', e);
        }
    }

    /**
     * Save user overrides
     */
    function saveUserOverrides() {
        localStorage.setItem(KEYS.USER_DATA, JSON.stringify(userTerms));
    }

    /**
     * Build search index for fast matching
     * Sorts by length desc (longest match first)
     */
    function buildIndex() {
        termIndex = [];
        Object.values(terms).forEach(term => {
            const entries = [term.label, ...(term.aliases || [])];
            entries.forEach(entry => {
                if (entry && entry.length > 2) { // Skip very short words unless essential
                    termIndex.push({
                        termId: term.id,
                        text: entry,
                        normalized: normalize(entry),
                        length: entry.length
                    });
                }
            });
        });

        // Sort by length descending to prioritize phrases over words
        termIndex.sort((a, b) => b.length - a.length);
    }

    function normalize(str) {
        return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    /**
     * Linkify string content - replaces terms with buttons
     * CAUTION: Use this only on text content that will do into HTML, 
     * but ensure you aren't breaking existing HTML tags.
     * 
     * Best used on plain text segments.
     */
    function linkifyHTML(htmlString) {
        if (!htmlString) return '';

        // This is a naive implementation. For robust HTML parsing, we should walk the DOM.
        // But for this assignment, we use a regex that tries to avoid matching inside tags.
        // We split by tags and only process text parts.

        const parts = htmlString.split(/(<[^>]*>)/g);

        return parts.map(part => {
            if (part.startsWith('<')) return part; // Return tags as is
            return linkifyText(part); // Process text content
        }).join('');
    }

    function linkifyText(text) {
        // We can't simply replace one by one because of overlapping matches.
        // But since we sorted index by length, we can try.
        // A better approach is to find all matches, sort by position, and reconstruct string.

        let result = text;
        const matches = [];

        // Find matches
        termIndex.forEach(item => {
            // Regex for whole word/phrase match
            // We escape the text for regex
            const escaped = item.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            // Case insensitive, bound by whitespace or punctuation
            const regex = new RegExp(`(^|[^a-zA-Z0-9čďěňřšťžůČĎĚŇŘŠŤŽŮ])(${escaped})(?=$|[^a-zA-Z0-9čďěňřšťžůČĎĚŇŘŠŤŽŮ])`, 'gi');

            let match;
            while ((match = regex.exec(text)) !== null) {
                // Check if this range is already covered by a longer match
                const start = match.index + match[1].length;
                const end = start + match[2].length;

                // Optimized: check overlaps
                // Since we iterate longest to shortest, we just need to ensure we don't overlap with existing matches
                const isOverlapping = matches.some(m =>
                    (start >= m.start && start < m.end) ||
                    (end > m.start && end <= m.end)
                );

                if (!isOverlapping) {
                    matches.push({
                        start,
                        end,
                        termId: item.termId,
                        text: match[2]
                    });
                }
            }
        });

        // Sort matches by start position descending to replace from end
        matches.sort((a, b) => b.start - a.start);

        // Apply replacements
        matches.forEach(m => {
            const before = result.substring(0, m.start);
            const after = result.substring(m.end);
            const replacement = `<button class="term-link" data-term-id="${m.termId}" onclick="event.stopPropagation(); TermSystem.openPanel('${m.termId}')">${m.text}</button>`;
            result = before + replacement + after;
        });

        return result;
    }

    /**
     * UI: Term Panel Construction
     */
    function injectTermPanel() {
        if (document.getElementById('term-panel')) return;

        const panelHTML = `
        <div id="term-panel-overlay" class="term-panel-overlay" style="display: none;"></div>
        <div id="term-panel" class="term-panel" role="dialog" aria-hidden="true">
            <div class="term-panel-header">
                <h2 id="tp-title">Term Title</h2>
                <div class="term-panel-actions">
                    <button class="icon-btn" onclick="TermSystem.closePanel()">&times;</button>
                </div>
            </div>
            <div class="term-panel-content">
                <div class="tp-section">
                    <div class="tp-aliases" id="tp-aliases"></div>
                    <div class="tp-tags" id="tp-tags"></div>
                </div>
                
                <div class="tp-section">
                    <h3>Definice</h3>
                    <div id="tp-definition" class="tp-definition" contenteditable="false"></div>
                    <textarea id="tp-def-edit" class="tp-editor" style="display:none"></textarea>
                    <button class="btn-small" id="btn-edit-def" onclick="TermSystem.toggleEditDef()">✏️ Upravit</button>
                    <button class="btn-small save-btn" id="btn-save-def" onclick="TermSystem.saveDef()" style="display:none">💾 Uložit</button>
                </div>

                <div class="tp-section">
                    <h3>Moje poznámka</h3>
                    <textarea id="tp-note" class="tp-note-editor" placeholder="Přidej si vlastní poznámku..."></textarea>
                </div>

                <div class="tp-section tp-relations" id="tp-relations">
                    <!-- Relations go here -->
                </div>

                <div class="tp-actions-row">
                    <button class="btn-action quiz" onclick="TermSystem.practiceQuiz()">
                        🧠 Procvičit v kvízu
                    </button>
                    <button class="btn-action flashcards" onclick="TermSystem.practiceSRS()">
                        🎴 Opakovat (SRS)
                    </button>
                </div>
                
                <div id="tp-stats" class="tp-stats"></div>
            </div>
        </div>
        `;

        const styleCSS = `
        <style>
            .term-panel-overlay {
                position: fixed; top: 0; left: 0; right: 0; bottom: 0;
                background: rgba(0,0,0,0.5); z-index: 999;
                backdrop-filter: blur(2px);
            }
            .term-panel {
                position: fixed; top: 0; right: -400px; bottom: 0; width: 400px;
                background: var(--bg-card, #1a1a2e); 
                border-left: 1px solid var(--border, #333);
                z-index: 1000;
                transition: right 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                box-shadow: -5px 0 30px rgba(0,0,0,0.3);
                display: flex; flex-direction: column;
                color: var(--text, #fff);
            }
            .term-panel.open { right: 0; }
            .term-panel-header {
                padding: 1.5rem; border-bottom: 1px solid var(--border, #333);
                display: flex; justify-content: space-between; align-items: center;
                background: var(--bg-glass, rgba(0,0,0,0.1));
            }
            .term-panel-content {
                padding: 1.5rem; overflow-y: auto; flex: 1;
            }
            .term-link {
                background: transparent; border: none; border-bottom: 1px dashed var(--primary, #8b5cf6);
                color: inherit; cursor: pointer; padding: 0 2px;
                transition: background 0.2s;
            }
            .term-link:hover { background: rgba(139, 92, 246, 0.2); }
            
            .tp-section { margin-bottom: 1.5rem; }
            .tp-aliases { font-size: 0.9em; color: var(--text-muted, #888); font-style: italic; }
            .tp-tags { display: flex; gap: 0.5rem; margin-top: 0.5rem; flex-wrap: wrap; }
            .tp-tag { font-size: 0.75em; padding: 0.2rem 0.5rem; background: var(--bg-light, #333); border-radius: 4px; }
            
            .tp-definition { line-height: 1.6; margin-bottom: 0.5rem; padding: 0.5rem; border-radius: 6px; border: 1px solid transparent; }
            .tp-editor, .tp-note-editor { 
                width: 100%; background: var(--bg-light, #222); border: 1px solid var(--border, #444);
                color: var(--text, #fff); padding: 0.5rem; border-radius: 6px; min-height: 80px;
                font-family: inherit; resize: vertical; margin-bottom: 0.5rem;
            }
            
            .btn-small { padding: 0.3rem 0.6rem; font-size: 0.8em; cursor: pointer; border-radius: 4px; border: 1px solid var(--border); background: var(--bg-light); color: var(--text); }
            .btn-small:hover { background: var(--primary, #8b5cf6); color: white; border-color: transparent; }
            
            .tp-actions-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem; }
            .btn-action { padding: 1rem; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; transition: transform 0.2s; }
            .btn-action:hover { transform: translateY(-2px); }
            .btn-action.quiz { background: var(--gradient-3, linear-gradient(to right, #4facfe, #00f2fe)); color: #000; }
            .btn-action.flashcards { background: var(--gradient-1, linear-gradient(to right, #667eea, #764ba2)); color: white; }

            /* Mobile */
            @media (max-width: 600px) {
                .term-panel { width: 100%; right: -100%; }
            }
        </style>
        `;

        document.body.insertAdjacentHTML('beforeend', styleCSS + panelHTML);

        // Wire up overlay close
        document.getElementById('term-panel-overlay').addEventListener('click', closePanel);
        // Wire up note auto-save
        document.getElementById('tp-note').addEventListener('input', (e) => {
            if (activeTermId) {
                if (!userTerms[activeTermId]) userTerms[activeTermId] = {};
                userTerms[activeTermId].note = e.target.value;
                saveUserOverrides();
            }
        });
    }

    /**
     * Open the panel
     */
    function openPanel(id) {
        if (!terms[id]) return;

        activeTermId = id;
        const term = terms[id];
        const user = userTerms[id] || {};

        document.getElementById('tp-title').textContent = term.label;
        document.getElementById('tp-aliases').textContent = term.aliases ? term.aliases.join(', ') : '';

        // Definition: Prefer user override
        const def = user.definitionOverride || term.definition;
        document.getElementById('tp-definition').textContent = def;
        document.getElementById('tp-def-edit').value = def;

        // Note
        document.getElementById('tp-note').value = user.note || '';

        // Tags
        const tagsHTML = (term.tags || []).map(t => `<span class="tp-tag">${t}</span>`).join('');
        document.getElementById('tp-tags').innerHTML = tagsHTML;

        // Open UI
        document.getElementById('term-panel-overlay').style.display = 'block';
        setTimeout(() => {
            document.getElementById('term-panel').classList.add('open');
        }, 10);
    }

    function closePanel() {
        document.getElementById('term-panel').classList.remove('open');
        setTimeout(() => {
            document.getElementById('term-panel-overlay').style.display = 'none';
        }, 300);
        activeTermId = null;
    }

    // Toggle logic for definition editing
    function toggleEditDef() {
        const view = document.getElementById('tp-definition');
        const edit = document.getElementById('tp-def-edit');
        const btnEdit = document.getElementById('btn-edit-def');
        const btnSave = document.getElementById('btn-save-def');

        if (edit.style.display === 'none') {
            edit.style.display = 'block';
            view.style.display = 'none';
            btnEdit.style.display = 'none';
            btnSave.style.display = 'inline-block';
        } else {
            edit.style.display = 'none';
            view.style.display = 'block';
            btnEdit.style.display = 'inline-block';
            btnSave.style.display = 'none';
        }
    }

    function saveDef() {
        if (!activeTermId) return;
        const newDef = document.getElementById('tp-def-edit').value;

        if (!userTerms[activeTermId]) userTerms[activeTermId] = {};
        userTerms[activeTermId].definitionOverride = newDef;
        saveUserOverrides();

        document.getElementById('tp-definition').textContent = newDef;
        toggleEditDef();
    }

    /**
     * Practice integration
     */
    function practiceQuiz() {
        if (!activeTermId) return;
        closePanel();

        // Call the app's startQuiz with filter
        // Assuming global function startQuiz or switchSection exists
        // We will dispatch a custom event or set a global filter
        window.quizFilterTermId = activeTermId;

        if (typeof switchSection === 'function') {
            switchSection('quiz');
        }
        // If there is an initQuiz or similar, we might need to trigger it.
        // For now, we set the global flag.
        console.log('Starting quiz for term:', activeTermId);

        // Trigger generic refresh if needed
        if (typeof renderQuiz === 'function') renderQuiz();
    }

    function practiceSRS() {
        if (!activeTermId) return;
        closePanel();

        window.flashcardFilterTermId = activeTermId;
        if (typeof switchSection === 'function') {
            switchSection('flashcards');
        }
        console.log('Starting SRS for term:', activeTermId);

        // Maybe trigger re-render of flashcards
        if (typeof initFlashcards === 'function') initFlashcards();
    }

    /**
     * Global Search (Ctrl + K)
     */
    function setupGlobalSearch() {
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                // Simple prompt for now, or build a nice palette later
                const query = prompt('Hledat pojem:');
                if (query) {
                    const found = termIndex.find(t => t.text.toLowerCase().includes(query.toLowerCase()));
                    if (found) {
                        openPanel(found.termId);
                    } else {
                        alert('Pojem nenalezen.');
                    }
                }
            }
        });
    }

    return {
        init,
        openPanel,
        closePanel,
        linkifyHTML,
        toggleEditDef,
        saveDef,
        practiceQuiz,
        practiceSRS,
        getTerm: (id) => terms[id]
    };

})();

// Auto-init if document is ready, or wait
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => TermSystem.init());
} else {
    TermSystem.init();
}
