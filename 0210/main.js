"use strict";

//페이지 전체
const container = document.querySelector(".container");

//페이지
const homePage = document.querySelector(".homepage");
const secondPage = document.querySelector(".second-page");
const thirdPage = document.querySelector(".third-page");
const fourthPage = document.querySelector(".fourth-page");

//애니메이션 요소
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

//배경음악
const bgSound = new Audio("./sound/bg.mp3");

//회원가입 상태 = false
//true -> 회원 가입 버튼 누를 경우 -> iframe, closed button 생성
let signUp = false;

//처음으로 상태 = false
//true -> 처음으로 버튼 누를 경우
let time = false;

//iframe
const iframe = document.querySelector(".iframe-box");
// const iframe = document.querySelector(".iframe");

//닫기 버튼 이벤트 리스너
document.addEventListener("touchstart", (e) => {
  console.log(e.target.className);
  if (e.target.className === "close-btn") {
    iframe.classList.add("page-hidden");
    signUp === false;
  }
});

//footer-button 이벤트 리스너
btnBox.addEventListener("touchstart", (e) => {
  const event =
    e.targetTouches.length >= 1 ? e.targetTouches.item(0) : e.touches.item(0);
  onClickBtn(event);
});

//footer-button 터치 이벤트 함수
//home -> 처음으로 버튼 -> gofirstPage(true) 함수 실행
//sign-up -> 회원가입 버튼 -> MakeSignUp() 함수 실행
function onClickBtn(event) {
  if (event.target.className === "home") {
    gofirstPage(true);
  } else if (event.target.className === "sign-up") {
    makeSignUp();
  }
}

//window load 이후 배경음악 권한 허용 함수
let AudioContext;

let audioContext;

window.onload = function () {
  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then(() => {
      AudioContext = window.AudioContext;
      audioContext = new AudioContext();
      playSound(bgSound);
    })
    .catch((e) => {
      console.error(`Audio permissions denied: ${e}`);
    });
};

//시작 함수
//애니메이션, 배경음악재생, 두 번째 페이지로 이동
function init() {
  animation(text1, "fadeInDown", 1);
  animation(shadow, "fadeInUp", 1);
  animation(background, "fadeIn", 3);
  goSecondPage();
}

//배경음악 재생함수
function playSound(sound) {
  const bgsong = sound.play();
  sound.loop = true;
  if (bgsong !== undefined) {
    bgsong
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  }
}

//두번째 페이지로 이동 함수
//7초 딜레이
function goSecondPage() {
  setTimeout(() => {
    time = false;
    resetAnimation(text1);
    resetAnimation(shadow);
    resetAnimation(background);
    bubbles.forEach((bubble) => {
      bubble.style.opacity = 0;
    });
    goNextPage(homePage, secondPage);
    secondPage.classList[1] === "page-visible" && goThirdPage();
    texts.forEach((text) => {
      animation(text, "fadeInleft", 1);
    });
  }, 7000);
}

//세번째 페이지로 이동 함수
//7초 딜레이
function goThirdPage() {
  setTimeout(() => {
    if (!time) {
      texts.forEach((text) => {
        resetAnimation(text);
      });
      goNextPage(secondPage, thirdPage);
      animation(img1, "fadeInRight", 1);
      animation(img2, "fadeInRight", 2);
      thirdPage.classList[1] === "page-visible" && gofourthPage();
    }
  }, 7000);
}

//네번째 페이지로 이동 함수
//7초 딜레이
function gofourthPage() {
  setTimeout(() => {
    if (!time) {
      resetAnimation(img1);
      resetAnimation(img2);
      goNextPage(thirdPage, fourthPage);
      animation(img3, "fadeInUp", 1);
      animation(img4, "fadeInUp", 2);
      animation(img5, "fadeInUp", 3);
      fourthPage.classList[1] === "page-visible" && gofirstPage(false);
    }
  }, 7000);
}

//첫번째 페이지로 이동 함수
//true -> 처음으로 버튼 이동
//false -> 자동으로 이동
function gofirstPage(homebtn) {
  time = homebtn;
  if (homebtn === true) {
    bubbles.forEach((bubble) => {
      bubble.style.opacity = 1;
    });
    animation(text1, "fadeInDown", 1);
    animation(shadow, "fadeInUp", 1);
    animation(background, "fadeIn", 3);
    texts.forEach((text) => {
      resetAnimation(text);
    });
    resetAnimation(img1);
    resetAnimation(img2);
    resetAnimation(img3);
    resetAnimation(img4);
    resetAnimation(img5);

    secondPage.classList.remove("page-visible");
    secondPage.classList.add("page-hidden");
    thirdPage.classList.remove("page-visible");
    thirdPage.classList.add("page-hidden");
    fourthPage.classList.remove("page-visible");
    fourthPage.classList.add("page-hidden");
    homePage.classList.remove("page-hidden");
    homePage.classList.add("page-visible");
    setTimeout(() => {
      homePage.classList[1] === "page-visible" && goSecondPage();
    }, 7000);
  } else if (homebtn === false) {
    setTimeout(() => {
      bubbles.forEach((bubble) => {
        // bubble.classList.add("page-visible");
        // bubble.classList.remove("page-hidden");
        bubble.style.opacity = 1;
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

//회원가입 버튼 이벤트
//sign-up = true -> iframe, closed button 생성
//sign-up = false -> iframe, closed button 제거
function makeSignUp() {
  signUp = !signUp;
  if (signUp === true) {
    iframe.classList.remove("page-hidden");
  } else if (signUp === false) {
    iframe.classList.add("page-hidden");
  }
}

//페이지 이동 함수
//prePage를 감추고 NextPage를 보이게 함
function goNextPage(prePage, NextPage) {
  prePage.classList.remove("page-visible");
  prePage.classList.add("page-hidden");
  NextPage.classList.remove("page-hidden");
  NextPage.classList.add("page-visible");
}

//애니메이션 리셋 함수
function resetAnimation(animation) {
  animation.style.animation = "";
}

//target의 name 애니메이션을 second초 동안 실행시키는 함수
function animation(target, name, second) {
  target.style.animation = `${name} ${second}s`;
}

init();
