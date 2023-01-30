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
const fourthImg = document.querySelector(".fourth-img-box");
const bubbles = document.querySelectorAll(".bubble");
const background = document.querySelector(".background");

const backgroundSound = new Audio("./sound/bg.mp3");

let signUp = false;

//footer-button event-listener
btnBox.addEventListener("touchstart", (e) => {
  const event =
    e.targetTouches.length >= 1 ? e.targetTouches.item(0) : e.touches.item(0);
  onClickBtn(event);
});

//footer-button touch function
//home -> 처음으로
//sign-up -> 회원가입
function onClickBtn(event) {
  if (event.target.className === "home") {
    gofirstPage(true);
  } else if (event.target.className === "sign-up") {
    makeSignUp();
  }
}

//init function
function init() {
  animation(text1, "fadeInDown", 1);
  animation(shadow, "fadeInUp", 1);
  animation(background, "fadeIn", 3);
  goSecondPage();
  backgroundSound.play();
}

//second-page function
//delay -> 7s
function goSecondPage() {
  setTimeout(() => {
    resetAnimation(text1);
    resetAnimation(shadow);
    resetAnimation(background);
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

//third-page function
//delay -> 7s
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

//fourth-page function
//delay -> 7s
function gofourthPage() {
  setTimeout(() => {
    resetAnimation(img1);
    resetAnimation(img2);
    goNextPage(thirdPage, fourthPage);
    fourthPage.classList[1] === "page-visible" && gofirstPage(false);
  }, 7000);
}

//first-page function
//true -> 처음으로 버튼 이동
//false -> 자동으로 이동
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
      animation(background, "fadeIn", 3);
      resetAnimation(img3);
      resetAnimation(img4);
      resetAnimation(img5);
      goNextPage(fourthPage, homePage);
      homePage.classList[1] === "page-visible" && goSecondPage();
    }, 7000);
  }
}

//sign-up button event
//sign-up = true -> create iframe, closed button
//sign-up = false -> remove iframe, closed button
function makeSignUp() {
  signUp = !signUp;
  const iframe = document.createElement("iframe");
  const closeBtn = document.createElement("button");
  if (signUp === true) {
    iframe.setAttribute("class", "iframe");
    iframe.setAttribute("src", "http://into-on.com/");
    iframe.setAttribute("width", "900");
    iframe.setAttribute("height", "1000");
    iframe.setAttribute("scrolling", "yes");

    closeBtn.setAttribute("class", "close-btn");
    closeBtn.innerHTML = `<i class="fa-solid fa-xmark"></i> 닫기`;
    container.appendChild(iframe);
    container.appendChild(closeBtn);
    onClickCloseBtn();
  } else if (signUp === false) {
    container.children[55].remove();
    container.children[54].remove();
  }
}

//close-button event
//touch-start -> remove iframe, closed button
function onClickCloseBtn() {
  const closeButton = document.querySelector(".close-btn");
  closeButton.addEventListener("touchstart", () => {
    container.children[55].remove();
    container.children[54].remove();
  });
}

//when move the page, prePage show, nextPage hide
function goNextPage(prePage, NextPage) {
  prePage.classList.remove("page-visible");
  prePage.classList.add("page-hidden");
  NextPage.classList.remove("page-hidden");
  NextPage.classList.add("page-visible");
}

//when move the page, reset animation
function resetAnimation(animation) {
  animation.style.animation = "";
}

//start target's animation with animation name, delay ainmation second
function animation(target, name, second) {
  target.style.animation = `${name} ${second}s`;
}

init();
