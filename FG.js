

var disc = document.getElementById("disc");
var kast = document.getElementById("kast");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var velgerBtn = document.getElementById("velgerBtn");

var discValg = 0;
var kastValg = 0;

//div1.onclick = discVelger;
//div2.onclick = kastVelger;

velgerBtn.onclick = velger;

function velger() {

  discVelger()
  kastVelger()

}

// Script for disc velger

function discVelger() {

discNummer = Math.floor(Math.random() * 6 + 1);

if (discNummer == "6") {

  disc.innerHTML = "DRIVER"
  //disc.src = "Bilder/driver.png";

}

else if (discNummer == "5") {

  disc.innerHTML = "FAIRWAY DRIVER"
  //disc.src = "Bilder/f_driver.png";

}

else if (discNummer == "4") {

  disc.innerHTML = "MIDRANGE"
	//disc.src = "Bilder/midrange.png";

}

else if (discNummer == "3") {

  disc.innerHTML = "PUTT & APPROACH"
	//disc.src = "Bilder/putter.png";

}

else if (discNummer == "2") {

  disc.innerHTML = "OVERSTABLE DISC"
	//disc.src = "Bilder/overstable.png";

}

else {

  disc.innerHTML = "UNDERSTABLE DISC"
	//disc.src = "Bilder/understable.png";

}
}

// Scriipt for kast velger

function kastVelger() {

kastNummer = Math.floor(Math.random() * 6 + 1);

if (kastNummer == "6") {

  kast.innerHTML = "BACKHAND"
  //kast.src = "Bilder/backhand.png";

}

else if (kastNummer == "5") {

  kast.innerHTML = "FOREHAND"
  //kast.src = "Bilder/forehand.png";

}

else if (kastNummer == "4") {

  kast.innerHTML = "HAMMER"
	//kast.src = "Bilder/hammer.png";

}

else if (kastNummer == "3") {

  kast.innerHTML = "HYZER"
	//kast.src = "Bilder/hyzer.png";

}

else if (kastNummer == "2") {

  kast.innerHTML = "ANHYZER"
	//kast.src = "Bilder/anhyzer.png";

}

else {

  kast.innerHTML = "ROLLER"
	//kast.src = "Bilder/roller.png";

}
}
