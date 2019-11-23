// Variable Audio
var redAudio = new Audio('../sound/do.mp3');
var greenAudio = new Audio('../sound/re.mp3');
var blueAudio = new Audio('../sound/mi.mp3');
var yellowAudio = new Audio('../sound/fa.mp3');

// Variables des boutons
var clickRouge = document.getElementById('clickRouge');
var clickVert = document.getElementById('clickVert');
var clickBleu = document.getElementById('clickBleu');
var clickJaune = document.getElementById('clickJaune');

// Variable Compteur de click
var nb = document.getElementById('nb');
var cpt = parseInt(nb.innerText);

// Timeouts pour bouton
var timeouts = [];

// Variables Modal
var help = document.getElementById("help");
var span = document.getElementsByClassName("close")[0];

// Compteur de click

clickRouge.addEventListener('click', function () {
    cpt = cpt + 1;
    nb.innerHTML = cpt;
});
clickVert.addEventListener('click', function () {
    cpt = cpt + 1;
    nb.innerHTML = cpt;
});
clickBleu.addEventListener('click', function () {
    cpt = cpt + 1;
    nb.innerHTML = cpt;
});
clickJaune.addEventListener('click', function () {
    cpt = cpt + 1;
    nb.innerHTML = cpt;
});

// Baisser l'opacité au clic et jouer un son

function changeColorRed() {
    redAudio.play();
    clickRouge.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
    timeouts.push(setTimeout(returnColorRed, 400, clickRouge));
}

function changeColorGreen() {
    greenAudio.play();
    clickVert.style.backgroundColor = 'rgba(0, 128, 0, 0.5)';
    timeouts.push(setTimeout(returnColorGreen, 400, clickVert));
}

function changeColorBlue() {
    blueAudio.play();
    clickBleu.style.backgroundColor = 'rgba(0, 0, 255, 0.5)';
    timeouts.push(setTimeout(returnColorBlue, 400, clickBleu));
}

function changeColorYellow() {
    yellowAudio.play();
    clickJaune.style.backgroundColor = 'rgba(255, 255, 0, 0.5)';
    timeouts.push(setTimeout(returnColorYellow, 400, clickJaune));
}

// fonction pour remettre la couleur initial du bouton

function returnColorRed() {
    clickRouge.style.backgroundColor = 'red';
}

function returnColorGreen() {
    clickVert.style.backgroundColor = 'green';
}

function returnColorBlue() {
    clickBleu.style.backgroundColor = 'blue';
}

function returnColorYellow() {
    clickJaune.style.backgroundColor = 'yellow';
}

// Modal

help.addEventListener("click", function () {
    modal.style.display = "block";
});

span.addEventListener("click", function () {
    modal.style.display = "none";
});