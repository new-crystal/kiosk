"use strict";

import { Page } from "./page.js";
import { Iframe } from "./iframe.js";

const page = new Page();
const iframe = new Iframe();

//비눗방울
const bubbles = document.querySelectorAll(".bubble");

//clearInterval을 하기 위한 setInterval Id
let intervalId = null;

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

function playAudio() {
  const audio = document.querySelector("#bgmAudio");
  const source = document.createElement("source");
  source.setAttribute("src", "./sound/bg.mp3");
  source.setAttribute("type", "audio/mp3");
  audio.appendChild(source);
  console.log(audio);
}
//window load 이후 배경음악 재생 함수
// window.onload = () => {
//   playAudio();
//   // const audio = document.querySelector("#bgmAudio");
//   // const source = document.createElement("source");
//   // source.setAttribute("src", "./sound/bg.mp3");
//   // source.setAttribute("type", "audio/mp3");
//   // audio.appendChild(source);
//   // audio.setAttribute("autoplay", "");
//   {
//     /* <source src="./sound/bg.mp3" type="audio/mp3">  */
//   }
// };

//닫기 버튼 이벤트 리스너
closeBtn.addEventListener("touchstart", () => {
  let closeTouch = true;
  if (closeTouch) {
    closeTouch = false;
    const closeTime = setTimeout(() => {
      closeTouch = true;
    }, 100);
    clearTimeout(closeTime);
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
//button-active -> 버튼 애니메이션
home.addEventListener("touchstart", () => {
  let homeTouch = true;
  if (homeTouch && !iframe.signUp) {
    homeTouch = false;
    const homeTime = setTimeout(() => {
      homeTouch = true;
    }, 100);
    clearTimeout(homeTime);
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
    const signUpTime = setTimeout(() => {
      signupTouch = true;
    }, 100);
    clearTimeout(signUpTime);
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
      page.showIframe();
      iframe.create();
    }
  }
});

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

playAudio();
startInterval();
interval();
