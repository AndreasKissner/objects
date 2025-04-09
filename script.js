/* let bible = {
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

const person = {
    name: "Andi",
    greet: function() {
      console.log("Hallo, ich bin " + this.name);
    }
  };
  
  person.greet();
  const auto = {
    tank: 40,
    verbrauch: 5,  // Liter pro 100km
  
    reichweite: function() {
      return (this.tank / this.verbrauch) * 100;
    }
  };
  
  console.log("Reichweite: " + auto.reichweite() + " km");
   */

let calcGas = {
    'car': "Porsche",
    'route': 0,
    'consumption': 0,
    'priceliter' : 0,
    'calculate': function () {
        let driveKilometer = document.getElementById("drive_kilom").value
        let literEveryKilometer = document.getElementById("liter_per_kilom").value
        let priceForLiter = document.getElementById("price_for_liter").value
      
        // In das Objekt speichern (achte auf Number!)
        this.route = Number(driveKilometer);
        this.consumption = Number(literEveryKilometer);
        this.priceliter = Number(priceForLiter);


        if(driveKilometer == "" || literEveryKilometer == ""){
            alert("Bitte Geben Sie gültige Werte ein");
            return;
        }else{
            let consumptionResult = (this.consumption / 100) * this.route ;
            let priceForAll = consumptionResult * priceForLiter;
        let result = document.getElementById("content");
        result.innerHTML = `Sie sind ${this.route} Kilometer gefahren. Der Verbauch ist ${this.consumption} liter pro 100 Kilomter<br>
        Ihr Verbrauch liegt bei ${this.route} Kilometer genau : ${consumptionResult.toFixed(2)} Liter. Es kostet Sie genau ${priceForAll.toFixed(2)} Chf.` ;
        // Optional: Felder leeren
        document.getElementById("drive_kilom").value = "";
        document.getElementById("liter_per_kilom").value = "";
        document.getElementById("price_for_liter").value = "";
        }
    }

};

function init() {
    calcGas.calculate();
}