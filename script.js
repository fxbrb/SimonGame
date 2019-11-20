var redAudio = new Audio('../sound/do.wav');
var greenAudio = new Audio('../sound/re.wav');
var blueAudio = new Audio('../sound/mi.wav');
var yellowAudio = new Audio('../sound/fa.wav');
var clickRouge = document.getElementById('clickRouge');
var clickVert = document.getElementById('clickVert');
var clickBleu = document.getElementById('clickBleu');
var clickJaune = document.getElementById('clickJaune');
var nb = document.getElementById('nb');
var cpt = parseInt(nb.innerText);
var timeouts = [];

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

function changeColorRed() {
    redAudio.play();
    clickRouge.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
    timeouts.push(setTimeout(returnColorRed,400,clickRouge));
}

function changeColorGreen() {
    greenAudio.play();
    clickVert.style.backgroundColor = 'rgba(0, 128, 0, 0.5)';
    timeouts.push(setTimeout(returnColorGreen,400,clickVert));
}

function changeColorBlue() {
    blueAudio.play();
    clickBleu.style.backgroundColor = 'rgba(0, 0, 255, 0.5)';
    timeouts.push(setTimeout(returnColorBlue,400,clickBleu));
}

function changeColorYellow() {
    yellowAudio.play();
    clickJaune.style.backgroundColor = 'rgba(255, 255, 0, 0.5)';
    timeouts.push(setTimeout(returnColorYellow,400,clickJaune));
}

function returnColorRed(){
    clickRouge.style.backgroundColor = 'red';
}
function returnColorGreen(){
    clickVert.style.backgroundColor = 'green';
}
function returnColorBlue(){
    clickBleu.style.backgroundColor = 'blue';
}
function returnColorYellow(){
    clickJaune.style.backgroundColor = 'yellow';
}