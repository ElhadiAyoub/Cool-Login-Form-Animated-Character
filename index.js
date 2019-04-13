const eyes = document.getElementsByClassName("emoji-eye");
const pupils = document.getElementsByClassName("emoji-pupil");
const username = document.getElementById("login-form-username");
const password = document.getElementById("login-form-password");
const mouth = document.getElementById("emoji-mouth");
const whistleAudio = document.getElementById("whistle-audio");
const winkAudio = document.getElementById("wink-audio");
const rotationAudio = document.getElementById("rotation-audio");
const head = document.getElementById("emoji");

var flag = 1;
function rotate() {
    if (flag) {
        head.style.transform = "rotate(360deg)";
        flag = 0;
    }
    else {
        head.style.transform = "rotate(-360deg)";
        flag = 1;
    }
    rotationAudio.play();
}

username.addEventListener("keydown", function () {
    follow();
});

username.addEventListener("blur", function () {
    focus();
});

username.addEventListener("focus", function () {
    follow();
});

password.addEventListener("focus", function () {
    whisle();
});

password.addEventListener("blur", function () {
    removeWhistle();
    focus();
    whistleAudio.pause();
});

async function closeOpenEyes() {
    closeEyes();
    await sleep(100);
    winkAudio.play();
    openEyes();
}

function closeEyes() {
    for (let i = 0; i < pupils.length; i++) {
        pupils[i].classList.add('emoji-pupil-closed');
    }
    for (let i = 0; i < eyes.length; i++) {
        eyes[i].classList.add('emoji-eye-closed');
    }
}

function openEyes() {
    for (let i = 0; i < pupils.length; i++) {
        pupils[i].classList.remove('emoji-pupil-closed');
    }
    for (let i = 0; i < eyes.length; i++) {
        eyes[i].classList.remove('emoji-eye-closed');
    }
}

setInterval(function () {
    if (Math.round((Math.random() * 1) + 1) % 2)
        closeOpenEyes();
}, 3000);

setInterval(function () {
    if (Math.round((Math.random() * 1) + 1) % 2)
        rotate();
}, 5000);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function focus() {
    for (let i = 0; i < pupils.length; i++) {
        pupils[i].style.left = "15px";
        pupils[i].style.bottom = "10px";
    }
}

function whistleEye() {
    for (let i = 0; i < pupils.length; i++) {
        pupils[i].style.left = "7px";
        pupils[i].style.bottom = "25px";
    }
}

function follow() {
    var len = username.value.length;
    if (len > 50)
        len = 50;
    for (let i = 0; i < pupils.length; i++) {
        pupils[i].style.left = 15 + (len / 10) + "px";
        pupils[i].style.bottom = 0 + "px";
    }
}

function whisle() {
    whistleEye();
    mouth.classList.add('emoji-mouth-whistle');
    whistleAudio.play();
}

function removeWhistle() {
    mouth.classList.remove('emoji-mouth-whistle');
}

