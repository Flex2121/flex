/*
  SOUBOR S DATY PRO STUDIJNÍ APLIKACI
  ===================================
  
  Zde upravte data pro váš nový předmět.
*/

window.studyData = {
    // Název předmětu, který se zobrazí v záhlaví
    topic: "Můj Nový Předmět",

    // Kartičky (Flashcards)
    // Každá kartička má kategorii, otázku (q), odpověď (a) a vysvětlení (exp).
    flashcards: [
        { 
            category: "Ukázková kategorie", 
            q: "Toto je ukázková otázka (klikněte pro otočení)", 
            a: "Toto je odpověď na ukázkovou otázku.", 
            exp: "Zde může být podrobnější vysvětlení látky." 
        },
        // Zkopírujte a vložte další kartičky níže:
        { 
            category: "Ukázková kategorie", 
            q: "Druhá otázka?", 
            a: "Druhá odpověď.", 
            exp: "" 
        }
    ],

    // Kvízové otázky
    // 'correct' je index správné odpovědi (začíná od 0, takže 0 je první, 1 je druhá...)
    quizzes: [
        { 
            q: "Toto je ukázková kvízová otázka?", 
            options: ["Špatná odpověď", "Správná odpověď", "Špatná odpověď"], 
            correct: 1, 
            cat: "Ukázková kategorie", 
            exp: "Vysvětlení, proč je odpověď správná.", 
            hint: "Nápověda pro případ nouze." 
        }
    ],

    // Témata (pro filtrování)
    // id musí být bez mezer a diakritiky
    topics: [
        { id: "ukazka", name: "Ukázková kategorie", icon: "📚" }
    ]
};

// Tyto řádky neměňte - zajišťují kompatibilitu s aplikací
window.studyData.flashcards = window.studyData.flashcards;
window.studyData.quizzes = window.studyData.quizzes;
window.studyData.topics = window.studyData.topics;
