let bible = {
    "1chapter": {
        name: "Genesis",
        verseCount: 1533,
        testament: "Old",
        summary: "Creation, Adam & Eve, Noah, Abraham"
    },
    "2chapter": {
        name: "Exodus",
        verseCount: 1213,
        testament: "Old",
        summary: "Moses leads Israel out of Egypt"
    },
    "3chapter": {
        name: "Leviticus",
        verseCount: 859,
        testament: "Old",
        summary: "Laws and priestly rituals"
    },
    "4chapter": {
        name: "Numbers",
        verseCount: 1288,
        testament: "Old",
        summary: "Journey through the desert"
    },
    "5chapter": {
        name: "Deuteronomy",
        verseCount: 959,
        testament: "Old",
        summary: "Moses’ final speeches"
    }
};


function bibleTest() {
    let content = "";
    for (let key in bible) {
        let kapitel = bible[key]; // Holt das einzelne Kapitel-Objekt
        content += `<li>
            <strong>${kapitel.name}</strong><br>
            Verse: ${kapitel.verseCount}<br>
            Testament: ${kapitel.testament}<br>
            Zusammenfassung: ${kapitel.summary}
        </li>`;
    }
    document.getElementById("content").innerHTML = content;
};
bibleTest();