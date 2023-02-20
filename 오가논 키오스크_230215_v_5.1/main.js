"use strict";

import { Page } from "./page.js";
import { Iframe } from "./iframe.js";

const page = new Page();
const iframe = new Iframe();

//비눗방울
const bubbles = document.querySelectorAll(".bubble");

//배경음악
const bgSound = new Audio("./sound/bg.mp3");

//clearInterval을 하기 위한 setInterval Id
let intervalId = null;

//button
const home = document.querySelector(".home");
const signUpBtn = document.querySelector(".sign-up");
const closeBtn = document.querySelector(".close-btn");

const size = window.matchMedia("screen and (max-width: 768px)");

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
    iframe.signUp = false;
    iframe.close();
    bubbles.forEach((bubble) => {
      bubble.style.opacity = 0;
    });
    interval();
    startInterval();
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

    if (iframe.signUp) {
      iframe.close();
      bubbles.forEach((bubble) => {
        bubble.style.opacity = 0;
      });
      interval();
      startInterval();
    } else {
      clearInterval(intervalId);
      iframe.make();
    }
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
