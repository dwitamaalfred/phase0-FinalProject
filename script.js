const C4 = new Audio("tune/C4.wav");
const Db4 = new Audio("tune/Db4.wav");
const D4 = new Audio("tune/D4.wav");
const Eb4 = new Audio("tune/Eb4.wav");
const E4 = new Audio("tune/E4.wav");
const F4 = new Audio("tune/F4.wav");
const Gb4 = new Audio("tune/Gb4.wav");
const G4 = new Audio("tune/G4.wav");
const Ab4 = new Audio("tune/Ab4.wav");
const A4 = new Audio("tune/A4.wav");
const Bb4 = new Audio("tune/Bb4.wav");
const B4 = new Audio("tune/B4.wav");
const C5 = new Audio("tune/C5.wav");
const Db5 = new Audio("tune/Db5.wav");
const D5 = new Audio("tune/D5.wav");
const Eb5 = new Audio("tune/Eb5.wav");
const E5 = new Audio("tune/E5.wav");

const playSound = audio => {
    const clone = audio.cloneNode();
    clone.play();
    setTimeout(() => (clone.volume = 0.8),400);
    setTimeout(() => (clone.volume = 0.6),800);
    setTimeout(() => (clone.volume = 0.4),1200);
    setTimeout(() => (clone.volume = 0.2),1600);
    setTimeout(() => (clone.volume = 0),2000);
};

//c4
const C4key = document.querySelector(".C4-key");
const playC4 =  ()  => {
    playSound(C4);
    C4key.classList.add("active");
    setTimeout(() => C4key.classList.remove("active"), 200);
};
C4key.addEventListener("click", playC4);

//Db4
const Db4key = document.querySelector(".Db4-key");
const playDb4 =  ()  => {
    playSound(Db4);
    Db4key.classList.add("active");
    setTimeout(() => Db4key.classList.remove("active"), 200);
};
Db4key.addEventListener("click", playDb4);

//D4
const D4key = document.querySelector(".D4-key");
const playD4 =  ()  => {
    playSound(D4);
    D4key.classList.add("active");
    setTimeout(() => D4key.classList.remove("active"), 200);
};
D4key.addEventListener("click", playD4);

//Eb4
const Eb4key = document.querySelector(".Eb4-key");
const playEb4 =  ()  => {
    playSound(Eb4);
    Eb4key.classList.add("active");
    setTimeout(() => Eb4key.classList.remove("active"), 200);
};
Eb4key.addEventListener("click", playEb4);

//E4
const E4key = document.querySelector(".E4-key");
const playE4 =  ()  => {
    playSound(E4);
    E4key.classList.add("active");
    setTimeout(() => E4key.classList.remove("active"), 200);
};
E4key.addEventListener("click", playE4);

//F4
const F4key = document.querySelector(".F4-key");
const playF4 =  ()  => {
    playSound(F4);
    F4key.classList.add("active");
    setTimeout(() => F4key.classList.remove("active"), 200);
};
F4key.addEventListener("click", playF4);

//Gb4
const Gb4key = document.querySelector(".Gb4-key");
const playGb4 =  ()  => {
    playSound(Gb4);
    Gb4key.classList.add("active");
    setTimeout(() => Gb4key.classList.remove("active"), 200);
};
Gb4key.addEventListener("click", playGb4);

//G4
const G4key = document.querySelector(".G4-key");
const playG4 =  ()  => {
    playSound(G4);
    G4key.classList.add("active");
    setTimeout(() => G4key.classList.remove("active"), 200);
};
G4key.addEventListener("click", playG4);

//Ab4
const Ab4key = document.querySelector(".Ab4-key");
const playAb4 =  ()  => {
    playSound(Ab4);
    Ab4key.classList.add("active");
    setTimeout(() => Ab4key.classList.remove("active"), 200);
};
Ab4key.addEventListener("click", playAb4);

//A4
const A4key = document.querySelector(".A4-key");
const playA4 =  ()  => {
    playSound(A4);
    A4key.classList.add("active");
    setTimeout(() => A4key.classList.remove("active"), 200);
};
A4key.addEventListener("click", playA4);

//Bb4
const Bb4key = document.querySelector(".Bb4-key");
const playBb4 =  ()  => {
    playSound(Bb4);
    Bb4key.classList.add("active");
    setTimeout(() => Bb4key.classList.remove("active"), 200);
};
Bb4key.addEventListener("click", playBb4);

//B4
const B4key = document.querySelector(".B4-key");
const playB4 =  ()  => {
    playSound(B4);
    B4key.classList.add("active");
    setTimeout(() => B4key.classList.remove("active"), 200);
};
B4key.addEventListener("click", playB4);

//C5
const C5key = document.querySelector(".C5-key");
const playC5 =  ()  => {
    playSound(C5);
    C5key.classList.add("active");
    setTimeout(() => C5key.classList.remove("active"), 200);
};
C5key.addEventListener("click", playC5);

//Db5
const Db5key = document.querySelector(".Db5-key");
const playDb5 =  ()  => {
    playSound(Db5);
    Db5key.classList.add("active");
    setTimeout(() => Db5key.classList.remove("active"), 200);
};
Db5key.addEventListener("click", playDb5);

//D5
const D5key = document.querySelector(".D5-key");
const playD5 =  ()  => {
    playSound(D5);
    D5key.classList.add("active");
    setTimeout(() => D5key.classList.remove("active"), 200);
};
D5key.addEventListener("click", playD5);

//Eb5
const Eb5key = document.querySelector(".Eb5-key");
const playEb5 =  ()  => {
    playSound(Eb5);
    Eb5key.classList.add("active");
    setTimeout(() => Eb5key.classList.remove("active"), 200);
};
Eb5key.addEventListener("click", playEb5);

//E5
const E5key = document.querySelector(".E5-key");
const playE5 =  ()  => {
    playSound(E5);
    E5key.classList.add("active");
    setTimeout(() => E5key.classList.remove("active"), 200);
};
E5key.addEventListener("click", playE5);

window.addEventListener("keydown", ({keyCode}) => {
//Q
if(keyCode === 81) return playC4();
//2
if(keyCode === 50) return playDb4();
//W
if(keyCode === 87) return playD4();
//3
if(keyCode === 51) return playEb4();
//E
if(keyCode === 69) return playE4();
//R
if(keyCode === 82) return playF4();
//S
if(keyCode === 53) return playGb4();
//T
if(keyCode === 84) return playG4();
//6
if(keyCode === 54) return playAb4();
//Y
if(keyCode === 89) return playA4();
//7
if(keyCode === 55) return playBb4();
//U
if(keyCode === 85) return playB4();
//I
if(keyCode === 73) return playC5();
//9
if(keyCode === 57) return playDb5();
//Op
if(keyCode === 79) return playD5();
//0
if(keyCode === 48) return playEb5();
//P
if(keyCode === 80) return playE5();
});