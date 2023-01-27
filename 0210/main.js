"use strict";

const container = document.querySelector(".container") 
const homePage = document.querySelector(".homepage")
const secondPage = document.querySelector(".second-page")
const thirdPage = document.querySelector(".third-page")
const fourthPage = document.querySelector(".fourth-page")
const text1 = document.querySelector(".first-animation-down")
const shadow = document.querySelector(".shadow")
const btnBox = document.querySelector(".btn-box")
const texts = document.querySelectorAll(".text")
const img1 = document.querySelector(".third-1")
const img2 = document.querySelector(".third-2")
const img3 = document.querySelector(".fourth-1")
const img4 = document.querySelector(".fourth-2")
const img5 = document.querySelector(".fourth-3")
const bubbles = document.querySelectorAll(".bubble")
let signUp = false;

btnBox.addEventListener("touchstart", (e)=>{onClickBtn(e)})

function onClickBtn(event){
 if(event.target.className === "home"){
    gofirstPage(true)
 }else if(event.target.className === "sign-up"){
    makeSignUp()
 }
}

function init(){
    text1.style.animation = "fadeInDown 1s"
    shadow.style.animation = "fadeInUp 1s"
    goSecondPage();
}


function goSecondPage(){
    setTimeout(()=>{
        text1.style.animation = "";
        shadow.style.animation = "";
        bubbles.forEach((bubble)=>{
            bubble.classList.remove("page-visible")
            bubble.classList.add("page-hidden")
        })
        homePage.classList.remove("page-visible")
        homePage.classList.add("page-hidden")
        secondPage.classList.remove("page-hidden")
        secondPage.classList.add("page-visible")
        secondPage.classList[1] === "page-visible" && goThirdPage();
        texts.forEach((text)=>{
            text.style.animation = "fadeInleft 1s"
        })
    },7000)
}  

function goThirdPage(){
    setTimeout(()=>{
        texts.forEach((text)=>{
            text.style.animation = ""
        })
        secondPage.classList.remove("page-visible")
        secondPage.classList.add("page-hidden")
        thirdPage.classList.remove("page-hidden")
        thirdPage.classList.add("page-visible")
        img1.style.animation = "fadeInRight 1s"
        img2.style.animation ="fadeInRight 2s"
        thirdPage.classList[1] === "page-visible" && gofourthPage();
    },7000)
}

function gofourthPage(){
    setTimeout(()=>{
        img1.style.animation = ""
        img2.style.animation =""
        thirdPage.classList.remove("page-visible")
        thirdPage.classList.add("page-hidden")
        fourthPage.classList.remove("page-hidden")
        fourthPage.classList.add("page-visible")
        img3.style.animation = "fadeInUp 1s"
        img4.style.animation = "fadeInUp 2s"
        img5.style.animation = "fadeInUp 3s"
        fourthPage.classList[1] === "page-visible" && gofirstPage(false);
    },7000)
}

function gofirstPage(time){
    if(time === true){
        window.location.reload()
    }else if (time === false){
        setTimeout(()=>{
            bubbles.forEach((bubble)=>{
                bubble.classList.add("page-visible")
                bubble.classList.remove("page-hidden")
            })
            text1.style.animation = "fadeInDown 1s"
            shadow.style.animation = "fadeInUp 1s"
            img3.style.animation = ""
            img4.style.animation = ""
            img5.style.animation = ""
            secondPage.classList.remove("page-visible")
            secondPage.classList.add("page-hidden")
            thirdPage.classList.remove("page-visible")
            thirdPage.classList.add("page-hidden")
            fourthPage.classList.remove("page-visible")
            fourthPage.classList.add("page-hidden")
            homePage.classList.remove("page-hidden")
            homePage.classList.add("page-visible")
             homePage.classList[1] === "page-visible" && goSecondPage();
            },7000)
    }
}

function makeSignUp(){
    signUp = !signUp
    const iframe = document.createElement("iframe")
    if(signUp === true){ 
        iframe.setAttribute("class", "iframe")
        iframe.setAttribute("src", "http://into-on.com/")
        iframe.setAttribute("width", "900")
        iframe.setAttribute("height", "1000")
        iframe.setAttribute("scrolling","yes")
       container.appendChild(iframe)
    }else if(signUp === false && container.childNodes[109] !== undefined){
        container.childNodes[109].remove()
    }
}

init();