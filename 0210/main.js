"use strict";

const container = document.querySelector(".container") 
const homePage = document.querySelector(".homepage")
const secondPage = document.querySelector(".second-page")
const thirdPage = document.querySelector(".third-page")
const fourthPage = document.querySelector(".fourth-page")
const btnBox = document.querySelector(".btn-box")
const texts = document.querySelectorAll(".text")
const img1 = document.querySelector(".third-1")
const img2 = document.querySelector(".third-2")
const img3 = document.querySelector(".fourth-1")
const img4 = document.querySelector(".fourth-2")
const img5 = document.querySelector(".fourth-3")
let signUp = false;

btnBox.addEventListener("click", (e)=>{onClickBtn(e)})

function onClickBtn(event){
 if(event.target.className === "home"){
    gofirstPage(true)
 }else if(event.target.className === "sign-up"){
    makeSignUp()
 }
}

function init(){
    goSecondPage();
}


function goSecondPage(){
    setTimeout(()=>{
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
    }else if (time === false){
        setTimeout(()=>{
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
        iframe.setAttribute("src", "https://www.organon.com/korea/")
        iframe.setAttribute("width", "800")
        iframe.setAttribute("height", "700")
        iframe.setAttribute("scrolling","yes")
       container.appendChild(iframe)
    }else if(signUp === false && container.childNodes[11] !== undefined){
        container.childNodes[11].remove()
    }
}

init();