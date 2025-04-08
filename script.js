let bible = {
    "1chapter" : "Moses",
    "2chapter" : "2.Moses",
    "3chapter" : "3.Mose",
    "4chapter" : "4.Mose"
};

function bibleTest() {
    let content = "";
    for (let key in bible) {
        content += `<li>${key}: ${bible[key]}</li>`;
    }
    document.getElementById("content").innerHTML = content;
}

bibleTest();