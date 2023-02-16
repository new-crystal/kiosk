"use strict";

import { Page } from "./page.js";

const page = new Page();

const bubbles = document.querySelectorAll(".bubble");

//페이지 전체
const container = document.querySelector(".container");

//배경음악
const bgSound = new Audio("./sound/bg.mp3");

//회원가입 상태 = false
//true -> 회원 가입 버튼 누를 경우 -> iframe, closed button 생성
let signUp = false;

//clearInterval을 하기 위한 setInterval Id
let intervalId = null;

//iframe
const iframeBox = document.querySelector(".iframe-page");
const btnBox = document.querySelector(".btn-box");
let iframeContent = null;

//button
const home = document.querySelector(".home");
const signUpBtn = document.querySelector(".sign-up");
const closeBtn = document.querySelector(".close-btn");

//마우스 우클릭 방지 이벤트
document.addEventListener(
  "contextmenu",
  function (event) {
    event.preventDefault();
  },
  false
);

//닫기 버튼 이벤트 리스너
closeBtn.addEventListener("touchstart", () => {
  let closeTouch = true;
  if (closeTouch) {
    closeTouch = false;
    setTimeout(() => {
      closeTouch = true;
    }, 100);
    signUp = false;
    closeIfrme();
  }
});

//처음으로 버튼 이벤트
//button-active -> 버튼 애니메이션
home.addEventListener("touchstart", () => {
  let homeTouch = true;
  if (homeTouch) {
    homeTouch = false;
    setTimeout(() => {
      homeTouch = true;
    }, 100);
    home.classList.add("button-active");
    setTimeout(() => {
      home.classList.remove("button-active");
    }, 500);
    //interval clear & order 재할당 & interval 다시 실행
    clearInterval(intervalId);
    page.order = 1;
    startInterval();
    interval();
  }
});

//회원가입 버튼 이벤트
//button-active -> 버튼 애니메이션
signUpBtn.addEventListener("touchstart", () => {
  let signupTouch = true;
  if (signupTouch) {
    signupTouch = false;
    setTimeout(() => {
      signupTouch = true;
    }, 100);
    signUpBtn.classList.add("button-active");
    setTimeout(() => {
      signUpBtn.classList.remove("button-active");
    }, 500);
    clearInterval(intervalId);
    makeSignUp();
  }
});

//footer-button 터치 이벤트 함수
//home -> 처음으로 버튼 -> gofirstPage() 함수 실행
//sign-up -> 회원가입 버튼 -> MakeSignUp() 함수 실행
//button-active -> 버튼 애니메이션
//

//window load 이후 배경음악 권한 허용 함수
let AudioContext;
let audioContext;

//배경음악 디버깅 함수
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

//배경음악 재생함수
function playSound(sound) {
  const bgsong = sound.play();
  sound.loop = true;
  if (bgsong !== undefined) {
    bgsong;
  }
}

//회원가입 버튼 이벤트
//sign-up = true -> iframe, closed button 생성, 뒷 배경 어둡게
//sign-up = false -> iframe, closed button 제거
function makeSignUp() {
  signUp = !signUp;
  if (signUp) {
    createIframe();
  } else if (!signUp) {
    closeIfrme();
  }
}

//ifrmae 닫기 함수
//닫기 버튼을 누르거나
//회원가입을 다시 한 번 눌렀을 경우(signUp = true 일 때)실행
//interval 재실행
function closeIfrme() {
  signUp = false;
  iframeContent = null;
  bubbles.forEach((bubble) => {
    bubble.style.opacity = 0;
  });
  iframeBox.classList.add("iframe-page-hidden");
  container.style.backgroundColor = "rgba(0,0,0,0)";
  btnBox.style.filter = "brightness(100%)";
  interval();
  startInterval();
}

//iframe 생성 함수
//clearInterval
function createIframe() {
  page.showIframe();
  iframeBox.classList.remove("iframe-page-hidden");
  iframeContent = document.createElement("iframe");
  iframeContent.classList.add("iframe");
  iframeContent.src =
    "https://organonpro.com/kr-kr/member-option/?screenToRender=traditionalRegistration";
  iframeContent.width = 900;
  iframeContent.height = 1200;
  iframeBox.appendChild(iframeContent);

  container.style.backgroundColor = "rgba(0,0,0,0.3)";
  btnBox.style.filter = "brightness(80%)";
}

//interval 반복 될 함수
//order을 받아 순서대로 진행
function startInterval() {
  switch (page.order) {
    case 1:
      page.order++;
      page.gofirst();
      break;
    case 2:
      page.order++;
      page.goSecond();
      break;
    case 3:
      page.order++;
      page.goThird();
      break;
    case 4:
      page.order = 1;
      page.gofourth();
      break;
  }
}

//반복시키는 함수
function interval() {
  intervalId = setInterval(startInterval, 7000);
}

startInterval();
interval();
