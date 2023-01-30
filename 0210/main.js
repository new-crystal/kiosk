"use strict";

const container = document.querySelector(".container");
const homePage = document.querySelector(".homepage");
const secondPage = document.querySelector(".second-page");
const thirdPage = document.querySelector(".third-page");
const fourthPage = document.querySelector(".fourth-page");
const text1 = document.querySelector(".first-animation-down");
const shadow = document.querySelector(".shadow");
const btnBox = document.querySelector(".btn-box");
const texts = document.querySelectorAll(".text");
const img1 = document.querySelector(".third-1");
const img2 = document.querySelector(".third-2");
const img3 = document.querySelector(".fourth-1");
const img4 = document.querySelector(".fourth-2");
const img5 = document.querySelector(".fourth-3");
const bubbles = document.querySelectorAll(".bubble");
let signUp = false;

btnBox.addEventListener("touchstart", (e) => {
  onClickBtn(e);
});

function onClickBtn(event) {
  if (event.target.className === "home") {
    gofirstPage(true);
  } else if (event.target.className === "sign-up") {
    makeSignUp();
  }
}

function init() {
  animation(text1, "fadeInDown", 1);
  animation(shadow, "fadeInUp", 1);
  goSecondPage();
}

function goSecondPage() {
  setTimeout(() => {
    resetAnimation(text1);
    resetAnimation(shadow);
    bubbles.forEach((bubble) => {
      bubble.classList.remove("page-visible");
      bubble.classList.add("page-hidden");
    });
    goNextPage(homePage, secondPage);
    secondPage.classList[1] === "page-visible" && goThirdPage();
    texts.forEach((text) => {
      animation(text, "fadeInleft", 1);
    });
  }, 7000);
}

function goThirdPage() {
  setTimeout(() => {
    texts.forEach((text) => {
      resetAnimation(text);
    });
    goNextPage(secondPage, thirdPage);
    animation(img1, "fadeInRight", 1);
    animation(img2, "fadeInRight", 2);
    thirdPage.classList[1] === "page-visible" && gofourthPage();
  }, 7000);
}

function gofourthPage() {
  setTimeout(() => {
    resetAnimation(img1);
    resetAnimation(img2);
    goNextPage(thirdPage, fourthPage);
    animation(img3, "fadeInUp", 1);
    animation(img4, "fadeInUp", 2);
    animation(img5, "fadeInUp", 3);
    fourthPage.classList[1] === "page-visible" && gofirstPage(false);
  }, 7000);
}

function gofirstPage(time) {
  if (time === true) {
    window.location.reload();
  } else if (time === false) {
    setTimeout(() => {
      bubbles.forEach((bubble) => {
        bubble.classList.add("page-visible");
        bubble.classList.remove("page-hidden");
      });
      animation(text1, "fadeInDown", 1);
      animation(shadow, "fadeInUp", 1);
      resetAnimation(img3);
      resetAnimation(img4);
      resetAnimation(img5);
      goNextPage(fourthPage, homePage);
      homePage.classList[1] === "page-visible" && goSecondPage();
    }, 7000);
  }
}

function makeSignUp() {
  signUp = !signUp;
  const iframe = document.createElement("iframe");
  if (signUp === true) {
    iframe.setAttribute("class", "iframe");
    iframe.setAttribute("src", "http://into-on.com/");
    iframe.setAttribute("width", "900");
    iframe.setAttribute("height", "1000");
    iframe.setAttribute("scrolling", "yes");
    container.appendChild(iframe);
  } else if (signUp === false && container.childNodes[109] !== undefined) {
    container.childNodes[109].remove();
  }
}

function goNextPage(prePage, NextPage) {
  prePage.classList.remove("page-visible");
  prePage.classList.add("page-hidden");
  NextPage.classList.remove("page-hidden");
  NextPage.classList.add("page-visible");
}

function resetAnimation(animation) {
  animation.style.animation = "";
}

function animation(target, name, second) {
  target.style.animation = `${name} ${second}s`;
}

init();
