const flashcardsData = window.studyData.flashcards; const quizData = window.studyData.quizzes; const topicsData = window.studyData.topics;
        // ========== STATE ==========
        let currentCardIndex = 0;
        let currentDueIndex = 0;
        let cardFlipped = false;
        let cardStats = {};
        let quizState = { current: 0, score: 0, answered: false };
        let studyStartTime = Date.now();
        let cardsStudiedToday = parseInt(localStorage.getItem('cardsStudiedToday') || '0');
        let studyStreak = parseInt(localStorage.getItem('studyStreak') || '0');
        let lastStudyDate = localStorage.getItem('lastStudyDate') || null;


        // Helper to check for new day
        function checkDailyProgress() {
            const today = new Date().toLocaleDateString();

            if (lastStudyDate !== today) {
                // It's a new day
                cardsStudiedToday = 0;
                localStorage.setItem('cardsStudiedToday', '0');

                // Check streak
                if (lastStudyDate) {
                    const lastDate = new Date(lastStudyDate.split('.').reverse().join('-')); // Format assuming DD.MM.YYYY from locale
                    const currentDate = new Date();
                    const diffTime = Math.abs(currentDate - lastDate);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                    // If more than 1 day passed (yesterday), reset streak
                    // Note: This logic depends on exact times, let's use a simpler approach
                    // If lastStudyDate was NOT yesterday, reset streak.

                    const yesterday = new Date();
                    yesterday.setDate(yesterday.getDate() - 1);
                    const yesterdayStr = yesterday.toLocaleDateString();

                    if (lastStudyDate !== yesterdayStr) {
                        // Missed a day (or more)
                        if (cardsStudiedToday === 0) { // Double check we haven't already incremented today
                            // Actually, if we are here, lastStudyDate != today. 
                            // So we just need to know if we broke the streak.
                            // If last study date is NOT yesterday, streak resets to 0.
                            studyStreak = 0;
                            localStorage.setItem('studyStreak', '0');
                        }
                    }
                }

                // We don't update lastStudyDate here yet, we do it when user actually performs an action
            }
        }
        let currentSection = 'dashboard';

        // Quiz V2 State
        let quizSettings = {
            mode: 'drill',        // drill, exam, weakness
            questionType: 'mc',   // mc, open, mixed
            ignoreDiacritics: true,
            fuzzyMatching: true,
            timerEnabled: false,
            timerMinutes: 20
        };
        let quizTimer = null;
        let quizTimeRemaining = 0;

        // Mistake Bank
        let mistakeBank = [];

        // Question Statistics (per-question)
        let questionStats = {};

        // Topic Statistics (per-topic)
        let topicStats = {};

        // ========== UTILITY FUNCTIONS - Czech Text Normalization ==========
        const czechDiacriticsMap = {
            'Ăˇ': 'a', 'ÄŤ': 'c', 'ÄŹ': 'd', 'Ă©': 'e', 'Ä›': 'e', 'Ă­': 'i',
            'Ĺ': 'n', 'Ăł': 'o', 'Ĺ™': 'r', 'Ĺˇ': 's', 'ĹĄ': 't', 'Ăş': 'u',
            'ĹŻ': 'u', 'Ă˝': 'y', 'Ĺľ': 'z',
            'Ă': 'A', 'ÄŚ': 'C', 'ÄŽ': 'D', 'Ă‰': 'E', 'Äš': 'E', 'ĂŤ': 'I',
            'Ĺ‡': 'N', 'Ă“': 'O', 'Ĺ': 'R', 'Ĺ ': 'S', 'Ĺ¤': 'T', 'Ăš': 'U',
            'Ĺ®': 'U', 'Ăť': 'Y', 'Ĺ˝': 'Z'
        };

        function removeDiacritics(str) {
            return str.split('').map(char => czechDiacriticsMap[char] || char).join('');
        }

        function normalizeText(text, options = {}) {
            let normalized = text.trim().toLowerCase();
            // Remove extra whitespace
            normalized = normalized.replace(/\s+/g, ' ');
            // Remove punctuation
            normalized = normalized.replace(/[.,!?;:()'"â€ž"â€“â€”\-\/\\]/g, '');
            // Optionally remove diacritics
            if (options.ignoreDiacritics) {
                normalized = removeDiacritics(normalized);
            }
            return normalized;
        }

        // Levenshtein distance for fuzzy matching
        function levenshteinDistance(str1, str2) {
            const m = str1.length;
            const n = str2.length;
            const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

            for (let i = 0; i <= m; i++) dp[i][0] = i;
            for (let j = 0; j <= n; j++) dp[0][j] = j;

            for (let i = 1; i <= m; i++) {
                for (let j = 1; j <= n; j++) {
                    if (str1[i - 1] === str2[j - 1]) {
                        dp[i][j] = dp[i - 1][j - 1];
                    } else {
                        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
                    }
                }
            }
            return dp[m][n];
        }

        function calculateSimilarity(str1, str2) {
            const maxLen = Math.max(str1.length, str2.length);
            if (maxLen === 0) return 1;
            const distance = levenshteinDistance(str1, str2);
            return 1 - (distance / maxLen);
        }

        function evaluateAnswer(userAnswer, correctAnswer, options = {}) {
            const normUser = normalizeText(userAnswer, options);
            const normCorrect = normalizeText(correctAnswer, options);

            // Exact match
            if (normUser === normCorrect) {
                return { correct: true, score: 1, matchType: 'exact' };
            }

            // Fuzzy matching if enabled
            if (options.fuzzyMatching) {
                const similarity = calculateSimilarity(normUser, normCorrect);
                if (similarity >= 0.85) {
                    return { correct: true, score: similarity, matchType: 'fuzzy' };
                }
                if (similarity >= 0.6) {
                    return { correct: false, score: similarity, matchType: 'partial' };
                }
            }

            // Keyword matching - check if key parts are present
            const correctWords = normCorrect.split(' ').filter(w => w.length > 3);
            const userWords = normUser.split(' ');
            const matchedWords = correctWords.filter(cw =>
                userWords.some(uw => uw.includes(cw) || cw.includes(uw))
            );
            const keywordScore = matchedWords.length / Math.max(correctWords.length, 1);

            if (keywordScore >= 0.7) {
                return { correct: false, score: keywordScore, matchType: 'keywords' };
            }

            return { correct: false, score: 0, matchType: 'wrong' };
        }

        // ========== DATA PERSISTENCE ==========
        function initQuizStats() {
            const savedMistakes = localStorage.getItem('mistakeBank');
            if (savedMistakes) mistakeBank = JSON.parse(savedMistakes);

            const savedQuestionStats = localStorage.getItem('questionStats');
            if (savedQuestionStats) questionStats = JSON.parse(savedQuestionStats);

            const savedTopicStats = localStorage.getItem('topicStats');
            if (savedTopicStats) topicStats = JSON.parse(savedTopicStats);

            updateMistakeBadge();
        }

        function saveMistakeBank() {
            localStorage.setItem('mistakeBank', JSON.stringify(mistakeBank));
            updateMistakeBadge();
        }

        function saveQuestionStats() {
            localStorage.setItem('questionStats', JSON.stringify(questionStats));
        }

        function saveTopicStats() {
            localStorage.setItem('topicStats', JSON.stringify(topicStats));
        }

        function updateMistakeBadge() {
            const badge = document.getElementById('mistake-count-badge');
            const unresolvedCount = mistakeBank.filter(m => !m.resolved).length;
            if (badge) badge.textContent = unresolvedCount;
        }

        // ========== SPACED REPETITION (SM-2) ==========
        function initCardStats() {
            const saved = localStorage.getItem('cardStats');
            if (saved) {
                cardStats = JSON.parse(saved);
            }
            // Inicializace statistik pro novĂ© kartiÄŤky (kterĂ© jeĹˇtÄ› nemajĂ­ stats)
            flashcardsData.forEach((_, i) => {
                if (!cardStats[i]) {
                    cardStats[i] = { interval: 1, easeFactor: 2.5, repetitions: 0, nextReview: Date.now() };
                }
            });
        }

        function saveCardStats() {
            localStorage.setItem('cardStats', JSON.stringify(cardStats));
        }

        function getDueCards() {
            const now = Date.now();
            let cards = flashcardsData.map((card, i) => ({ ...card, index: i }))
                .filter((_, i) => cardStats[i].nextReview <= now);

            if (window.flashcardFilterTermId && window.TermSystem) {
                const termId = window.flashcardFilterTermId;
                const term = TermSystem.getTerm(termId);
                const keywords = term ? [term.label, ...(term.aliases || [])] : [];
                if (keywords.length > 0) {
                    cards = cards.filter(c => {
                        const text = (c.q + ' ' + c.a + ' ' + (c.exp || '')).toLowerCase();
                        return keywords.some(k => text.includes(k.toLowerCase()));
                    });
                }
            }
            return cards;
        }

        function rateCard(rating) {
            const stats = cardStats[currentCardIndex];

            // SM-2 Algorithm
            if (rating < 2) {
                stats.repetitions = 0;
                stats.interval = 1;
            } else {
                if (stats.repetitions === 0) {
                    stats.interval = 1;
                } else if (stats.repetitions === 1) {
                    stats.interval = 6;
                } else {
                    stats.interval = Math.round(stats.interval * stats.easeFactor);
                }
                stats.repetitions++;
            }

            stats.easeFactor = Math.max(1.3, stats.easeFactor + (0.1 - (3 - rating) * (0.08 + (3 - rating) * 0.02)));
            stats.nextReview = Date.now() + (stats.interval * 24 * 60 * 60 * 1000);

            checkDailyProgress();

            if (rating >= 2) {
                // If this is the first card of the day (and not just a reset), update streak
                const today = new Date().toLocaleDateString();
                if (lastStudyDate !== today) {
                    studyStreak++;
                    localStorage.setItem('studyStreak', studyStreak.toString());
                    lastStudyDate = today;
                    localStorage.setItem('lastStudyDate', today);
                }

                cardsStudiedToday++;
                localStorage.setItem('cardsStudiedToday', cardsStudiedToday.toString());
            }

            saveCardStats();
            updateStats();
            nextCard();
        }

        // ========== FLASHCARD FUNCTIONS ==========
        function flipCard() {
            const card = document.getElementById('flashcard');
            cardFlipped = !cardFlipped;
            card.classList.toggle('flipped');

            if (cardFlipped) {
                document.getElementById('fc-controls').style.display = 'flex';
            }
        }

        function showCard(index) {
            const dueCards = getDueCards();
            const emptyState = document.getElementById('fc-empty-state');
            const activeContainer = document.getElementById('fc-active-container');

            if (dueCards.length === 0) {
                // Show empty state, hide active container
                emptyState.style.display = 'block';
                activeContainer.style.display = 'none';
                return;
            }

            // Hide empty state, show active container
            emptyState.style.display = 'none';
            activeContainer.style.display = 'block';

            const card = dueCards[index % dueCards.length];
            currentCardIndex = card.index;
            currentDueIndex = index % dueCards.length;

            document.getElementById('fc-category').textContent = card.category;
            document.getElementById('fc-question').innerHTML = TermSystem.linkifyHTML(card.q);
            document.getElementById('fc-answer').innerHTML = TermSystem.linkifyHTML(card.a);
            document.getElementById('fc-current').textContent = index + 1;
            document.getElementById('fc-total').textContent = dueCards.length;

            // ZobrazenĂ­ vysvÄ›tlenĂ­ (pokud existuje)
            const expEl = document.getElementById('fc-explanation');
            if (card.exp) {
                expEl.innerHTML = '<strong>ProÄŤ je to dĹŻleĹľitĂ©:</strong> ' + TermSystem.linkifyHTML(card.exp);
                expEl.style.display = 'block';
            } else {
                expEl.style.display = 'none';
            }

            // Reset flip
            cardFlipped = false;
            document.getElementById('flashcard').classList.remove('flipped');
            document.getElementById('fc-controls').style.display = 'none';
        }

        function nextCard() {
            const dueCards = getDueCards();
            const currentInDue = dueCards.findIndex(c => c.index === currentCardIndex);
            showCard((currentInDue + 1) % Math.max(1, dueCards.length));
        }

        // ========== QUIZ FUNCTIONS ==========
        function shuffleArray(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }

        function getFilteredQuestions() {
            const category = document.getElementById('quiz-category').value;
            let questions = category === 'all' ? quizData : quizData.filter(q => q.cat === category);

            if (window.quizFilterTermId && window.TermSystem) {
                const termId = window.quizFilterTermId;
                const term = TermSystem.getTerm(termId);
                const keywords = term ? [term.label, ...(term.aliases || [])] : [];
                if (keywords.length > 0) {
                    questions = questions.filter(q => {
                        const text = (q.q + ' ' + (q.exp || '')).toLowerCase();
                        return keywords.some(k => text.includes(k.toLowerCase()));
                    });
                }
            }

            // For weakness mode, filter by low accuracy
            if (quizSettings.mode === 'weakness') {
                questions = questions.filter(q => {
                    const qId = hashQuestion(q);
                    const stats = questionStats[qId];
                    if (!stats) return false;
                    const accuracy = stats.correct / Math.max(stats.attempts, 1);
                    return accuracy < 0.7 || stats.streakCorrect < 2;
                });
            }

            return questions;
        }

        function getWeakQuestionCount() {
            return quizData.filter(q => {
                const qId = hashQuestion(q);
                const stats = questionStats[qId];
                if (!stats) return false;
                const accuracy = stats.correct / Math.max(stats.attempts, 1);
                return accuracy < 0.7 || stats.streakCorrect < 2;
            }).length;
        }

        function hashQuestion(q) {
            return btoa(encodeURIComponent(q.q)).slice(0, 16);
        }

        function updateAvailableCount() {
            const filtered = getFilteredQuestions();
            document.getElementById('available-count').textContent = filtered.length;

            // Update weakness count
            const weakCount = getWeakQuestionCount();
            document.getElementById('weak-questions-num').textContent = weakCount;
        }

        // Quiz Mode Selection
        function selectQuizMode(mode) {
            quizSettings.mode = mode;
            document.querySelectorAll('.quiz-mode-btn').forEach(btn => {
                btn.classList.toggle('selected', btn.dataset.mode === mode);
            });

            // Show/hide exam options
            document.getElementById('exam-options').style.display = mode === 'exam' ? 'block' : 'none';

            // Show weakness count
            document.getElementById('weakness-count').style.display = mode === 'weakness' ? 'inline' : 'none';

            // Update question count for drill mode
            if (mode === 'drill') {
                document.getElementById('quiz-count').value = '10';
            }

            updateAvailableCount();
        }

        // Question Type Selection
        function selectQuestionType(type) {
            quizSettings.questionType = type;
            document.querySelectorAll('.type-toggle-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.type === type);
            });

            // Show/hide open answer options
            document.getElementById('open-answer-options').style.display =
                (type === 'open' || type === 'mixed') ? 'block' : 'none';
        }

        function showQuizSetup() {
            document.getElementById('quiz-setup').style.display = 'block';
            document.getElementById('mistake-bank-view').style.display = 'none';
            document.getElementById('quiz-header-bar').style.display = 'none';
            document.getElementById('quiz-card').style.display = 'none';
            document.getElementById('quiz-results').style.display = 'none';
            stopQuizTimer();
            updateAvailableCount();
            renderMistakeBank();
        }

        function startQuizWithSettings() {
            // Get settings from UI
            quizSettings.ignoreDiacritics = document.getElementById('ignore-diacritics')?.checked ?? true;
            quizSettings.fuzzyMatching = document.getElementById('fuzzy-matching')?.checked ?? true;
            quizSettings.timerEnabled = document.getElementById('quiz-timer-enabled')?.checked ?? false;
            quizSettings.timerMinutes = parseInt(document.getElementById('quiz-timer-minutes')?.value ?? 20);

            const filtered = getFilteredQuestions();
            if (filtered.length === 0) {
                alert('Ĺ˝ĂˇdnĂ© otĂˇzky k dispozici pro zvolenĂˇ nastavenĂ­.');
                return;
            }

            const countSelect = document.getElementById('quiz-count').value;
            const count = countSelect === 'all' ? filtered.length : Math.min(parseInt(countSelect), filtered.length);

            quizState = {
                current: 0,
                score: 0,
                answered: false,
                questions: shuffleArray(filtered).slice(0, count),
                total: count,
                wrongAnswers: [],
                mode: quizSettings.mode,
                questionType: quizSettings.questionType,
                examAnswers: [] // For exam mode - store answers to show at end
            };

            document.getElementById('quiz-setup').style.display = 'none';
            document.getElementById('mistake-bank-view').style.display = 'none';
            document.getElementById('quiz-header-bar').style.display = 'flex';
            document.getElementById('quiz-card').style.display = 'block';
            document.getElementById('quiz-results').style.display = 'none';

            // Start timer for exam mode
            if (quizSettings.mode === 'exam' && quizSettings.timerEnabled) {
                startQuizTimer(quizSettings.timerMinutes * 60);
            }

            showQuestion();
        }

        function startQuiz() {
            showQuizSetup();
        }

        function toggleHint() {
            const hintText = document.getElementById('quiz-hint-text');
            if (hintText.style.display === 'none') {
                hintText.style.display = 'block';
            } else {
                hintText.style.display = 'none';
            }
        }

        // Determine question type for current question
        function getCurrentQuestionType() {
            if (quizState.questionType === 'mc') return 'mc';
            if (quizState.questionType === 'open') return 'open';
            // Mixed - alternate or random
            return quizState.current % 2 === 0 ? 'mc' : 'open';
        }

        function showQuestion() {
            const q = quizState.questions[quizState.current];
            const total = quizState.total;
            const qType = getCurrentQuestionType();

            document.getElementById('quiz-q-num').textContent = `OtĂˇzka ${quizState.current + 1}`;
            document.getElementById('quiz-q-cat').textContent = q.cat || 'ObecnĂ©';
            document.getElementById('quiz-counter').textContent = `OtĂˇzka ${quizState.current + 1}/${total}`;
            document.getElementById('quiz-question').innerHTML = TermSystem.linkifyHTML(q.q);
            document.getElementById('quiz-progress').style.width = `${((quizState.current + 1) / total) * 100}%`;

            // Hint handling
            const hintContainer = document.getElementById('quiz-hint-container');
            const hintText = document.getElementById('quiz-hint-text');

            if (q.hint) {
                hintContainer.style.display = 'block';
                hintText.textContent = q.hint;
                hintText.style.display = 'none'; // Always hide text initially
            } else {
                hintContainer.style.display = 'none';
            }

            // Update score display (hide in exam mode until end)
            if (quizState.mode === 'exam') {
                document.getElementById('quiz-score').textContent = `OdpovÄ›di: ${quizState.current}`;
            } else {
                document.getElementById('quiz-score').textContent = `SkĂłre: ${quizState.score}/${quizState.current}`;
            }

            // Update type badge
            const typeBadge = document.getElementById('quiz-q-type-badge');
            typeBadge.textContent = qType === 'mc' ? 'VĂ˝bÄ›r' : 'OtevĹ™enĂˇ';
            typeBadge.style.background = qType === 'mc' ? 'var(--secondary)' : 'var(--warning)';

            // Clear previous feedback
            document.getElementById('quiz-feedback-container').style.display = 'none';
            document.getElementById('quiz-feedback-container').innerHTML = '';

            const optionsDiv = document.getElementById('quiz-options');
            const openContainer = document.getElementById('quiz-open-container');
            const openInput = document.getElementById('quiz-open-input');

            if (qType === 'mc') {
                // Multiple choice
                optionsDiv.style.display = 'flex';
                openContainer.style.display = 'none';
                optionsDiv.innerHTML = '';

                q.options.forEach((opt, i) => {
                    const btn = document.createElement('div');
                    btn.className = 'quiz-option';
                    btn.innerHTML = TermSystem.linkifyHTML(opt);
                    btn.onclick = () => selectOption(i);
                    optionsDiv.appendChild(btn);
                });
            } else {
                // Open answer
                optionsDiv.style.display = 'none';
                openContainer.style.display = 'block';
                openInput.value = '';
                openInput.classList.remove('correct', 'incorrect', 'partial');
                openInput.disabled = false;
                openInput.focus();
            }

            quizState.answered = false;
            document.getElementById('quiz-btn').disabled = true;
            document.getElementById('quiz-btn').textContent = qType === 'mc' ? 'Vyberte odpovÄ›ÄŹ' : 'NapiĹˇte odpovÄ›ÄŹ';
        }

        function selectOption(index) {
            if (quizState.answered) return;
            quizState.answered = true;

            const q = quizState.questions[quizState.current];
            const isCorrect = index === q.correct;

            // Update question stats
            updateQuestionStats(q, isCorrect);

            const options = document.querySelectorAll('.quiz-option');

            // In exam mode, don't show feedback
            if (quizState.mode === 'exam') {
                options.forEach(opt => opt.style.pointerEvents = 'none');
                quizState.examAnswers.push({
                    question: q,
                    selectedIndex: index,
                    isCorrect: isCorrect
                });
                if (isCorrect) quizState.score++;
            } else {
                // Normal mode - show feedback immediately
                options.forEach((opt, i) => {
                    opt.style.pointerEvents = 'none';
                    if (i === q.correct) {
                        opt.classList.add('correct');
                    } else if (i === index && !isCorrect) {
                        opt.classList.add('incorrect');
                    }
                });

                if (isCorrect) {
                    quizState.score++;
                } else {
                    const wrongAnswer = {
                        question: q.q,
                        yourAnswer: q.options[index],
                        correctAnswer: q.options[q.correct],
                        category: q.cat,
                        explanation: q.exp || ''
                    };
                    quizState.wrongAnswers.push(wrongAnswer);
                }

                // Show feedback with actions
                showQuestionFeedback(isCorrect, q, q.options[index]);
            }

            document.getElementById('quiz-score').textContent =
                quizState.mode === 'exam'
                    ? `OdpovÄ›di: ${quizState.current + 1}`
                    : `SkĂłre: ${quizState.score}/${quizState.current + 1}`;

            document.getElementById('quiz-btn').disabled = false;
            document.getElementById('quiz-btn').textContent = quizState.current < quizState.total - 1 ? 'DalĹˇĂ­ otĂˇzka' : 'Zobrazit vĂ˝sledky';
        }

        function submitOpenAnswer() {
            if (quizState.answered) return;

            const input = document.getElementById('quiz-open-input');
            const userAnswer = input.value.trim();

            if (!userAnswer) {
                input.style.borderColor = 'var(--danger)';
                return;
            }

            quizState.answered = true;
            input.disabled = true;

            const q = quizState.questions[quizState.current];
            const correctAnswer = q.options[q.correct];

            const evaluation = evaluateAnswer(userAnswer, correctAnswer, {
                ignoreDiacritics: quizSettings.ignoreDiacritics,
                fuzzyMatching: quizSettings.fuzzyMatching
            });

            // Update question stats
            updateQuestionStats(q, evaluation.correct);

            // Apply styling based on result
            input.classList.remove('correct', 'incorrect', 'partial');
            if (evaluation.correct) {
                input.classList.add('correct');
                quizState.score++;
            } else if (evaluation.matchType === 'partial' || evaluation.matchType === 'keywords') {
                input.classList.add('partial');
            } else {
                input.classList.add('incorrect');
            }

            if (!evaluation.correct) {
                quizState.wrongAnswers.push({
                    question: q.q,
                    yourAnswer: userAnswer,
                    correctAnswer: correctAnswer,
                    category: q.cat,
                    explanation: q.exp || '',
                    matchScore: evaluation.score,
                    matchType: evaluation.matchType
                });
            }

            // Show feedback (unless exam mode)
            if (quizState.mode !== 'exam') {
                showQuestionFeedback(evaluation.correct, q, userAnswer, evaluation);
            }

            document.getElementById('quiz-score').textContent =
                quizState.mode === 'exam'
                    ? `OdpovÄ›di: ${quizState.current + 1}`
                    : `SkĂłre: ${quizState.score}/${quizState.current + 1}`;

            document.getElementById('quiz-btn').disabled = false;
            document.getElementById('quiz-btn').textContent = quizState.current < quizState.total - 1 ? 'DalĹˇĂ­ otĂˇzka' : 'Zobrazit vĂ˝sledky';
        }

        function showQuestionFeedback(isCorrect, question, userAnswer, evaluation = null) {
            const container = document.getElementById('quiz-feedback-container');

            let feedbackClass = isCorrect ? 'correct' : 'incorrect';
            let feedbackIcon = isCorrect ? 'âś…' : 'âťŚ';
            let feedbackTitle = isCorrect ? 'SprĂˇvnÄ›!' : 'Ĺ patnÄ›';

            if (evaluation && evaluation.matchType === 'partial') {
                feedbackClass = 'partial';
                feedbackIcon = 'âš ď¸Ź';
                feedbackTitle = 'TĂ©mÄ›Ĺ™ sprĂˇvnÄ›';
            }

            let html = `
                <div class="quiz-feedback ${feedbackClass}">
                    <div class="quiz-feedback-title">
                        ${feedbackIcon} ${feedbackTitle}
                        ${evaluation ? `<span class="match-score ${evaluation.score > 0.8 ? 'high' : evaluation.score > 0.5 ? 'medium' : 'low'}">${Math.round(evaluation.score * 100)}% shoda</span>` : ''}
                    </div>
            `;

            if (!isCorrect) {
                html += `<div style="margin-bottom: 0.5rem;"><strong>SprĂˇvnĂˇ odpovÄ›ÄŹ:</strong> ${question.options[question.correct]}</div>`;
            }

            if (question.exp) {
                html += `<div style="color: #c4c4cc; font-size: 0.9rem;"><strong>VysvÄ›tlenĂ­:</strong> ${question.exp}</div>`;
            }

            // Action buttons
            html += `
                <div class="quiz-feedback-actions">
                    ${!isCorrect ? `<button class="quiz-action-btn" onclick="addCurrentToMistakeBank()">đź“‹ Do banky chyb</button>` : ''}
                    <button class="quiz-action-btn" onclick="createFlashcardFromQuestion()">đźŽ´ VytvoĹ™it kartiÄŤku</button>
                    ${evaluation && !evaluation.correct && (evaluation.matchType === 'partial' || evaluation.matchType === 'keywords') ?
                    `<button class="override-btn" onclick="overrideAsCorrect()">âś“ OznaÄŤit jako sprĂˇvnĂ©</button>` : ''}
                </div>
            `;

            html += '</div>';

            container.innerHTML = html;
            container.style.display = 'block';
        }

        function overrideAsCorrect() {
            // Remove from wrong answers
            quizState.wrongAnswers.pop();
            quizState.score++;

            // Update UI
            document.getElementById('quiz-score').textContent = `SkĂłre: ${quizState.score}/${quizState.current + 1}`;

            // Update feedback
            const container = document.getElementById('quiz-feedback-container');
            const feedback = container.querySelector('.quiz-feedback');
            if (feedback) {
                feedback.classList.remove('incorrect', 'partial');
                feedback.classList.add('correct');
                feedback.querySelector('.quiz-feedback-title').innerHTML = 'âś… SprĂˇvnÄ› (ruÄŤnÄ› oznaÄŤeno)';
            }

            // Update question stats
            const q = quizState.questions[quizState.current];
            updateQuestionStats(q, true);
        }

        function updateQuestionStats(question, isCorrect) {
            const qId = hashQuestion(question);

            if (!questionStats[qId]) {
                questionStats[qId] = {
                    attempts: 0,
                    correct: 0,
                    streakCorrect: 0,
                    lastAttemptAt: null,
                    history: []
                };
            }

            const stats = questionStats[qId];
            stats.attempts++;
            stats.lastAttemptAt = Date.now();

            if (isCorrect) {
                stats.correct++;
                stats.streakCorrect++;
            } else {
                stats.streakCorrect = 0;
            }

            // Keep last 10 attempts in history
            stats.history.push({ correct: isCorrect, at: Date.now() });
            if (stats.history.length > 10) stats.history.shift();

            saveQuestionStats();

            // Update topic stats
            updateTopicStats(question.cat, isCorrect);
        }

        function updateTopicStats(topic, isCorrect) {
            if (!topic) return;

            if (!topicStats[topic]) {
                topicStats[topic] = {
                    attempts: 0,
                    correct: 0,
                    lastStudiedAt: null
                };
            }

            const stats = topicStats[topic];
            stats.attempts++;
            stats.lastStudiedAt = Date.now();
            if (isCorrect) stats.correct++;

            saveTopicStats();
        }

        function addCurrentToMistakeBank() {
            const q = quizState.questions[quizState.current];
            const lastWrong = quizState.wrongAnswers[quizState.wrongAnswers.length - 1];

            if (!lastWrong) return;

            const mistake = {
                id: Date.now(),
                question: q.q,
                yourAnswer: lastWrong.yourAnswer,
                correctAnswer: lastWrong.correctAnswer,
                category: q.cat,
                explanation: q.exp || '',
                date: new Date().toISOString(),
                resolved: false,
                questionData: q
            };

            // Check if already exists
            const exists = mistakeBank.some(m => m.question === mistake.question && !m.resolved);
            if (!exists) {
                mistakeBank.push(mistake);
                saveMistakeBank();
                alert('PĹ™idĂˇno do banky chyb!');
            } else {
                alert('Tato chyba uĹľ je v bance.');
            }
        }

        function createFlashcardFromQuestion() {
            const q = quizState.questions[quizState.current];

            // Add to flashcardsData (in memory - would need proper persistence)
            const newCard = {
                category: q.cat,
                q: q.q,
                a: q.options[q.correct],
                exp: q.exp || ''
            };

            // For now, just show alert with the card info
            alert(`KartiÄŤka vytvoĹ™ena!\n\nOtĂˇzka: ${newCard.q}\nOdpovÄ›ÄŹ: ${newCard.a}`);
        }

        function nextQuestion() {
            if (quizState.current < quizState.total - 1) {
                quizState.current++;
                showQuestion();
            } else {
                showResults();
            }
        }

        // Timer functions
        function startQuizTimer(seconds) {
            quizTimeRemaining = seconds;
            updateTimerDisplay();
            document.getElementById('quiz-timer').style.display = 'flex';

            quizTimer = setInterval(() => {
                quizTimeRemaining--;
                updateTimerDisplay();

                if (quizTimeRemaining <= 0) {
                    stopQuizTimer();
                    alert('ÄŚas vyprĹˇel!');
                    showResults();
                }
            }, 1000);
        }

        function stopQuizTimer() {
            if (quizTimer) {
                clearInterval(quizTimer);
                quizTimer = null;
            }
            document.getElementById('quiz-timer').style.display = 'none';
        }

        function updateTimerDisplay() {
            const minutes = Math.floor(quizTimeRemaining / 60);
            const seconds = quizTimeRemaining % 60;
            const display = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            document.getElementById('quiz-time-remaining').textContent = display;

            const timerEl = document.getElementById('quiz-timer');
            timerEl.classList.remove('warning', 'danger');
            if (quizTimeRemaining <= 60) {
                timerEl.classList.add('danger');
            } else if (quizTimeRemaining <= 180) {
                timerEl.classList.add('warning');
            }
        }

        // Mistake Bank functions
        function showMistakeBank() {
            document.getElementById('quiz-setup').style.display = 'none';
            document.getElementById('mistake-bank-view').style.display = 'block';
            renderMistakeBank();
        }

        function hideMistakeBank() {
            document.getElementById('mistake-bank-view').style.display = 'none';
            document.getElementById('quiz-setup').style.display = 'block';
        }

        function renderMistakeBank() {
            const container = document.getElementById('mistake-list');
            const unresolved = mistakeBank.filter(m => !m.resolved);
            const resolved = mistakeBank.filter(m => m.resolved);

            document.getElementById('total-mistakes').textContent = mistakeBank.length;
            document.getElementById('unresolved-mistakes').textContent = unresolved.length;
            document.getElementById('resolved-mistakes').textContent = resolved.length;

            if (mistakeBank.length === 0) {
                container.innerHTML = `
                    <div class="ui-state">
                        <span class="ui-state-icon">âś¨</span>
                        <div class="ui-state-title">Ĺ˝ĂˇdnĂ© chyby!</div>
                        <div class="ui-state-desc">ZatĂ­m jsi neudÄ›lal/a ĹľĂˇdnĂ© chyby v kvĂ­zech.</div>
                    </div>
                `;
                return;
            }

            container.innerHTML = [...unresolved, ...resolved].map(m => `
                <div class="mistake-item ${m.resolved ? 'resolved' : ''}" data-id="${m.id}">
                    <div class="mistake-header">
                        <span class="mistake-category">${m.category}</span>
                        <span class="mistake-date">${new Date(m.date).toLocaleDateString('cs-CZ')}</span>
                    </div>
                    <div class="mistake-question">${m.question}</div>
                    <div class="mistake-answers">
                        <div class="mistake-your-answer">TvĂˇ odpovÄ›ÄŹ: ${m.yourAnswer}</div>
                        <div class="mistake-correct-answer">SprĂˇvnÄ›: ${m.correctAnswer}</div>
                    </div>
                    ${m.explanation ? `<div style="font-size: 0.85rem; color: #c4c4cc; margin-top: 0.5rem;">${m.explanation}</div>` : ''}
                    <div class="mistake-actions">
                        ${!m.resolved ?
                    `<button class="quiz-action-btn" onclick="markMistakeResolved(${m.id})">âś“ VyĹ™eĹˇeno</button>` :
                    `<button class="quiz-action-btn" onclick="markMistakeUnresolved(${m.id})">â†© Znovu otevĹ™Ă­t</button>`
                }
                        <button class="quiz-action-btn" onclick="deleteMistake(${m.id})">đź—‘ď¸Ź Smazat</button>
                    </div>
                </div>
            `).join('');
        }

        function markMistakeResolved(id) {
            const mistake = mistakeBank.find(m => m.id === id);
            if (mistake) {
                mistake.resolved = true;
                saveMistakeBank();
                renderMistakeBank();
            }
        }

        function markMistakeUnresolved(id) {
            const mistake = mistakeBank.find(m => m.id === id);
            if (mistake) {
                mistake.resolved = false;
                saveMistakeBank();
                renderMistakeBank();
            }
        }

        function deleteMistake(id) {
            mistakeBank = mistakeBank.filter(m => m.id !== id);
            saveMistakeBank();
            renderMistakeBank();
        }

        function clearResolvedMistakes() {
            if (confirm('Opravdu smazat vĹˇechny vyĹ™eĹˇenĂ© chyby?')) {
                mistakeBank = mistakeBank.filter(m => !m.resolved);
                saveMistakeBank();
                renderMistakeBank();
            }
        }

        function practiceMistakes() {
            const unresolvedMistakes = mistakeBank.filter(m => !m.resolved && m.questionData);
            if (unresolvedMistakes.length === 0) {
                alert('Ĺ˝ĂˇdnĂ© nevyĹ™eĹˇenĂ© chyby k procviÄŤenĂ­.');
                return;
            }

            // Create quiz from mistakes
            quizState = {
                current: 0,
                score: 0,
                answered: false,
                questions: shuffleArray(unresolvedMistakes.map(m => m.questionData)),
                total: unresolvedMistakes.length,
                wrongAnswers: [],
                mode: 'drill',
                questionType: 'mc'
            };

            document.getElementById('mistake-bank-view').style.display = 'none';
            document.getElementById('quiz-header-bar').style.display = 'flex';
            document.getElementById('quiz-card').style.display = 'block';
            showQuestion();
        }

        function exportMistakesCSV() {
            if (mistakeBank.length === 0) {
                alert('Ĺ˝ĂˇdnĂ© chyby k exportu.');
                return;
            }

            const header = 'OtĂˇzka,TvĂˇ odpovÄ›ÄŹ,SprĂˇvnĂˇ odpovÄ›ÄŹ,Kategorie,VysvÄ›tlenĂ­,Datum,VyĹ™eĹˇeno\n';
            const rows = mistakeBank.map(m =>
                `"${m.question.replace(/"/g, '""')}","${m.yourAnswer.replace(/"/g, '""')}","${m.correctAnswer.replace(/"/g, '""')}","${m.category}","${(m.explanation || '').replace(/"/g, '""')}","${m.date}","${m.resolved ? 'Ano' : 'Ne'}"`
            ).join('\n');

            const csv = header + rows;
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'banka_chyb.csv';
            link.click();
        }

        function showResults() {
            document.getElementById('quiz-header-bar').style.display = 'none';
            document.getElementById('quiz-card').style.display = 'none';
            document.getElementById('quiz-results').style.display = 'block';

            const percent = Math.round((quizState.score / quizState.total) * 100);
            document.getElementById('final-score').textContent = `${percent}%`;

            let message = '';
            if (percent >= 90) message = 'VynikajĂ­cĂ­! Jsi pĹ™ipraven/a na zkouĹˇku!';
            else if (percent >= 70) message = 'Velmi dobĹ™e! JeĹˇtÄ› trochu procviÄŤ.';
            else if (percent >= 50) message = 'DobĹ™e, ale je co zlepĹˇovat.';
            else message = 'VĂ­ce studia potĹ™eba. Zkus flashcards!';

            document.getElementById('results-message').textContent = message;

            // Show wrong answers
            const detailsDiv = document.getElementById('results-details');
            if (quizState.wrongAnswers.length > 0) {
                detailsDiv.innerHTML = `
                    <h3 style="margin-bottom: 1rem; color: var(--danger);">ChybnĂ© odpovÄ›di (${quizState.wrongAnswers.length}):</h3>
                    ${quizState.wrongAnswers.map(w => `
                        <div style="margin-bottom: 1rem; padding: 1rem; background: var(--bg); border-radius: 8px; border-left: 3px solid var(--danger);">
                            <div style="font-weight: 600; margin-bottom: 0.5rem;">${w.question}</div>
                            <div style="color: var(--danger); font-size: 0.9rem;">TvĂˇ odpovÄ›ÄŹ: ${w.yourAnswer}</div>
                            <div style="color: var(--secondary); font-size: 0.9rem;">SprĂˇvnÄ›: ${w.correctAnswer}</div>
                            <div style="color: #c4c4cc; font-size: 0.8rem; margin-top: 0.25rem;">${w.category}</div>
                        </div>
                    `).join('')}
                `;
            } else {
                detailsDiv.innerHTML = '<p style="color: var(--secondary); text-align: center;">VĹˇechny odpovÄ›di sprĂˇvnÄ›!</p>';
            }

            // Save to history
            const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
            history.push(percent);
            if (history.length > 20) history.shift();
            localStorage.setItem('quizHistory', JSON.stringify(history));
            updateStats();
        }

        // Initialize category selector
        document.getElementById('quiz-category')?.addEventListener('change', updateAvailableCount);

        // ========== TOPICS ==========
        function renderTopics() {
            const grid = document.getElementById('topics-grid');
            grid.innerHTML = '';

            topicsData.forEach((topic, i) => {
                const mastery = Math.floor(Math.random() * 100); // TODO: Calculate real mastery
                const card = document.createElement('div');
                card.className = 'topic-card';
                card.onclick = () => openTopicModal(i);
                card.innerHTML = `
                    <div class="topic-icon">${topic.icon}</div>
                    <div class="topic-title">${topic.title}</div>
                    <div class="topic-description">${topic.description}</div>
                    <div class="topic-progress">
                        <div class="topic-progress-fill" style="width: ${mastery}%"></div>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        function openTopicModal(index) {
            const topic = topicsData[index];
            document.getElementById('modal-title').textContent = topic.title;

            const body = document.getElementById('modal-body');
            body.innerHTML = `
                <p style="color: #c4c4cc; margin-bottom: 1.5rem;">${topic.description}</p>
                <h3 style="margin-bottom: 1rem;">KlĂ­ÄŤovĂ© pojmy</h3>
                <ul class="concept-list">
                    ${topic.concepts.map(c => `
                        <li class="concept-item">
                            <div class="concept-term">${c.term}</div>
                            <div class="concept-definition">${c.def}</div>
                        </li>
                    `).join('')}
                </ul>
            `;

            document.getElementById('topic-modal').classList.add('active');
        }

        function closeModal() {
            document.getElementById('topic-modal').classList.remove('active');
        }

        // ========== NAVIGATION ==========
        function switchSection(sectionId) {
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));

            document.getElementById(sectionId).classList.add('active');
            document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');

            if (sectionId === 'flashcards') {
                showCard(0);
            } else if (sectionId === 'quiz') {
                startQuiz();
            }
        }

        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', () => switchSection(tab.dataset.section));
        });

        // ========== STATS ==========
        function updateStats() {
            const dueCards = getDueCards();
            const masteredCards = Object.values(cardStats).filter(s => s.repetitions >= 3).length;
            const totalCards = flashcardsData.length;

            document.getElementById('due-today').textContent = dueCards.length;
            document.getElementById('cards-today').textContent = cardsStudiedToday;
            document.getElementById('streak-count').textContent = studyStreak; // Update streak display
            document.getElementById('total-progress').textContent = `${Math.round(masteredCards / totalCards * 100)}%`;
            document.getElementById('mastery-percent').textContent = `${Math.round(masteredCards / totalCards * 100)}%`;

            const studyMinutes = Math.round((Date.now() - studyStartTime) / 60000);
            document.getElementById('study-time').textContent = `${studyMinutes} min`;

            // Calculate correct rate from quiz history
            const quizHistory = JSON.parse(localStorage.getItem('quizHistory') || '[]');
            if (quizHistory.length > 0) {
                const avgScore = quizHistory.reduce((a, b) => a + b, 0) / quizHistory.length;
                document.getElementById('correct-rate').textContent = `${Math.round(avgScore)}%`;
            }
        }

        // ========== CONCEPT MAPS ==========
        const conceptMaps = {
            hierarchy: {
                title: "Hierarchie selekÄŤnĂ­ch jazykĹŻ",
                content: `
                    <div style="text-align: center; padding: 1rem;">
                        <div style="display: inline-block; background: var(--primary); color: white; padding: 1rem 2rem; border-radius: 12px; font-weight: 600; font-size: 1.2rem;">SELEKÄŚNĂŤ JAZYKY</div>
                        <div style="display: flex; justify-content: center; margin: 1rem 0;">
                            <div style="width: 2px; height: 40px; background: var(--border);"></div>
                        </div>
                        <div style="display: flex; justify-content: center; gap: 3rem; flex-wrap: wrap;">
                            <div style="text-align: center;">
                                <div style="background: var(--secondary); color: white; padding: 0.75rem 1.5rem; border-radius: 10px; font-weight: 600;">SYSTEMATICKĂ‰</div>
                                <div style="width: 2px; height: 30px; background: var(--border); margin: 0 auto;"></div>
                                <div style="display: flex; gap: 1rem; margin-top: 0.5rem;">
                                    <div style="background: var(--bg-light); padding: 0.5rem 1rem; border-radius: 8px; font-size: 0.9rem;">
                                        <strong>PrekoordinovanĂ©</strong><br>
                                        <span style="color: #c4c4cc; font-size: 0.8rem;">DDC, LCC, MDT</span>
                                    </div>
                                    <div style="background: var(--bg-light); padding: 0.5rem 1rem; border-radius: 8px; font-size: 0.9rem;">
                                        <strong>PostkoordinovanĂ©</strong><br>
                                        <span style="color: #c4c4cc; font-size: 0.8rem;">CC, BBC</span>
                                    </div>
                                </div>
                            </div>
                            <div style="text-align: center;">
                                <div style="background: var(--warning); color: white; padding: 0.75rem 1.5rem; border-radius: 10px; font-weight: 600;">PĹEDMÄšTOVĂ‰</div>
                                <div style="width: 2px; height: 30px; background: var(--border); margin: 0 auto;"></div>
                                <div style="display: flex; gap: 1rem; margin-top: 0.5rem;">
                                    <div style="background: var(--bg-light); padding: 0.5rem 1rem; border-radius: 8px; font-size: 0.9rem;">
                                        <strong>PrekoordinovanĂ©</strong><br>
                                        <span style="color: #c4c4cc; font-size: 0.8rem;">PĹ™edmÄ›tovĂˇ hesla</span>
                                    </div>
                                    <div style="background: var(--bg-light); padding: 0.5rem 1rem; border-radius: 8px; font-size: 0.9rem;">
                                        <strong>PostkoordinovanĂ©</strong><br>
                                        <span style="color: #c4c4cc; font-size: 0.8rem;">Tezaury, KlĂ­ÄŤ. slova</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            triangle: {
                title: "SĂ©miotickĂ˝ trojĂşhelnĂ­k a Popperovy svÄ›ty",
                content: `
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; padding: 1rem;">
                        <div style="text-align: center;">
                            <h3 style="color: var(--primary); margin-bottom: 1rem;">SĂ©miotickĂ˝ trojĂşhelnĂ­k</h3>
                            <svg viewBox="0 0 300 260" style="max-width: 300px;">
                                <polygon points="150,20 280,230 20,230" fill="none" stroke="#6366f1" stroke-width="3"/>
                                <circle cx="150" cy="20" r="40" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
                                <circle cx="280" cy="230" r="40" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
                                <circle cx="20" cy="230" r="40" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
                                <text x="150" y="25" text-anchor="middle" fill="#10b981" font-weight="600">POJEM</text>
                                <text x="150" y="40" text-anchor="middle" fill="#94a3b8" font-size="10">(vĂ˝znam)</text>
                                <text x="280" y="235" text-anchor="middle" fill="#f59e0b" font-weight="600">ZNAK</text>
                                <text x="280" y="250" text-anchor="middle" fill="#94a3b8" font-size="10">(reprezentace)</text>
                                <text x="20" y="235" text-anchor="middle" fill="#ef4444" font-weight="600">JEV</text>
                                <text x="20" y="250" text-anchor="middle" fill="#94a3b8" font-size="10">(vÄ›c)</text>
                                <line x1="110" y1="230" x2="190" y2="230" stroke="#475569" stroke-width="2" stroke-dasharray="5,5"/>
                            </svg>
                            <p style="color: #c4c4cc; font-size: 0.85rem; margin-top: 1rem;">Znak nemĂˇ pĹ™Ă­mĂ˝ vztah k vÄ›ci (arbitrĂˇrnĂ­ povaha)</p>
                        </div>
                        <div>
                            <h3 style="color: var(--primary); margin-bottom: 1rem;">Popperovy svÄ›ty</h3>
                            <div style="display: flex; flex-direction: column; gap: 1rem;">
                                <div style="background: linear-gradient(90deg, #ef4444 0%, #1e293b 100%); padding: 1rem; border-radius: 10px;">
                                    <strong style="color: #ffffff;">PI - SvÄ›t vÄ›cĂ­</strong>
                                    <p style="color: #e2e8f0; font-size: 0.85rem; margin: 0;">VÄ›ci, jevy, pĹ™edmÄ›ty, skuteÄŤnosti</p>
                                </div>
                                <div style="background: linear-gradient(90deg, #f59e0b 0%, #1e293b 100%); padding: 1rem; border-radius: 10px;">
                                    <strong style="color: #ffffff;">PII - PoznĂˇvajĂ­cĂ­ subjekt</strong>
                                    <p style="color: #e2e8f0; font-size: 0.85rem; margin: 0;">Manipuluje s vÄ›cmi, pojmy a znaky</p>
                                </div>
                                <div style="background: linear-gradient(90deg, #10b981 0%, #1e293b 100%); padding: 1rem; border-radius: 10px;">
                                    <strong style="color: #ffffff;">PIII - ZaznamenanĂ© poznĂˇnĂ­</strong>
                                    <p style="color: #e2e8f0; font-size: 0.85rem; margin: 0;">KomunikaÄŤnĂ­ nĂˇstroje, dokumenty</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            dataflow: {
                title: "Data â†’ Informace â†’ Znalosti",
                content: `
                    <div style="padding: 1rem;">
                        <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; flex-wrap: wrap;">
                            <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 12px; text-align: center; min-width: 200px; border: 2px solid var(--danger);">
                                <div style="font-size: 2rem; margin-bottom: 0.5rem;">đź“Š</div>
                                <div style="font-weight: 700; color: var(--danger); font-size: 1.2rem;">DATA</div>
                                <div style="color: #c4c4cc; font-size: 0.85rem; margin-top: 0.5rem;">
                                    SymbolickĂ© reprezentace<br>
                                    ĹetÄ›zec znakĹŻ<br>
                                    <em>PĹ™: 460,8</em>
                                </div>
                            </div>
                            <div style="font-size: 2rem; color: var(--primary);">â†’</div>
                            <div style="background: var(--primary); color: white; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem;">+ VĂťZNAM</div>
                            <div style="font-size: 2rem; color: var(--primary);">â†’</div>
                            <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 12px; text-align: center; min-width: 200px; border: 2px solid var(--warning);">
                                <div style="font-size: 2rem; margin-bottom: 0.5rem;">đź“„</div>
                                <div style="font-weight: 700; color: var(--warning); font-size: 1.2rem;">INFORMACE</div>
                                <div style="color: #c4c4cc; font-size: 0.85rem; margin-top: 0.5rem;">
                                    Data s vĂ˝znamem<br>
                                    FaktografickĂ©, bibliografickĂ©<br>
                                    <em>PĹ™: 460,8 m.n.m.</em>
                                </div>
                            </div>
                            <div style="font-size: 2rem; color: var(--primary);">â†’</div>
                            <div style="background: var(--secondary); color: white; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem;">+ KONTEXT</div>
                            <div style="font-size: 2rem; color: var(--primary);">â†’</div>
                            <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 12px; text-align: center; min-width: 200px; border: 2px solid var(--secondary);">
                                <div style="font-size: 2rem; margin-bottom: 0.5rem;">đź§ </div>
                                <div style="font-weight: 700; color: var(--secondary); font-size: 1.2rem;">ZNALOSTI</div>
                                <div style="color: #c4c4cc; font-size: 0.85rem; margin-top: 0.5rem;">
                                    Informace s kontextem<br>
                                    MĂ©dium: mozek<br>
                                    <em>PĹ™: 460,8 m.n.m., ĹĂ­p</em>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            indexing: {
                title: "Proces indexace",
                content: `
                    <div style="padding: 1rem;">
                        <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 600px; margin: 0 auto;">
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="background: var(--primary); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">1</div>
                                <div style="flex: 1; background: var(--bg-light); padding: 1rem; border-radius: 10px; border-left: 3px solid var(--primary);">
                                    <strong style="color: var(--text);">ObsahovĂˇ analĂ˝za</strong>
                                    <p style="color: #c4c4cc; font-size: 0.85rem; margin: 0.25rem 0 0 0;">Typy ÄŤtenĂ­: orientaÄŤnĂ­, kurzorickĂ©, selektivnĂ­, statarickĂ©, racionĂˇlnĂ­</p>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="background: var(--primary); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">2</div>
                                <div style="flex: 1; background: var(--bg-light); padding: 1rem; border-radius: 10px; border-left: 3px solid var(--primary);">
                                    <strong style="color: var(--text);">Identifikace pojmĹŻ</strong>
                                    <p style="color: #c4c4cc; font-size: 0.85rem; margin: 0.25rem 0 0 0;">Zde vznikĂˇ 42,3% chyb! OpominutĂ­ hledisek je nejÄŤastÄ›jĹˇĂ­ chyba.</p>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="background: var(--primary); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">3</div>
                                <div style="flex: 1; background: var(--bg-light); padding: 1rem; border-radius: 10px; border-left: 3px solid var(--primary);">
                                    <strong style="color: var(--text);">VĂ˝bÄ›r znakĹŻ SJ</strong>
                                    <p style="color: #c4c4cc; font-size: 0.85rem; margin: 0.25rem 0 0 0;">Ăšplnost, specifiÄŤnost, indexaÄŤnĂ­ hlediska</p>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="background: var(--secondary); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">âś“</div>
                                <div style="flex: 1; background: var(--bg-light); padding: 1rem; border-radius: 10px; border-left: 3px solid var(--secondary);">
                                    <strong style="color: var(--secondary);">SOD (SelekÄŤnĂ­ obraz dokumentu)</strong>
                                    <p style="color: #c4c4cc; font-size: 0.85rem; margin: 0.25rem 0 0 0;">Soubor lexikĂˇlnĂ­ch jednotek nebo klasifikaÄŤnĂ­ch znakĹŻ</p>
                                </div>
                            </div>
                        </div>
                        <div style="display: flex; justify-content: center; gap: 3rem; margin-top: 2rem; flex-wrap: wrap;">
                            <div style="text-align: center; background: var(--bg-light); padding: 1rem 1.5rem; border-radius: 10px; border-top: 3px solid var(--primary);">
                                <div style="font-size: 1.1rem; font-weight: 700; color: var(--primary);">Recall (Ăšplnost)</div>
                                <div style="color: #c4c4cc; font-size: 0.9rem;">vyhledanĂ© rel. / vĹˇechny rel.</div>
                            </div>
                            <div style="text-align: center; background: var(--bg-light); padding: 1rem 1.5rem; border-radius: 10px; border-top: 3px solid var(--warning);">
                                <div style="font-size: 1.1rem; font-weight: 700; color: var(--warning);">Precision (PĹ™esnost)</div>
                                <div style="color: #c4c4cc; font-size: 0.9rem;">vyhledanĂ© rel. / vĹˇechny vyhled.</div>
                            </div>
                        </div>
                    </div>
                `
            },
            thesaurus: {
                title: "Struktura tezauru",
                content: `
                    <div style="padding: 1rem; text-align: center;">
                        <div style="display: inline-block; background: var(--primary); color: white; padding: 1rem 2rem; border-radius: 12px; font-weight: 600; font-size: 1.1rem;">DESKRIPTOR (preferovanĂ˝ termĂ­n)</div>
                        <div style="display: flex; justify-content: center; gap: 3rem; margin-top: 2rem; flex-wrap: wrap;">
                            <div style="text-align: center;">
                                <div style="background: var(--secondary); color: white; padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600;">BT (Broader Term)</div>
                                <div style="color: #c4c4cc; font-size: 0.85rem; margin-top: 0.5rem;">NadĹ™azenĂ˝ deskriptor</div>
                                <div style="font-size: 1.5rem; margin: 0.5rem 0;">â†‘</div>
                            </div>
                            <div style="text-align: center;">
                                <div style="background: var(--warning); color: white; padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600;">NT (Narrower Term)</div>
                                <div style="color: #c4c4cc; font-size: 0.85rem; margin-top: 0.5rem;">PodĹ™azenĂ˝ deskriptor</div>
                                <div style="font-size: 1.5rem; margin: 0.5rem 0;">â†“</div>
                            </div>
                            <div style="text-align: center;">
                                <div style="background: var(--danger); color: white; padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600;">RT (Related Term)</div>
                                <div style="color: #c4c4cc; font-size: 0.85rem; margin-top: 0.5rem;">PĹ™Ă­buznĂ˝ deskriptor</div>
                                <div style="font-size: 1.5rem; margin: 0.5rem 0;">â†”</div>
                            </div>
                            <div style="text-align: center;">
                                <div style="background: var(--bg-light); border: 2px dashed var(--border); padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600;">UF (Used For)</div>
                                <div style="color: #c4c4cc; font-size: 0.85rem; margin-top: 0.5rem;">Nedeskriptor (ekvivalent)</div>
                                <div style="font-size: 1.5rem; margin: 0.5rem 0;">â‰</div>
                            </div>
                        </div>
                        <div style="margin-top: 2rem; padding: 1rem; background: var(--bg-light); border-radius: 12px;">
                            <h4 style="color: var(--primary); margin-bottom: 0.5rem;">PĹ™Ă­klad deskriptorovĂ©ho odstavce:</h4>
                            <div style="text-align: left; font-family: monospace; color: #c4c4cc;">
                                <strong style="color: var(--text);">informaÄŤnĂ­ systĂ©my</strong><br>
                                BT: informaÄŤnĂ­ technologie<br>
                                NT: databĂˇzovĂ© systĂ©my, knihovnĂ­ systĂ©my<br>
                                RT: informaÄŤnĂ­ sluĹľby, vyhledĂˇvĂˇnĂ­ informacĂ­<br>
                                UF: IS, informaÄŤnĂ­ systĂ©m
                            </div>
                        </div>
                    </div>
                `
            },
            classifications: {
                title: "PĹ™ehled velkĂ˝ch klasifikaÄŤnĂ­ch systĂ©mĹŻ",
                content: `
                    <div style="padding: 1rem;">
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                            <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 12px; border-left: 4px solid #ef4444;">
                                <div style="font-weight: 700; color: #ef4444; font-size: 1.2rem;">DDC</div>
                                <div style="color: #c4c4cc; font-size: 0.85rem;">Deweyho desetinnĂ© tĹ™Ă­dÄ›nĂ­</div>
                                <hr style="border-color: var(--border); margin: 0.75rem 0;">
                                <div style="font-size: 0.9rem;">
                                    <strong>Rok:</strong> 1876 (Melvil Dewey)<br>
                                    <strong>Typ:</strong> EnumerativnĂ­<br>
                                    <strong>Notace:</strong> NumerickĂˇ<br>
                                    <strong>RozĹˇĂ­Ĺ™enĂ­:</strong> CelosvÄ›tovĂ©
                                </div>
                            </div>
                            <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 12px; border-left: 4px solid #f59e0b;">
                                <div style="font-weight: 700; color: #f59e0b; font-size: 1.2rem;">LCC</div>
                                <div style="color: #c4c4cc; font-size: 0.85rem;">Klasifikace KongresovĂ© knihovny</div>
                                <hr style="border-color: var(--border); margin: 0.75rem 0;">
                                <div style="font-size: 0.9rem;">
                                    <strong>Rok:</strong> pĹ™elom 19./20. st.<br>
                                    <strong>Typ:</strong> EnumerativnĂ­<br>
                                    <strong>Notace:</strong> AlfanumerickĂˇ<br>
                                    <strong>Orientace:</strong> AmerickĂ© reĂˇlie
                                </div>
                            </div>
                            <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 12px; border-left: 4px solid #10b981;">
                                <div style="font-weight: 700; color: #10b981; font-size: 1.2rem;">MDT</div>
                                <div style="color: #c4c4cc; font-size: 0.85rem;">MezinĂˇrodnĂ­ desetinnĂ© tĹ™Ă­dÄ›nĂ­</div>
                                <hr style="border-color: var(--border); margin: 0.75rem 0;">
                                <div style="font-size: 0.9rem;">
                                    <strong>Rok:</strong> poÄŤ. 20. st. (Otlet, La Fontaine)<br>
                                    <strong>Typ:</strong> HierarchickĂ˝ + fazetovĂ˝<br>
                                    <strong>Notace:</strong> SmĂ­ĹˇenĂˇ<br>
                                    <strong>RozĹˇĂ­Ĺ™enĂ­:</strong> CelosvÄ›tovĂ©
                                </div>
                            </div>
                            <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 12px; border-left: 4px solid #6366f1;">
                                <div style="font-weight: 700; color: #6366f1; font-size: 1.2rem;">CC</div>
                                <div style="color: #c4c4cc; font-size: 0.85rem;">DvojteÄŤkovĂ© tĹ™Ă­dÄ›nĂ­</div>
                                <hr style="border-color: var(--border); margin: 0.75rem 0;">
                                <div style="font-size: 0.9rem;">
                                    <strong>Rok:</strong> 1933 (Ranganathan)<br>
                                    <strong>Typ:</strong> FazetovĂ˝ (PMEST)<br>
                                    <strong>RozĹˇĂ­Ĺ™enĂ­:</strong> OmezenĂ©<br>
                                    <strong>VĂ˝znam:</strong> TeoretickĂ˝ pĹ™Ă­nos
                                </div>
                            </div>
                            <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 12px; border-left: 4px solid #8b5cf6;">
                                <div style="font-weight: 700; color: #8b5cf6; font-size: 1.2rem;">BBC</div>
                                <div style="color: #c4c4cc; font-size: 0.85rem;">Blissovo bibliografickĂ© tĹ™Ă­dÄ›nĂ­</div>
                                <hr style="border-color: var(--border); margin: 0.75rem 0;">
                                <div style="font-size: 0.9rem;">
                                    <strong>Rok:</strong> 1940-1953 (Bliss)<br>
                                    <strong>Typ:</strong> FazetovĂ˝<br>
                                    <strong>ZĂˇklad:</strong> FilosofickĂ˝<br>
                                    <strong>RozĹˇĂ­Ĺ™enĂ­:</strong> MinimĂˇlnĂ­
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            lrm: {
                title: "LRM - Library Reference Model",
                content: `
                    <div style="padding: 1rem;">
                        <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 600px; margin: 0 auto;">
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="background: var(--primary); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; flex-shrink: 0;">đź’ˇ</div>
                                <div style="flex: 1; background: var(--bg-light); padding: 1rem; border-radius: 10px; border-left: 3px solid var(--primary);">
                                    <strong style="color: var(--primary);">DĂŤLO (Work)</strong>
                                    <p style="color: #c4c4cc; font-size: 0.85rem; margin: 0.25rem 0 0 0;">AbstraktnĂ­ intelektuĂˇlnĂ­/umÄ›leckĂ˝ vĂ˝tvor<br><em>PĹ™: "BabiÄŤka" jako literĂˇrnĂ­ koncept</em></p>
                                </div>
                            </div>
                            <div style="text-align: center; color: #c4c4cc;">â†“ realizovĂˇno jako â†“</div>
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="background: var(--secondary); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; flex-shrink: 0;">đź“ť</div>
                                <div style="flex: 1; background: var(--bg-light); padding: 1rem; border-radius: 10px; border-left: 3px solid var(--secondary);">
                                    <strong style="color: var(--secondary);">VYJĂDĹENĂŤ (Expression)</strong>
                                    <p style="color: #c4c4cc; font-size: 0.85rem; margin: 0.25rem 0 0 0;">KonkrĂ©tnĂ­ realizace dĂ­la<br><em>PĹ™: ÄŚeskĂ˝ originĂˇl, anglickĂ˝ pĹ™eklad, audiokniha</em></p>
                                </div>
                            </div>
                            <div style="text-align: center; color: #c4c4cc;">â†“ ztÄ›lesnÄ›no v â†“</div>
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="background: var(--warning); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; flex-shrink: 0;">đź“š</div>
                                <div style="flex: 1; background: var(--bg-light); padding: 1rem; border-radius: 10px; border-left: 3px solid var(--warning);">
                                    <strong style="color: var(--warning);">PROVEDENĂŤ (Manifestation)</strong>
                                    <p style="color: #c4c4cc; font-size: 0.85rem; margin: 0.25rem 0 0 0;">KonkrĂ©tnĂ­ vydĂˇnĂ­<br><em>PĹ™: Albatros 2020, Odeon 1985</em></p>
                                </div>
                            </div>
                            <div style="text-align: center; color: #c4c4cc;">â†“ exemplifikovĂˇno jako â†“</div>
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="background: var(--danger); color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; flex-shrink: 0;">đź“–</div>
                                <div style="flex: 1; background: var(--bg-light); padding: 1rem; border-radius: 10px; border-left: 3px solid var(--danger);">
                                    <strong style="color: var(--danger);">JEDNOTKA (Item)</strong>
                                    <p style="color: #c4c4cc; font-size: 0.85rem; margin: 0.25rem 0 0 0;">KonkrĂ©tnĂ­ exemplĂˇĹ™<br><em>PĹ™: Tento vĂ˝tisk v mĂ˝ch rukou</em></p>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            doclevels: {
                title: "DokumentografickĂ© ĂşrovnÄ› IO",
                content: `
                    <div style="padding: 1rem;">
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem; max-width: 900px; margin: 0 auto;">
                            <div style="background: var(--bg-light); padding: 1rem; border-radius: 10px; border-top: 4px solid #ef4444; text-align: center;">
                                <div style="font-weight: 700; color: #ef4444; font-size: 1.5rem;">A</div>
                                <div style="font-weight: 600; margin: 0.5rem 0;">NosiÄŤ/mĂ©dium</div>
                                <div style="color: #c4c4cc; font-size: 0.8rem;">papĂ­r, digitĂˇlnĂ­</div>
                            </div>
                            <div style="background: var(--bg-light); padding: 1rem; border-radius: 10px; border-top: 4px solid #f59e0b; text-align: center;">
                                <div style="font-weight: 700; color: #f59e0b; font-size: 1.5rem;">B</div>
                                <div style="font-weight: 600; margin: 0.5rem 0;">Forma</div>
                                <div style="color: #c4c4cc; font-size: 0.8rem;">kniha, databĂˇze</div>
                            </div>
                            <div style="background: var(--bg-light); padding: 1rem; border-radius: 10px; border-top: 4px solid #10b981; text-align: center;">
                                <div style="font-weight: 700; color: #10b981; font-size: 1.5rem;">C</div>
                                <div style="font-weight: 600; margin: 0.5rem 0;">Typ/druh</div>
                                <div style="color: #c4c4cc; font-size: 0.8rem;">tiĹˇtÄ›nĂˇ kniha, LP</div>
                            </div>
                            <div style="background: var(--bg-light); padding: 1rem; border-radius: 10px; border-top: 4px solid #6366f1; text-align: center;">
                                <div style="font-weight: 700; color: #6366f1; font-size: 1.5rem;">D</div>
                                <div style="font-weight: 600; margin: 0.5rem 0;">FormĂˇt obsahu</div>
                                <div style="color: #c4c4cc; font-size: 0.8rem;">text, obraz, zvuk</div>
                            </div>
                            <div style="background: var(--bg-light); padding: 1rem; border-radius: 10px; border-top: 4px solid #8b5cf6; text-align: center;">
                                <div style="font-weight: 700; color: #8b5cf6; font-size: 1.5rem;">E</div>
                                <div style="font-weight: 600; margin: 0.5rem 0;">Ĺ˝Ăˇnr</div>
                                <div style="color: #c4c4cc; font-size: 0.8rem;">beletrie, faktografie</div>
                            </div>
                            <div style="background: var(--bg-light); padding: 1rem; border-radius: 10px; border-top: 4px solid #ec4899; text-align: center;">
                                <div style="font-weight: 700; color: #ec4899; font-size: 1.5rem;">F</div>
                                <div style="font-weight: 600; margin: 0.5rem 0;">Obsah</div>
                                <div style="color: #c4c4cc; font-size: 0.8rem;">konkrĂ©tnĂ­ tĂ©ma</div>
                            </div>
                        </div>
                        <div style="margin-top: 1.5rem; text-align: center; color: #c4c4cc; font-size: 0.9rem;">
                            Od nejobecnÄ›jĹˇĂ­ch (nosiÄŤ) â†’ po nejkonkrĂ©tnÄ›jĹˇĂ­ (obsah)
                        </div>
                    </div>
                `
            },
            recallprecision: {
                title: "Recall vs Precision",
                content: `
                    <div style="padding: 1rem;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; max-width: 800px; margin: 0 auto;">
                            <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 12px; border: 2px solid var(--secondary);">
                                <h3 style="color: var(--secondary); margin-bottom: 1rem; text-align: center;">RECALL (Ăšplnost)</h3>
                                <div style="background: var(--bg-card); padding: 1rem; border-radius: 8px; text-align: center; margin-bottom: 1rem;">
                                    <div style="font-size: 1.3rem; font-weight: 700;">R = a / (a + b)</div>
                                </div>
                                <div style="font-size: 0.9rem; color: #c4c4cc;">
                                    <strong>a</strong> = vyhledanĂ© relevantnĂ­<br>
                                    <strong>b</strong> = nevyhledanĂ© relevantnĂ­<br><br>
                                    <em>"Kolik z toho, co jsme MÄšLI najĂ­t, jsme naĹˇli?"</em>
                                </div>
                            </div>
                            <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 12px; border: 2px solid var(--warning);">
                                <h3 style="color: var(--warning); margin-bottom: 1rem; text-align: center;">PRECISION (PĹ™esnost)</h3>
                                <div style="background: var(--bg-card); padding: 1rem; border-radius: 8px; text-align: center; margin-bottom: 1rem;">
                                    <div style="font-size: 1.3rem; font-weight: 700;">P = a / (a + c)</div>
                                </div>
                                <div style="font-size: 0.9rem; color: #c4c4cc;">
                                    <strong>a</strong> = vyhledanĂ© relevantnĂ­<br>
                                    <strong>c</strong> = vyhledanĂ© nerelevantnĂ­<br><br>
                                    <em>"Kolik z toho, co jsme NAĹ LI, bylo sprĂˇvnÄ›?"</em>
                                </div>
                            </div>
                        </div>
                        <div style="margin-top: 1.5rem; text-align: center; padding: 1rem; background: var(--bg-light); border-radius: 10px;">
                            <strong style="color: var(--danger);">NepĹ™Ă­mĂˇ ĂşmÄ›ra:</strong>
                            <span style="color: #c4c4cc;">VyĹˇĹˇĂ­ recall â†’ niĹľĹˇĂ­ precision a naopak</span>
                        </div>
                    </div>
                `
            },
            prepost: {
                title: "Pre vs Postkoordinace",
                content: `
                    <div style="padding: 1rem;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; max-width: 900px; margin: 0 auto;">
                            <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--primary);">
                                <h3 style="color: var(--primary); margin-bottom: 1rem;">PREKOORDINACE</h3>
                                <div style="font-size: 0.9rem; margin-bottom: 1rem;">
                                    <strong>Princip:</strong> Pojmy jsou kombinovĂˇny <strong>pĹ™edem</strong> pĹ™i indexaci
                                </div>
                                <div style="background: var(--bg-card); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                                    <div style="color: #c4c4cc; font-size: 0.85rem;">PĹ™Ă­klad:</div>
                                    <div style="font-weight: 600;">"dovoznĂ­ daĹâ€”ojetĂ© osobnĂ­ automobily"</div>
                                </div>
                                <div style="font-size: 0.85rem; color: #c4c4cc;">
                                    <strong>VĂ˝hoda:</strong> PĹ™esnĂ©, jednoznaÄŤnĂ©<br>
                                    <strong>NevĂ˝hoda:</strong> RigidnĂ­, mĂ©nÄ› flexibilnĂ­
                                </div>
                            </div>
                            <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--secondary);">
                                <h3 style="color: var(--secondary); margin-bottom: 1rem;">POSTKOORDINACE</h3>
                                <div style="font-size: 0.9rem; margin-bottom: 1rem;">
                                    <strong>Princip:</strong> Pojmy se kombinujĂ­ <strong>aĹľ pĹ™i vyhledĂˇvĂˇnĂ­</strong>
                                </div>
                                <div style="background: var(--bg-card); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                                    <div style="color: #c4c4cc; font-size: 0.85rem;">PĹ™Ă­klad:</div>
                                    <div style="font-weight: 600;">"dovoznĂ­ daĹ" AND "osobnĂ­ automobil" AND "pouĹľitĂ© zboĹľĂ­"</div>
                                </div>
                                <div style="font-size: 0.85rem; color: #c4c4cc;">
                                    <strong>VĂ˝hoda:</strong> FlexibilnĂ­, kombinovatelnĂ©<br>
                                    <strong>NevĂ˝hoda:</strong> MĹŻĹľe bĂ˝t mĂ©nÄ› pĹ™esnĂ©
                                </div>
                            </div>
                        </div>
                        <div style="margin-top: 1.5rem; padding: 1rem; background: var(--bg-light); border-radius: 10px; text-align: center;">
                            <strong>Tip:</strong> Neexistuje ÄŤistÄ› pre- nebo postkoordinovanĂ˝ SJ - jde o mĂ­ru uplatnÄ›nĂ­ principu
                        </div>
                    </div>
                `
            },
            consistency: {
                title: "Konzistence indexace",
                content: `
                    <div style="padding: 1rem;">
                        <div style="max-width: 700px; margin: 0 auto;">
                            <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
                                <h3 style="color: var(--primary); margin-bottom: 1rem; text-align: center;">Vzorec konzistence</h3>
                                <div style="background: var(--bg-card); padding: 1.5rem; border-radius: 10px; text-align: center; font-size: 1.5rem; font-weight: 700;">
                                    C = a / b
                                </div>
                                <div style="margin-top: 1rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.9rem;">
                                    <div><strong>a</strong> = shodnĂ© znaky</div>
                                    <div><strong>b</strong> = vĹˇechny jedineÄŤnĂ© znaky</div>
                                </div>
                            </div>
                            <div style="background: var(--bg-light); padding: 1rem; border-radius: 10px; margin-bottom: 1rem;">
                                <div style="font-weight: 600; margin-bottom: 0.5rem;">PĹ™Ă­klad:</div>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.85rem;">
                                    <div>
                                        <strong style="color: var(--primary);">IndexĂˇtor 1:</strong><br>
                                        ostrovy, Robinson, dobrodruĹľnĂ© romĂˇny
                                    </div>
                                    <div>
                                        <strong style="color: var(--secondary);">IndexĂˇtor 2:</strong><br>
                                        ostrovy, dobrodruĹľnĂ© romĂˇny, 18. stoletĂ­
                                    </div>
                                </div>
                                <div style="margin-top: 1rem; text-align: center;">
                                    <strong>a = 2</strong> (shodnĂ©), <strong>b = 4</strong> (jedineÄŤnĂ©) â†’ <strong style="color: var(--warning);">C = 50%</strong>
                                </div>
                            </div>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                                <div style="background: var(--bg-light); padding: 1rem; border-radius: 8px; text-align: center;">
                                    <strong style="color: var(--primary);">Interindexer</strong>
                                    <div style="font-size: 0.85rem; color: #c4c4cc;">Shoda mezi indexĂˇtory</div>
                                </div>
                                <div style="background: var(--bg-light); padding: 1rem; border-radius: 8px; text-align: center;">
                                    <strong style="color: var(--secondary);">Intraindexer</strong>
                                    <div style="font-size: 0.85rem; color: #c4c4cc;">Konzistence jednoho indexĂˇtora</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            }
        };

        // Map metadata for accordion cards
        const conceptMapsMetadata = {
            hierarchy: { icon: "đźŚł", desc: "PĹ™ehled typĹŻ SJ a jejich vztahĹŻ" },
            triangle: { icon: "đź”ş", desc: "Jev - Pojem - Znak a Popperovy svÄ›ty" },
            dataflow: { icon: "đź“Š", desc: "Transformace a jejich charakteristiky" },
            indexing: { icon: "đź“ť", desc: "Od obsahovĂ© analĂ˝zy k SOD" },
            thesaurus: { icon: "đź”—", desc: "Vztahy mezi lexikĂˇlnĂ­mi jednotkami" },
            classifications: { icon: "đź“š", desc: "DDC, LCC, MDT, CC, BBC" },
            lrm: { icon: "đź“–", desc: "DĂ­lo â†’ VyjĂˇdĹ™enĂ­ â†’ ProvedenĂ­ â†’ Jednotka" },
            doclevels: { icon: "đź“‹", desc: "A-F: NosiÄŤ aĹľ Obsah" },
            recallprecision: { icon: "đź“Š", desc: "Ăšplnost a pĹ™esnost vyhledĂˇvĂˇnĂ­" },
            prepost: { icon: "đź”„", desc: "KombinovĂˇnĂ­ pojmĹŻ pĹ™i indexaci/vyhledĂˇvĂˇnĂ­" },
            consistency: { icon: "đź“Ź", desc: "Vzorec C = a/b, inter/intraindexer" }
        };

        function renderConceptMapsAccordion() {
            const container = document.getElementById('concept-maps-container');
            if (!container) return;

            let html = '';
            for (const [mapId, map] of Object.entries(conceptMaps)) {
                const meta = conceptMapsMetadata[mapId] || { icon: "đź“„", desc: "" };
                html += `
                    <div class="concept-map-card" id="map-card-${mapId}">
                        <div class="concept-map-header" onclick="toggleConceptMap('${mapId}')">
                            <div class="concept-map-icon">${meta.icon}</div>
                            <div class="concept-map-info">
                                <div class="concept-map-title">${map.title}</div>
                                <div class="concept-map-desc">${meta.desc}</div>
                            </div>
                            <div class="concept-map-toggle">â–Ľ</div>
                        </div>
                        <div class="concept-map-content">
                            <div class="concept-map-content-inner">
                                ${map.content}
                                <button class="concept-map-close-btn" onclick="closeConceptMap('${mapId}')">
                                    â–˛ ZavĹ™Ă­t
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }
            container.innerHTML = html;
        }

        function toggleConceptMap(mapId) {
            const card = document.getElementById(`map-card-${mapId}`);
            if (!card) return;

            const isExpanded = card.classList.contains('expanded');

            // Close all other expanded cards
            document.querySelectorAll('.concept-map-card.expanded').forEach(otherCard => {
                if (otherCard.id !== `map-card-${mapId}`) {
                    otherCard.classList.remove('expanded');
                }
            });

            // Toggle current card
            if (isExpanded) {
                card.classList.remove('expanded');
            } else {
                card.classList.add('expanded');
                // Scroll the card into view smoothly
                setTimeout(() => {
                    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }

        function closeConceptMap(mapId) {
            const card = document.getElementById(`map-card-${mapId}`);
            if (card) {
                card.classList.remove('expanded');
            }
        }

        // Legacy functions for backwards compatibility
        function showConceptMap(mapId) {
            toggleConceptMap(mapId);
        }

        function hideConceptMap() {
            document.querySelectorAll('.concept-map-card.expanded').forEach(card => {
                card.classList.remove('expanded');
            });
        }

        // ========== THEME TOGGLE ==========
        function toggleTheme() {
            const html = document.documentElement;
            const btn = document.getElementById('theme-toggle');
            const currentTheme = html.getAttribute('data-theme');

            if (currentTheme === 'dark') {
                html.setAttribute('data-theme', 'light');
                btn.textContent = 'â€ď¸Ź';
                localStorage.setItem('theme', 'light');
            } else {
                html.setAttribute('data-theme', 'dark');
                btn.textContent = 'đźŚ™';
                localStorage.setItem('theme', 'dark');
            }
        }

        function loadTheme() {
            const savedTheme = localStorage.getItem('theme') || 'dark';
            document.documentElement.setAttribute('data-theme', savedTheme);
            document.getElementById('theme-toggle').textContent = savedTheme === 'dark' ? 'đźŚ™' : 'â€ď¸Ź';
        }

        // ========== AUDIO LOOP (Web Speech API) ==========
        let audioLoopRunning = false;
        let audioLoopIndex = 0;
        let audioSpeed = 1;
        let speechSynthesis = window.speechSynthesis;

        function speak(text, onEnd) {
            if (!speechSynthesis) {
                console.error('Web Speech API nenĂ­ podporovĂˇno');
                if (onEnd) onEnd();
                return;
            }

            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'cs-CZ';
            utterance.rate = audioSpeed;
            utterance.onend = onEnd;
            utterance.onerror = onEnd;
            speechSynthesis.speak(utterance);
        }

        function startAudioLoop() {
            if (!speechSynthesis) {
                alert('VĂˇĹˇ prohlĂ­ĹľeÄŤ nepodporuje Web Speech API');
                return;
            }

            audioLoopRunning = true;
            audioLoopIndex = 0;

            document.getElementById('audio-start').style.display = 'none';
            document.getElementById('audio-stop').style.display = 'inline-flex';
            updateAudioStatus('PĹ™ehrĂˇvĂˇm...', true);

            playNextCard();
        }

        function stopAudioLoop() {
            audioLoopRunning = false;
            speechSynthesis.cancel();

            document.getElementById('audio-start').style.display = 'inline-flex';
            document.getElementById('audio-stop').style.display = 'none';
            updateAudioStatus('Zastaveno', false);
        }

        function playNextCard() {
            if (!audioLoopRunning) return;

            const dueCards = getDueCards();
            if (dueCards.length === 0 || audioLoopIndex >= dueCards.length) {
                stopAudioLoop();
                updateAudioStatus('DokonÄŤeno', false);
                return;
            }

            const card = dueCards[audioLoopIndex];
            showCard(audioLoopIndex);

            updateAudioStatus(`Karta ${audioLoopIndex + 1}/${dueCards.length}: OtĂˇzka`, true);

            // PĹ™eÄŤti otĂˇzku
            speak(card.q, () => {
                if (!audioLoopRunning) return;

                updateAudioStatus(`Karta ${audioLoopIndex + 1}/${dueCards.length}: Pauza...`, true);

                // Pauza pĹ™ed odpovÄ›dĂ­ (3 sekundy)
                setTimeout(() => {
                    if (!audioLoopRunning) return;

                    // OtoÄŤ kartu
                    if (!cardFlipped) flipCard();

                    updateAudioStatus(`Karta ${audioLoopIndex + 1}/${dueCards.length}: OdpovÄ›ÄŹ`, true);

                    // PĹ™eÄŤti odpovÄ›ÄŹ
                    speak(card.a, () => {
                        if (!audioLoopRunning) return;

                        // Pauza pĹ™ed dalĹˇĂ­ kartou (2 sekundy)
                        setTimeout(() => {
                            if (!audioLoopRunning) return;

                            // Reset karty pro dalĹˇĂ­
                            if (cardFlipped) {
                                cardFlipped = false;
                                document.getElementById('flashcard').classList.remove('flipped');
                                document.getElementById('fc-controls').style.display = 'none';
                            }

                            audioLoopIndex++;
                            playNextCard();
                        }, 2000);
                    });
                }, 3000);
            });
        }

        function updateAudioSpeed() {
            audioSpeed = parseFloat(document.getElementById('audio-speed').value);
        }

        function updateAudioStatus(text, isPlaying) {
            const status = document.getElementById('audio-status');
            status.innerHTML = isPlaying
                ? `<span class="pulse"></span><span>${text}</span>`
                : `<span>${text}</span>`;
            status.className = isPlaying ? 'audio-status playing' : 'audio-status';
        }

        // ========== DASHBOARD CTA FUNCTIONS ==========
        function startReviewSession() {
            const dueCards = getDueCards();
            if (dueCards.length === 0) {
                alert('NemĂˇĹˇ ĹľĂˇdnĂ© kartiÄŤky k opakovĂˇnĂ­!');
                return;
            }
            switchSection('flashcards');
            showCard(0);
        }

        function startQuickQuiz() {
            document.getElementById('quiz-count').value = '10';
            document.getElementById('quiz-category').value = 'all';
            switchSection('quiz');
            startQuizWithSettings();
        }

        function updateDashboardCTAs() {
            const dueCards = getDueCards();
            const dueCount = dueCards.length;
            const ctaReview = document.getElementById('cta-review');
            const ctaReviewCount = document.getElementById('cta-review-count');
            const emptyState = document.getElementById('dashboard-empty-state');
            const timeEstimate = document.getElementById('time-estimate');

            // Update review button
            ctaReviewCount.textContent = `${dueCount} kartiÄŤek k opakovĂˇnĂ­`;

            if (dueCount === 0) {
                ctaReview.classList.add('disabled');
                emptyState.style.display = 'block';
                timeEstimate.style.display = 'none';
            } else {
                ctaReview.classList.remove('disabled');
                emptyState.style.display = 'none';
                timeEstimate.style.display = 'block';
                // Estimate: ~30 seconds per card
                const estimatedMinutes = Math.ceil(dueCount * 0.5);
                document.getElementById('estimate-minutes').textContent = `${estimatedMinutes} min`;
            }

            // Update topics count
            const uniqueTopics = [...new Set(flashcardsData.map(c => c.category))];
            document.getElementById('cta-topics-count').textContent = `${uniqueTopics.length} tĂ©mat`;
        }

        // ========== HELP MODAL ==========
        function openHelpModal() {
            document.getElementById('help-modal').classList.add('active');
        }

        function closeHelpModal() {
            document.getElementById('help-modal').classList.remove('active');
        }

        // ========== IMPORT/EXPORT MODAL ==========
        function openImportExportModal() {
            document.getElementById('import-export-modal').classList.add('active');
        }

        function closeImportExportModal() {
            document.getElementById('import-export-modal').classList.remove('active');
            document.getElementById('import-export-status').style.display = 'none';
        }

        function showImportExportStatus(message, isError = false) {
            const status = document.getElementById('import-export-status');
            status.style.display = 'block';
            status.style.background = isError ? 'rgba(239, 68, 68, 0.2)' : 'rgba(6, 214, 160, 0.2)';
            status.style.color = isError ? 'var(--danger)' : 'var(--secondary)';
            status.textContent = message;
        }

        function exportFlashcardsCSV() {
            let csv = 'topic,front,back,explanation\n';
            flashcardsData.forEach(card => {
                const topic = `"${(card.category || '').replace(/"/g, '""')}"`;
                const front = `"${(card.q || '').replace(/"/g, '""')}"`;
                const back = `"${(card.a || '').replace(/"/g, '""')}"`;
                const exp = `"${(card.exp || '').replace(/"/g, '""')}"`;
                csv += `${topic},${front},${back},${exp}\n`;
            });

            downloadFile(csv, 'flashcards.csv', 'text/csv');
            showImportExportStatus('KartiÄŤky ĂşspÄ›ĹˇnÄ› exportovĂˇny!');
        }

        function exportQuizCSV() {
            let csv = 'question,option1,option2,option3,option4,correct_index,category,explanation\n';
            quizData.forEach(q => {
                const question = `"${(q.q || '').replace(/"/g, '""')}"`;
                const opts = q.options.map(o => `"${(o || '').replace(/"/g, '""')}"`).join(',');
                const cat = `"${(q.cat || '').replace(/"/g, '""')}"`;
                const exp = `"${(q.exp || '').replace(/"/g, '""')}"`;
                csv += `${question},${opts},${q.correct},${cat},${exp}\n`;
            });

            downloadFile(csv, 'quiz.csv', 'text/csv');
            showImportExportStatus('KvĂ­zovĂ© otĂˇzky ĂşspÄ›ĹˇnÄ› exportovĂˇny!');
        }

        function exportProgress() {
            const data = {
                cardStats: cardStats,
                cardsStudiedToday: cardsStudiedToday,
                studyStartTime: studyStartTime,
                exportedAt: new Date().toISOString()
            };
            downloadFile(JSON.stringify(data, null, 2), 'progress.json', 'application/json');
            showImportExportStatus('Pokrok ĂşspÄ›ĹˇnÄ› exportovĂˇn!');
        }

        function downloadFile(content, filename, mimeType) {
            const blob = new Blob([content], { type: mimeType });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }

        function importFlashcardsCSV() {
            const input = document.getElementById('import-data').value.trim();
            if (!input) {
                showImportExportStatus('Ĺ˝ĂˇdnĂˇ data k importu!', true);
                return;
            }

            try {
                const lines = input.split('\n');
                const hasHeader = lines[0].toLowerCase().includes('topic') || lines[0].toLowerCase().includes('front');
                const startLine = hasHeader ? 1 : 0;
                let imported = 0;

                for (let i = startLine; i < lines.length; i++) {
                    const line = lines[i].trim();
                    if (!line) continue;

                    // Simple CSV parsing (handles quoted fields)
                    const fields = parseCSVLine(line);
                    if (fields.length >= 3) {
                        // Note: This adds to the runtime array, not persistent without backend
                        console.log('Would import:', { category: fields[0], q: fields[1], a: fields[2], exp: fields[3] || '' });
                        imported++;
                    }
                }

                showImportExportStatus(`AnalyzovĂˇno ${imported} kartiÄŤek. (Import do runtime - pro trvalĂ© uloĹľenĂ­ potĹ™eba backend)`);
            } catch (e) {
                showImportExportStatus('Chyba pĹ™i parsovĂˇnĂ­ CSV: ' + e.message, true);
            }
        }

        function parseCSVLine(line) {
            const result = [];
            let current = '';
            let inQuotes = false;

            for (let i = 0; i < line.length; i++) {
                const char = line[i];
                if (char === '"') {
                    if (inQuotes && line[i + 1] === '"') {
                        current += '"';
                        i++;
                    } else {
                        inQuotes = !inQuotes;
                    }
                } else if (char === ',' && !inQuotes) {
                    result.push(current);
                    current = '';
                } else {
                    current += char;
                }
            }
            result.push(current);
            return result;
        }

        function importProgress() {
            const input = document.getElementById('import-data').value.trim();
            if (!input) {
                showImportExportStatus('Ĺ˝ĂˇdnĂˇ data k importu!', true);
                return;
            }

            try {
                const data = JSON.parse(input);
                if (data.cardStats) {
                    cardStats = data.cardStats;
                    localStorage.setItem('cardStats', JSON.stringify(cardStats));
                    updateStats();
                    showImportExportStatus('Pokrok ĂşspÄ›ĹˇnÄ› importovĂˇn!');
                } else {
                    showImportExportStatus('NeplatnĂ˝ formĂˇt dat pro pokrok.', true);
                }
            } catch (e) {
                showImportExportStatus('Chyba pĹ™i parsovĂˇnĂ­ JSON: ' + e.message, true);
            }
        }

        function resetAllProgress() {
            if (!confirm('Opravdu chceĹˇ smazat veĹˇkerĂ˝ pokrok? Tato akce je nevratnĂˇ!')) return;

            localStorage.removeItem('cardStats');
            localStorage.removeItem('studyStartTime');
            cardStats = {};
            flashcardsData.forEach((_, i) => {
                cardStats[i] = {
                    repetitions: 0,
                    easeFactor: 2.5,
                    interval: 0,
                    nextReview: Date.now(),
                    lastReview: null
                };
            });
            localStorage.setItem('cardStats', JSON.stringify(cardStats));

            // Reset stats
            localStorage.removeItem('cardsStudiedToday');
            localStorage.removeItem('studyStreak');
            localStorage.removeItem('lastStudyDate');
            cardsStudiedToday = 0;
            studyStreak = 0;
            lastStudyDate = null;

            studyStartTime = Date.now();
            updateStats();
            showImportExportStatus('VeĹˇkerĂ˝ pokrok byl smazĂˇn.');
        }

        // ========== ENHANCED AUDIO STUDY MODE ==========
        const AudioStudy = {
            // State
            voices: [],
            selectedVoice: null,
            rate: 1.0,
            pitch: 1.0,
            isPlaying: false,
            isPaused: false,
            isStopped: true,
            mode: 'single', // 'single' | 'podcast'
            currentCardIndex: 0,
            totalCards: 0,
            cardsToPlay: [],
            pauseAfterQuestion: 3,
            pauseAfterCard: 2,
            synth: null,
            currentUtterance: null,
            pauseTimeout: null,

            // Initialize
            init() {
                this.synth = window.speechSynthesis;
                if (!this.synth) {
                    console.warn('Web Speech API not supported');
                    return;
                }

                // Load voices (may need to wait for voiceschanged event)
                this.loadVoices();
                if (this.synth.onvoiceschanged !== undefined) {
                    this.synth.onvoiceschanged = () => this.loadVoices();
                }

                // Load saved settings
                this.loadSettings();
            },

            loadVoices() {
                this.voices = this.synth.getVoices();
                const select = document.getElementById('audio-voice-select');
                if (!select) return;

                // Filter for Czech voices first, then show all
                const czechVoices = this.voices.filter(v => v.lang.startsWith('cs'));
                const otherVoices = this.voices.filter(v => !v.lang.startsWith('cs'));
                const sortedVoices = [...czechVoices, ...otherVoices];

                select.innerHTML = '';

                if (sortedVoices.length === 0) {
                    select.innerHTML = '<option value="">Ĺ˝ĂˇdnĂ© hlasy</option>';
                    return;
                }

                sortedVoices.forEach((voice, i) => {
                    const option = document.createElement('option');
                    option.value = i.toString();
                    const langFlag = voice.lang.startsWith('cs') ? 'đź‡¨đź‡ż ' : '';
                    option.textContent = `${langFlag}${voice.name} (${voice.lang})`;
                    if (voice.default) option.selected = true;
                    select.appendChild(option);
                });

                // Set default voice (prefer Czech)
                if (czechVoices.length > 0) {
                    this.selectedVoice = czechVoices[0];
                    select.value = '0';
                } else if (sortedVoices.length > 0) {
                    this.selectedVoice = sortedVoices[0];
                }

                // Restore saved voice preference
                const savedVoice = localStorage.getItem('audioVoiceName');
                if (savedVoice) {
                    const foundIndex = sortedVoices.findIndex(v => v.name === savedVoice);
                    if (foundIndex !== -1) {
                        this.selectedVoice = sortedVoices[foundIndex];
                        select.value = foundIndex.toString();
                    }
                }
            },

            setVoice(index) {
                const czechVoices = this.voices.filter(v => v.lang.startsWith('cs'));
                const otherVoices = this.voices.filter(v => !v.lang.startsWith('cs'));
                const sortedVoices = [...czechVoices, ...otherVoices];

                if (sortedVoices[index]) {
                    this.selectedVoice = sortedVoices[index];
                    localStorage.setItem('audioVoiceName', this.selectedVoice.name);
                }
            },

            setRate(rate) {
                this.rate = parseFloat(rate);
                document.getElementById('audio-speed-value').textContent = `${this.rate.toFixed(1)}x`;
                this.saveSettings();
            },

            testVoice() {
                this.synth.cancel();
                const utterance = new SpeechSynthesisUtterance('Toto je test vybranĂ©ho hlasu pro studium.');
                if (this.selectedVoice) utterance.voice = this.selectedVoice;
                utterance.rate = this.rate;
                utterance.pitch = this.pitch;
                utterance.lang = 'cs-CZ';
                this.synth.speak(utterance);
            },

            speak(text) {
                return new Promise((resolve, reject) => {
                    if (!this.synth || this.isStopped) {
                        reject('Stopped');
                        return;
                    }

                    const utterance = new SpeechSynthesisUtterance(text);
                    if (this.selectedVoice) utterance.voice = this.selectedVoice;
                    utterance.rate = this.rate;
                    utterance.pitch = this.pitch;
                    utterance.lang = 'cs-CZ';

                    this.currentUtterance = utterance;

                    utterance.onend = () => {
                        this.currentUtterance = null;
                        resolve();
                    };
                    utterance.onerror = (e) => {
                        this.currentUtterance = null;
                        if (e.error !== 'interrupted') {
                            reject(e);
                        } else {
                            resolve();
                        }
                    };

                    this.synth.speak(utterance);
                });
            },

            updateNowPlaying(text) {
                const nowPlaying = document.getElementById('audio-now-playing');
                const content = document.getElementById('now-playing-content');
                if (nowPlaying && content) {
                    nowPlaying.classList.remove('hidden');
                    content.textContent = text.length > 80 ? text.substring(0, 80) + '...' : text;
                }
            },

            hideNowPlaying() {
                const nowPlaying = document.getElementById('audio-now-playing');
                if (nowPlaying) {
                    nowPlaying.classList.add('hidden');
                }
            },

            updateProgress() {
                const container = document.getElementById('audio-progress-container');
                const text = document.getElementById('audio-progress-text');
                const percent = document.getElementById('audio-progress-percent');
                const fill = document.getElementById('audio-progress-fill');

                if (container && this.totalCards > 0) {
                    container.style.display = 'block';
                    const pct = Math.round((this.currentCardIndex / this.totalCards) * 100);
                    text.textContent = `KartiÄŤka ${this.currentCardIndex} z ${this.totalCards}`;
                    percent.textContent = `${pct}%`;
                    fill.style.width = `${pct}%`;
                } else if (container) {
                    container.style.display = 'none';
                }
            },

            updateButtons(state) {
                const playBtn = document.getElementById('audio-play-btn');
                const pauseBtn = document.getElementById('audio-pause-btn');
                const resumeBtn = document.getElementById('audio-resume-btn');
                const stopBtn = document.getElementById('audio-stop-btn');
                const skipBtn = document.getElementById('audio-skip-btn');

                switch (state) {
                    case 'idle':
                        if (playBtn) playBtn.style.display = 'flex';
                        if (pauseBtn) pauseBtn.style.display = 'none';
                        if (resumeBtn) resumeBtn.style.display = 'none';
                        if (stopBtn) stopBtn.disabled = true;
                        if (skipBtn) skipBtn.disabled = true;
                        break;
                    case 'playing':
                        if (playBtn) playBtn.style.display = 'none';
                        if (pauseBtn) pauseBtn.style.display = 'flex';
                        if (resumeBtn) resumeBtn.style.display = 'none';
                        if (stopBtn) stopBtn.disabled = false;
                        if (skipBtn) skipBtn.disabled = false;
                        break;
                    case 'paused':
                        if (playBtn) playBtn.style.display = 'none';
                        if (pauseBtn) pauseBtn.style.display = 'none';
                        if (resumeBtn) resumeBtn.style.display = 'flex';
                        if (stopBtn) stopBtn.disabled = false;
                        if (skipBtn) skipBtn.disabled = false;
                        break;
                }
            },

            async playCard(card) {
                if (this.isStopped) return;

                // Update now playing
                this.updateNowPlaying(card.q);

                // Read question
                await this.speak(`OtĂˇzka: ${card.q}`);

                if (this.isStopped) return;

                // Pause after question
                await this.wait(this.pauseAfterQuestion * 1000);

                if (this.isStopped) return;

                // Update now playing for answer
                this.updateNowPlaying(card.a);

                // Read answer
                await this.speak(`OdpovÄ›ÄŹ: ${card.a}`);

                if (this.isStopped) return;

                // Read explanation if exists
                if (card.exp) {
                    await this.speak(`VysvÄ›tlenĂ­: ${card.exp}`);
                }
            },

            wait(ms) {
                return new Promise((resolve) => {
                    this.pauseTimeout = setTimeout(() => {
                        this.pauseTimeout = null;
                        resolve();
                    }, ms);
                });
            },

            async play() {
                // Play current flashcard based on currentDueIndex
                const dueCards = getDueCards();
                if (dueCards.length === 0) {
                    alert('Ĺ˝ĂˇdnĂ© kartiÄŤky k pĹ™ehrĂˇnĂ­.');
                    return;
                }

                this.isStopped = false;
                this.isPaused = false;
                this.isPlaying = true;
                this.mode = 'single';
                this.cardsToPlay = [dueCards[currentDueIndex]];
                this.currentCardIndex = 1;
                this.totalCards = 1;

                this.updateButtons('playing');
                this.updateProgress();

                try {
                    await this.playCard(this.cardsToPlay[0]);
                    this.stop();
                } catch (e) {
                    if (e !== 'Stopped') console.error('Audio error:', e);
                }
            },

            async startPodcast() {
                const dueCards = getDueCards();
                if (dueCards.length === 0) {
                    // Use all flashcards if no due cards
                    this.cardsToPlay = [...flashcardsData];
                } else {
                    this.cardsToPlay = [...dueCards];
                }

                if (this.cardsToPlay.length === 0) {
                    alert('Ĺ˝ĂˇdnĂ© kartiÄŤky k pĹ™ehrĂˇnĂ­.');
                    return;
                }

                this.isStopped = false;
                this.isPaused = false;
                this.isPlaying = true;
                this.mode = 'podcast';
                this.currentCardIndex = 0;
                this.totalCards = this.cardsToPlay.length;

                this.updateButtons('playing');

                // Intro
                this.updateNowPlaying('Podcast zaÄŤĂ­nĂˇ...');
                await this.speak(`VĂ­tejte v podcast mĂłdu. Budeme prochĂˇzet ${this.totalCards} kartiÄŤek. ZaÄŤĂ­nĂˇme.`);

                // Play all cards
                for (let i = 0; i < this.cardsToPlay.length && !this.isStopped; i++) {
                    this.currentCardIndex = i + 1;
                    this.updateProgress();

                    // Also update flashcard UI
                    const cardIndex = flashcardsData.findIndex(c => c.q === this.cardsToPlay[i].q);
                    if (cardIndex !== -1) {
                        showCard(cardIndex);
                    }

                    await this.playCard(this.cardsToPlay[i]);

                    if (this.isStopped) break;

                    // Pause between cards
                    await this.wait(this.pauseAfterCard * 1000);
                }

                if (!this.isStopped) {
                    await this.speak('Podcast dokonÄŤen. VĂ˝bornĂˇ prĂˇce!');
                }

                this.stop();
            },

            pause() {
                if (!this.isPlaying) return;

                this.isPaused = true;
                this.synth.pause();

                if (this.pauseTimeout) {
                    clearTimeout(this.pauseTimeout);
                }

                this.updateButtons('paused');
            },

            resume() {
                if (!this.isPaused) return;

                this.isPaused = false;
                this.synth.resume();

                this.updateButtons('playing');
            },

            stop() {
                this.isStopped = true;
                this.isPlaying = false;
                this.isPaused = false;

                this.synth.cancel();

                if (this.pauseTimeout) {
                    clearTimeout(this.pauseTimeout);
                    this.pauseTimeout = null;
                }

                this.hideNowPlaying();
                this.updateButtons('idle');

                const progressContainer = document.getElementById('audio-progress-container');
                if (progressContainer) progressContainer.style.display = 'none';
            },

            skip() {
                if (!this.isPlaying) return;

                // Cancel current speech
                this.synth.cancel();

                // Clear any pause timeout
                if (this.pauseTimeout) {
                    clearTimeout(this.pauseTimeout);
                    this.pauseTimeout = null;
                }
            },

            saveSettings() {
                const settings = {
                    rate: this.rate,
                    pitch: this.pitch,
                    pauseAfterQuestion: parseInt(document.getElementById('pause-after-question')?.value || 3),
                    pauseAfterCard: parseInt(document.getElementById('pause-after-card')?.value || 2)
                };
                this.pauseAfterQuestion = settings.pauseAfterQuestion;
                this.pauseAfterCard = settings.pauseAfterCard;
                localStorage.setItem('audioSettings', JSON.stringify(settings));
            },

            loadSettings() {
                const saved = localStorage.getItem('audioSettings');
                if (saved) {
                    try {
                        const settings = JSON.parse(saved);
                        this.rate = settings.rate || 1.0;
                        this.pitch = settings.pitch || 1.0;
                        this.pauseAfterQuestion = settings.pauseAfterQuestion || 3;
                        this.pauseAfterCard = settings.pauseAfterCard || 2;

                        // Update UI
                        const slider = document.getElementById('audio-speed-slider');
                        const sliderValue = document.getElementById('audio-speed-value');
                        if (slider) slider.value = this.rate;
                        if (sliderValue) sliderValue.textContent = `${this.rate.toFixed(1)}x`;

                        const pauseQ = document.getElementById('pause-after-question');
                        const pauseC = document.getElementById('pause-after-card');
                        if (pauseQ) pauseQ.value = this.pauseAfterQuestion;
                        if (pauseC) pauseC.value = this.pauseAfterCard;
                    } catch (e) {
                        console.warn('Failed to load audio settings:', e);
                    }
                }
            }
        };

        // Audio panel toggle functions
        function toggleAudioPanel() {
            const panel = document.getElementById('audio-panel');
            if (panel) {
                panel.classList.toggle('collapsed');
            }
        }

        function hideAudioPanel() {
            const panel = document.getElementById('audio-panel');
            if (panel) {
                panel.style.display = 'none';
            }
        }

        function showAudioPanel() {
            const panel = document.getElementById('audio-panel');
            if (panel) {
                panel.style.display = 'block';
            }
        }

        // ========== KEYBOARD SHORTCUTS ==========
        function handleKeyboardShortcuts(e) {
            // Don't handle if user is typing in an input (except for specific keys)
            const isTyping = e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT';

            // Handle quiz shortcuts
            if (currentSection === 'quiz') {
                // Allow Enter in open answer mode
                if (isTyping && e.code === 'Enter' && e.target.id === 'quiz-open-input') {
                    e.preventDefault();
                    submitOpenAnswer();
                    return;
                }

                if (isTyping) return;

                const quizCard = document.getElementById('quiz-card');
                if (quizCard.style.display === 'none') return;

                switch (e.code) {
                    case 'Digit1':
                    case 'Numpad1':
                        if (!quizState.answered) selectOption(0);
                        break;
                    case 'Digit2':
                    case 'Numpad2':
                        if (!quizState.answered) selectOption(1);
                        break;
                    case 'Digit3':
                    case 'Numpad3':
                        if (!quizState.answered) selectOption(2);
                        break;
                    case 'Digit4':
                    case 'Numpad4':
                        if (!quizState.answered) selectOption(3);
                        break;
                    case 'Enter':
                    case 'Space':
                        if (quizState.answered && !document.getElementById('quiz-btn').disabled) {
                            e.preventDefault();
                            nextQuestion();
                        }
                        break;
                    case 'Escape':
                        e.preventDefault();
                        if (confirm('Opravdu chceĹˇ ukonÄŤit kvĂ­z?')) {
                            stopQuizTimer();
                            showQuizSetup();
                        }
                        break;
                }
                return;
            }

            // Handle flashcard shortcuts
            if (currentSection !== 'flashcards') return;
            if (isTyping) return;

            const dueCards = getDueCards();
            if (dueCards.length === 0) return;

            switch (e.code) {
                case 'Space':
                    e.preventDefault();
                    flipCard();
                    break;
                case 'Digit1':
                case 'Numpad1':
                    if (cardFlipped) rateCard(0);
                    break;
                case 'Digit2':
                case 'Numpad2':
                    if (cardFlipped) rateCard(1);
                    break;
                case 'Digit3':
                case 'Numpad3':
                    if (cardFlipped) rateCard(2);
                    break;
                case 'Digit4':
                case 'Numpad4':
                    if (cardFlipped) rateCard(3);
                    break;
                case 'ArrowRight':
                    nextCard();
                    break;
                case 'ArrowLeft':
                    // Previous card
                    if (currentDueIndex > 0) {
                        showCard(currentDueIndex - 1);
                    }
                    break;
                case 'KeyP':
                    // Play/Pause audio
                    e.preventDefault();
                    if (AudioStudy.isPlaying && !AudioStudy.isPaused) {
                        AudioStudy.pause();
                    } else if (AudioStudy.isPaused) {
                        AudioStudy.resume();
                    } else {
                        AudioStudy.play();
                    }
                    break;
                case 'KeyS':
                    // Stop audio
                    e.preventDefault();
                    AudioStudy.stop();
                    break;
            }
        }

        // ========== INIT ==========
        function init() {
            checkDailyProgress(); // Check for day change on startup
            loadTheme();
            initCardStats();
            initQuizStats();
            renderTopics();
            renderConceptMapsAccordion(); // Initialize accordion-style concept maps
            updateStats();
            updateDashboardCTAs();

            // Initialize Audio Study Mode
            AudioStudy.init();

            // Show first card when switching to flashcards
            document.querySelectorAll('.nav-tab').forEach(tab => {
                const originalSection = tab.dataset.section;
                tab.addEventListener('click', () => {
                    currentSection = originalSection;
                    if (originalSection === 'flashcards') {
                        showCard(currentDueIndex);
                    }
                });
            });

            // Keyboard shortcuts
            document.addEventListener('keydown', handleKeyboardShortcuts);

            // Close modal on outside click
            document.getElementById('topic-modal').addEventListener('click', (e) => {
                if (e.target.id === 'topic-modal') closeModal();
            });
            document.getElementById('help-modal').addEventListener('click', (e) => {
                if (e.target.id === 'help-modal') closeHelpModal();
            });
            document.getElementById('import-export-modal').addEventListener('click', (e) => {
                if (e.target.id === 'import-export-modal') closeImportExportModal();
            });

            // Update study time every minute
            setInterval(updateStats, 60000);

            // Update dashboard CTAs when stats change
            setInterval(updateDashboardCTAs, 60000);
        }

        init();
