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
        goNextPage(homePage, secondPage)
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
        goNextPage(secondPage, thirdPage)
        img1.style.animation = "fadeInRight 1s"
        img2.style.animation ="fadeInRight 2s"
        thirdPage.classList[1] === "page-visible" && gofourthPage();
    },7000)
}

function gofourthPage(){
    setTimeout(()=>{
        img1.style.animation = ""
        img2.style.animation =""
        goNextPage(thirdPage, fourthPage)
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
            goNextPage(fourthPage, homePage)
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

function goNextPage(prePage, NextPage){
    prePage.classList.remove("page-visible")
    prePage.classList.add("page-hidden")
    NextPage.classList.remove("page-hidden")
    NextPage.classList.add("page-visible")
}

init();