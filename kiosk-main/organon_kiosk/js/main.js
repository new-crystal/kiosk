"use strict";

//import { Page } from "./page.js";
//import { Iframe } from "./iframe.js";

let Page = null;
let Iframe = null;
let page = null;
let iframe = null;

async function load() {
  Page = await import("./page.js");
  Iframe = await import("./iframe.js");
}

load().then(() => {
  page = new Page.Page();
  iframe = new Iframe.Iframe();
  startInterval();
  interval();
});

//clearInterval을 하기 위한 setInterval Id
let intervalId = null;

//button
const home = document.querySelector(".home");
const signUpBtn = document.querySelector(".sign-up");
const closeBtn = document.querySelector(".close-btn");

//배경음악 재생 함수
async function playBackGroundAudio() {
  const audio = new Audio("sound/bg.mp3");
  audio.loop = true;
  audio.play();
}

//윈도우가 로드됐을 때 배경음악 재생함수 실행
window.onload = () => {
  playBackGroundAudio();
};

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
  const bubbles = document.querySelectorAll(".bubble");
  //중복터치 방지
  let closeTouch = true;
  if (closeTouch) {
    closeTouch = false;
    const closeTime = setTimeout(() => {
      closeTouch = true;
    }, 100);
    clearTimeout(closeTime);
    //signUp을 false로 바꾸고 버블을 없애고 iframe을 닫음
    iframe.signUp = false;
    bubbles.forEach((bubble) => {
      bubble.style.opacity = 0;
    });
    iframe.close();
    interval();
    startInterval();
  }
});

//처음으로 버튼 이벤트
home.addEventListener("touchstart", () => {
  //중복터치 방지
  let homeTouch = true;
  if (homeTouch && !iframe.signUp) {
    homeTouch = false;
    const homeTime = setTimeout(() => {
      homeTouch = true;
    }, 100);
    clearTimeout(homeTime);
    btnActive(home);
    //interval을 지우고 순서를 1로 변경함
    clearInterval(intervalId);
    page.order = 1;
    startInterval();
    interval();
  }
});

//회원가입 버튼 이벤트
signUpBtn.addEventListener("touchstart", () => {
  //비눗방울
  const bubbles = document.querySelectorAll(".bubble");
  //중복 터치 방지
  let signupTouch = true;
  if (signupTouch) {
    signupTouch = false;
    const signUpTime = setTimeout(() => {
      signupTouch = true;
    }, 100);
    clearTimeout(signUpTime);
    btnActive(signUpBtn);
    //signUp이 true이면 iframe을 닫음
    if (iframe.signUp) {
      iframe.close();
      bubbles.forEach((bubble) => {
        bubble.style.opacity = 0;
      });
      interval();
      startInterval();
      //signUp이 false이면 ifrmae을 생성함
    } else {
      clearInterval(intervalId);
      page.showIframe();
      iframe.create();
    }
  }
});

//버튼 눌렀을 때 css 추가하고 제거하는 함수
function btnActive(button) {
  button.classList.add("button-active");
  setTimeout(() => {
    button.classList.remove("button-active");
  }, 500);
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
