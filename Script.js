let button1On = false;
let Button1Backg = false;
let button2On = false;
let Button2Backg = false;
let button3On = false;
let Button3Backg = false;
const AOF = document.querySelector("#button1");
const HI = document.querySelector("#button2");
const UI = document.querySelector("#button3");
const music1 = new Audio("AshesOnFire.mp3");
const music2 = new Audio("TheLastMission.mp3");
const music3 = new Audio("UltraInstinct.mp3");

function button1 () {
    if (button1On) {
        document.getElementById("button1").style.color = "black";
        document.getElementById("button1").style.backgroundColor = "white";
        document.getElementById("button1").style.borderColor = "black";
        document.getElementById("button2").style.display = "initial";
        document.getElementById("button3").style.display = "initial";
        music1.pause()
        button1On = false;
    }
    else {
        document.getElementById("button1").style.color = "white";
        document.getElementById("button1").style.backgroundColor = "brown";
        document.getElementById("button2").style.backgroundColor = "transparent";
        document.getElementById("button2").style.display = "none";
        document.getElementById("button3").style.display = "none";
        document.getElementById("button3").style.backgroundColor = "transparent";
        document.getElementById("button1").style.borderColor = "white";
        music1.currentTime = 0;
        music1.play();
        button1On = true;
    }
}
function button2 () {
    if (button2On) {
        document.getElementById("button2").style.color = "black";
        document.getElementById("button2").style.backgroundColor = "white";
        document.getElementById("button2").style.borderColor = "black";
        document.getElementById("button1").style.display = "initial";
        document.getElementById("button3").style.display = "initial";
        music2.pause()
        button2On = false;
    }
    else {
        document.getElementById("button2").style.color = "white";
        document.getElementById("button2").style.backgroundColor = "purple";
        document.getElementById("button1").style.backgroundColor = "transparent";
        document.getElementById("button3").style.backgroundColor = "transparent";
        document.getElementById("button1").style.display = "none";
        document.getElementById("button3").style.display = "none";
        document.getElementById("button2").style.borderColor = "white";
        music2.currentTime = 0;
        music2.play();
        button2On = true;
    }
}
function button3 () {
    if (button3On) {
        document.getElementById("button3").style.color = "black";
        document.getElementById("button3").style.backgroundColor = "white";
        document.getElementById("button3").style.borderColor = "black";
        document.getElementById("button1").style.display = "initial";
        document.getElementById("button2").style.display = "initial";
        music3.pause()
        button3On = false;
    }
    else {
        document.getElementById("button3").style.color = "white";
        document.getElementById("button3").style.backgroundColor = "blue";
        document.getElementById("button1").style.backgroundColor = "transparent";
        document.getElementById("button2").style.backgroundColor = "transparent";
        document.getElementById("button1").style.display = "none";
        document.getElementById("button2").style.display = "none";
        document.getElementById("button3").style.borderColor = "white";
        music3.currentTime = 0;
        music3.play();
        button3On = true;
    }
}
function button1Bg () {
    if (Button1Backg) {
        document.body.style.background = "white";
        Button1Backg = false;
    }
    else {
        document.body.style.backgroundImage = "url(Aot.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        Button1Backg = true;
    }
}
function button2Bg () {
    if (Button2Backg) {
        document.body.style.background = "white";
        Button2Backg = false;
    }
    else {
        document.body.style.backgroundImage = "url(HxH.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        Button2Backg = true;
    }
}
function button3Bg () {
    if (Button3Backg) {
        document.body.style.background = "white";
        Button3Backg = false;
    }
    else {
        document.body.style.backgroundImage = "url(DBS.jpg)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        Button3Backg = true;
    }
}

AOF.addEventListener("click",button1);
AOF.addEventListener("click",button1Bg);
HI.addEventListener("click",button2);
HI.addEventListener("click",button2Bg);
UI.addEventListener("click",button3);
UI.addEventListener("click",button3Bg);