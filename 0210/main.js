"use strict";

const wrap = document.querySelector(".wrap")
const wrapRect = wrap.getBoundingClientRect();
const home = document.querySelector("#home")
const signUp = document.querySelector("#sign-up")

function init(){
    if(window.location.pathname === "/0210/"){
    addBubble()
    goSecondPage()
    }
}

function addBubble(){
   
 const x1 = 0;
    const y1 = 0;
    const x2 = wrapRect.width
    const y2 = wrapRect.height

for(let i = 0; i < 4 ;i++){
    const bubble = document.createElement("img")
    bubble.setAttribute("class", "bubble")
    bubble.setAttribute("src", "./img/bubble.png")
    bubble.style.position = "absolute";
    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
    wrap.appendChild(bubble);
}
 
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

function goSecondPage(){

    setTimeout(()=>{
        window.location.pathname = "/0210/second.html"
    },7000)
}


  init()
