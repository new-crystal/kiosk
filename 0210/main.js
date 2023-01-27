"use strict";

const wrap = document.querySelector(".wrap")
const wrapRect = wrap.getBoundingClientRect();
const home = document.querySelector("#home")
const signUp = document.querySelector("#sign-up")
const homePage = document.querySelector(".homepage")
const secondPage = document.querySelector(".second-page")
const thirdPage = document.querySelector(".third-page")
const fourthPage = document.querySelector(".fourth-page")

function init(){
   // goSecondPage();
}

function goSecondPage(){
    setTimeout(()=>{
        homePage.classList.remove("page-visible")
        homePage.classList.add("page-hidden")
        secondPage.classList.remove("page-hidden")
        secondPage.classList.add("page-visible")
        secondPage.classList[1] === "page-visible" && goThirdPage();
    },7000)
}  

function goThirdPage(){
    setTimeout(()=>{
        secondPage.classList.remove("page-visible")
        secondPage.classList.add("page-hidden")
        thirdPage.classList.remove("page-hidden")
        thirdPage.classList.add("page-visible")
        thirdPage.classList[1] === "page-visible" && gofourthPage();
    },7000)
}

function gofourthPage(){
    setTimeout(()=>{
        thirdPage.classList.remove("page-visible")
        thirdPage.classList.add("page-hidden")
        fourthPage.classList.remove("page-hidden")
        fourthPage.classList.add("page-visible")
        fourthPage.classList[1] === "page-visible" && gofirstPage();
    },7000)
}

function gofirstPage(){
    setTimeout(()=>{
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
init()

home.addEventListener("touchstart", () => {gofirstPage()})