
//make variable for audio file. Ex: x.play();
var a = document.getElementById("audio1");
var b = document.getElementById("audio2");
var c = document.getElementById("audio3");
var d = document.getElementById("audio4");
var e = document.getElementById("audio5");
var f = document.getElementById("audio6");
var g = document.getElementById("audio7");
var h = document.getElementById("audio8");
var i = document.getElementById("audio9");
var j = document.getElementById("audio10");
var k = document.getElementById("audio11");
var l = document.getElementById("audio12");
var m = document.getElementById("audio13");
var n = document.getElementById("audio14");
var o = document.getElementById("audio15");
var p = document.getElementById("audio16");
var q = document.getElementById("audio17");
var r = document.getElementById("audio18");
var s = document.getElementById("audio19");
var t = document.getElementById("audio20");
var u = document.getElementById("audio21");
var v = document.getElementById("audio22");
var w = document.getElementById("audio23");
var x = document.getElementById("audio24");

var a1 = new Audio("sounds/1.mp3");
var a2 = new Audio("sounds/2.mp3");
var a3 = new Audio("sounds/3.mp3");
var a4 = new Audio("sounds/4.mp3");
var a5 = new Audio("sounds/5.mp3");
var a6 = new Audio("sounds/6.mp3");
var a7 = new Audio("sounds/7.mp3");
var a8 = new Audio("sounds/8.mp3");
var a9 = new Audio("sounds/9.mp3");
var a10 = new Audio("sounds/10.mp3");
var a11 = new Audio("sounds/11.mp3");
var a12 = new Audio("sounds/12.mp3");
var a13 = new Audio("sounds/13.mp3");
var a14 = new Audio("sounds/14.mp3");
var a15 = new Audio("sounds/15.mp3");
var a16 = new Audio("sounds/16.mp3");
var a17 = new Audio("sounds/17.mp3");
var a18 = new Audio("sounds/18.mp3");
var a19 = new Audio("sounds/19.mp3");
var a20 = new Audio("sounds/20.mp3");
var a21 = new Audio("sounds/21.mp3");
var a22 = new Audio("sounds/22.mp3");
var a23 = new Audio("sounds/23.mp3");
var a24 = new Audio("sounds/24.mp3");

a.addEventListener("click", playAudio)
b.addEventListener("click", playAudio1);
c.addEventListener("click", playAudio2);
d.addEventListener("click", playAudio3)
e.addEventListener("click", playAudio4);
f.addEventListener("click", playAudio5);
g.addEventListener("click", playAudio6);
h.addEventListener("click", playAudio7);
i.addEventListener("click", playAudio8);
j.addEventListener("click", playAudio9);
k.addEventListener("click", playAudio10);
l.addEventListener("click", playAudio11);
m.addEventListener("click", playAudio12);
n.addEventListener("click", playAudio13);
o.addEventListener("click", playAudio14);
p.addEventListener("click", playAudio15);
q.addEventListener("click", playAudio16);
r.addEventListener("click", playAudio17);
s.addEventListener("click", playAudio18);
t.addEventListener("click", playAudio19);
u.addEventListener("click", playAudio20);
v.addEventListener("click", playAudio21);
w.addEventListener("click", playAudio22);
x.addEventListener("click", playAudio23);


function playAudio() {
	a1.load();
    a1.play();
}

function playAudio1() {
	a2.load();
    a2.play();
}

function playAudio2() {
	a3.load();
    a3.play();
}

function playAudio3() {
	a4.load();
    a4.play();
}

function playAudio4() {
	a5.load();
    a5.play();
}

function playAudio5() {
	a6.load();
    a6.play();
}

function playAudio6() {
	a7.load();
    a7.play();
}

function playAudio7() {
	a8.load();
    a8.play();;
}

function playAudio8() {
	a9.load();
    a9.play();
}

function playAudio9() {
	a10.load();
    a10.play();
}

function playAudio10() {
	a11.load();
    a11.play();
}

function playAudio11() {
	a12.load();
    a12.play();
}

function playAudio12() {
	a13.load();
    a13.play();
}

function playAudio13() {
	a14.load();
    a14.play();
}

function playAudio14() {
	a15.load();
    a15.play();
}

function playAudio15() {
	a16.load();
    a16.play();
}

function playAudio16() {
	a17.load();
    a17.play();
}

function playAudio17() {
	a18.load();
    a18.play();
}

function playAudio18() {
	a19.load();
    a19.play();
}

function playAudio19() {
	a20.load();
    a20.play();
}

function playAudio20() {
	a21.load();
    a21.play();
}

function playAudio21() {
	a22.load();
    a22.play();
}

function playAudio22() {
	a23.load();
    a23.play();
}

function playAudio23() {
	a24.load();
    a24.play();
}

function toggleText() { 
	document.getElementById("audio1").style.display = "none"
	document.getElementById("audio2").style.display = "none"
	document.getElementById("audio3").style.display = "none"
	document.getElementById("audio4").style.display = "none"
	document.getElementById("audio5").style.display = "none"
	document.getElementById("audio6").style.display = "none"
	document.getElementById("audio7").style.display = "none"
	document.getElementById("audio8").style.display = "none"
	document.getElementById("audio9").style.display = "none"
	document.getElementById("audio10").style.display = "none"
	document.getElementById("audio11").style.display = "none"
	document.getElementById("audio12").style.display = "none"
	document.getElementById("audio13").style.display = "none"
	document.getElementById("audio14").style.display = "none"
	document.getElementById("audio15").style.display = "none"
	document.getElementById("audio16").style.display = "none"
	document.getElementById("audio17").style.display = "none"
	document.getElementById("audio18").style.display = "none"
	document.getElementById("audio19").style.display = "none"
	document.getElementById("audio20").style.display = "none"
	document.getElementById("audio21").style.display = "none"
	document.getElementById("audio22").style.display = "none"
	document.getElementById("audio23").style.display = "none"
	document.getElementById("audio24").style.display = "none"
	
	document.getElementById("text1").classList.remove("display-none");
	document.getElementById("text2").classList.remove("display-none");	
	document.getElementById("text3").classList.remove("display-none");
	document.getElementById("text4").classList.remove("display-none");
	document.getElementById("text5").classList.remove("display-none");
	document.getElementById("text6").classList.remove("display-none");
	document.getElementById("text7").classList.remove("display-none");
	document.getElementById("text8").classList.remove("display-none");
	document.getElementById("text9").classList.remove("display-none");
	document.getElementById("text10").classList.remove("display-none");
	document.getElementById("text11").classList.remove("display-none");
	document.getElementById("text12").classList.remove("display-none");
	document.getElementById("text13").classList.remove("display-none");
	document.getElementById("text14").classList.remove("display-none");
	document.getElementById("text15").classList.remove("display-none");
	document.getElementById("text16").classList.remove("display-none");
	document.getElementById("text17").classList.remove("display-none");
	document.getElementById("text18").classList.remove("display-none");
	document.getElementById("text19").classList.remove("display-none");
	document.getElementById("text20").classList.remove("display-none");
	document.getElementById("text21").classList.remove("display-none");
	document.getElementById("text22").classList.remove("display-none");
	document.getElementById("text23").classList.remove("display-none");
	document.getElementById("text24").classList.remove("display-none");
}

