"use strict";

const wrap = document.querySelector(".wrap");
const wrapRect = wrap.getBoundingClientRect();
const home = document.querySelector("#home")
const signUp = document.querySelector("#sign-up")
const homePage = document.querySelector(".homepage")
const secondPage = document.querySelector(".second-page")
const thirdPage = document.querySelector(".third-page")
const fourthPage = document.querySelector(".fourth-page")

function init(){
    goSecondPage();
}

function goSecondPage(){
    const texts = document.querySelectorAll(".text")
    setTimeout(()=>{
        homePage.classList.remove("page-visible")
        homePage.classList.add("page-hidden")
        secondPage.classList.remove("page-hidden")
        secondPage.classList.add("page-visible")
        texts.forEach((text)=>{
            text.style.animation = "fadeInleft 1s"
        })
        secondPage.classList[1] === "page-visible" && goThirdPage();
    },7000)
}  

function goThirdPage(){
    const img1 = document.querySelector(".third-1")
    const img2 = document.querySelector(".third-2")
    setTimeout(()=>{
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
    const img3 = document.querySelector(".fourth-1")
    const img4 = document.querySelector(".fourth-2")
    const img5 = document.querySelector(".fourth-3")

    setTimeout(()=>{
        thirdPage.classList.remove("page-visible")
        thirdPage.classList.add("page-hidden")
        fourthPage.classList.remove("page-hidden")
        fourthPage.classList.add("page-visible")
        img3.style.animation = "fadeInUp 1s"
        img4.style.animation = "fadeInUp 2s"
        img5.style.animation = "fadeInUp 3s"
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
