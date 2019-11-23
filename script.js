// Variable Audio
var redAudio = new Audio('../sound/do.mp3');
var greenAudio = new Audio('../sound/re.mp3');
var blueAudio = new Audio('../sound/mi.mp3');
var yellowAudio = new Audio('../sound/fa.mp3');

// Variables des boutons
var clickRed = document.getElementById('clickRed');
var clickGreen = document.getElementById('clickGreen');
var clickBlue = document.getElementById('clickBlue');
var clickYellow = document.getElementById('clickYellow');

// Variable Compteur de click
var nb = document.getElementById('nb');
var cpt = parseInt(nb.innerText);

// Timeouts pour bouton
var timeouts = [];

// Variables Modal
var help = document.getElementById("help");
var span = document.getElementsByClassName("close")[0];

// Compteur de click

clickRed.addEventListener('click', function () {
    cpt = cpt + 1;
    nb.innerHTML = cpt;
});
clickGreen.addEventListener('click', function () {
    cpt = cpt + 1;
    nb.innerHTML = cpt;
});
clickBlue.addEventListener('click', function () {
    cpt = cpt + 1;
    nb.innerHTML = cpt;
});
clickYellow.addEventListener('click', function () {
    cpt = cpt + 1;
    nb.innerHTML = cpt;
});

// Baisser l'opacité au clic et jouer un son

function changeColorRed() {
    redAudio.play();
    clickRed.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
    timeouts.push(setTimeout(returnColorRed, 400, clickRed));
}

function changeColorGreen() {
    greenAudio.play();
    clickGreen.style.backgroundColor = 'rgba(0, 128, 0, 0.5)';
    timeouts.push(setTimeout(returnColorGreen, 400, clickGreen));
}

function changeColorBlue() {
    blueAudio.play();
    clickBlue.style.backgroundColor = 'rgba(0, 0, 255, 0.5)';
    timeouts.push(setTimeout(returnColorBlue, 400, clickBlue));
}

function changeColorYellow() {
    yellowAudio.play();
    clickYellow.style.backgroundColor = 'rgba(255, 255, 0, 0.5)';
    timeouts.push(setTimeout(returnColorYellow, 400, clickYellow));
}

// fonction pour remettre la couleur initial du bouton

function returnColorRed() {
    clickRed.style.backgroundColor = 'red';
}

function returnColorGreen() {
    clickGreen.style.backgroundColor = 'green';
}

function returnColorBlue() {
    clickBlue.style.backgroundColor = 'blue';
}

function returnColorYellow() {
    clickYellow.style.backgroundColor = 'yellow';
}

// Modal

help.addEventListener("click", function () {
    modal.style.display = "block";
});

span.addEventListener("click", function () {
    modal.style.display = "none";
});