console.info(0);

function sayWelcome() {
  console.info("Salut " + prenume + ", bine ai venit la noi!");
}

var nume = "Moldovan";
var prenume = "Lucian";
var owner = "Lucian's";
var msg1 = 'Ai zis cumva "Luci"';
var msg2 = 'Nu, am zis "Lucian"';
var template = `Text cu ghilimele " sau simple'`;

console.debug("auzi.. ? dar cum te cheama ?!");
sayWelcome();

var skills = ["Microsoft Office Tools", "HTML", "JS", "Oracle ERP"];

prenume = "Lucas";

console.info("toate variabilele au fost initializate");
console.log(nume);
console.debug("cum te cheama? -" + prenume);
sayWelcome();

//schimb valutar

var cursEUR = 4.5;
var myEUR = 20;
var myRON = 0;
var friendEUR = 10;
var friendRON = 0;
// operatori * / + -

myRON = myEUR * cursEUR;
console.info("Eu am " + myRON + " RON");

friendRON = friendEUR * cursEUR - (friendEUR * cursEUR * 1) / 100;
console.info("Tu ai " + friendRON + " RON");

function extractFromATM(ammount) {
  console.info("==== ==== ==== ==== ====");
  console.info("suma extrasa este: " + ammount);
  var comision = ammount * 0.01;
  if (comision < 2.5) {
    comision = 2.5;
    console.warn("comision minim aplicat");
  }
  console.info("comision aplicat: " + comision);
  console.info("==== ==== ==== ==== ====");
}

extractFromATM(1000);
extractFromATM(100);

var x = 4 + 5;
