"use strict";

//페이지 순서
let order = 4;

//페이지 전체
const container = document.querySelector(".container");

//페이지
const homePage = document.querySelector(".homepage");
const secondPage = document.querySelector(".second-page");
const thirdPage = document.querySelector(".third-page");
const fourthPage = document.querySelector(".fourth-page");
const iframePage = document.querySelector(".iframe-page");

//애니메이션 요소
const text1 = document.querySelector(".first-animation-down");
const btnBox = document.querySelector(".btn-box");
const text2 = document.querySelector(".text-1");
const text3 = document.querySelector(".text-2");
const img1 = document.querySelector(".third-1");
const img2 = document.querySelector(".third-2");
const img3 = document.querySelector(".fourth-1");
const img4 = document.querySelector(".fourth-2");
const img5 = document.querySelector(".fourth-3");
const fourthImg = document.querySelector(".fourth-img-box");
const bubbles = document.querySelectorAll(".bubble");

//배경음악
const bgSound = new Audio("./sound/bg.mp3");

//회원가입 상태 = false
//true -> 회원 가입 버튼 누를 경우 -> iframe, closed button 생성
let signUp = false;

//clearInterval을 하기 위한 setInterval Id
let intervalId = null;

//iframe
const iframeBox = document.querySelector(".iframe-page");
const footer = document.querySelector(".footer");
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
    order = 4;
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

//두번째 페이지로 이동 함수
function goSecondPage() {
  homePage.classList.add("page-hidden");
  thirdPage.classList.add("page-hidden");
  fourthPage.classList.add("page-hidden");
  text1.style.animation = "";
  bubbles.forEach((bubble) => {
    bubble.style.opacity = 0;
  });

  secondPage.classList.remove("page-hidden");
  text2.style.animation = `fadeInleft 1s`;
  text3.style.animation = `fadeInleft 1.5s`;
}

//세번째 페이지로 이동 함수
function goThirdPage() {
  homePage.classList.add("page-hidden");
  secondPage.classList.add("page-hidden");
  fourthPage.classList.add("page-hidden");
  text2.style.animation = "";
  text3.style.animation = "";

  thirdPage.classList.remove("page-hidden");
  img1.style.animation = `fadeInRight 1s`;
  img2.style.animation = `fadeInRight 2s`;
}

//네번째 페이지로 이동 함수
function gofourthPage() {
  homePage.classList.add("page-hidden");
  secondPage.classList.add("page-hidden");
  thirdPage.classList.add("page-hidden");
  img1.style.animation = "";
  img2.style.animation = "";

  fourthPage.classList.remove("page-hidden");

  img3.style.animation = `fadeInUp 1s`;
  img4.style.animation = `fadeInUp 2s`;
  img5.style.animation = `fadeInUp 3s`;
}

//첫번째 페이지로 이동 함수
//true -> 처음으로 버튼 이동
//false -> 자동으로 이동
async function gofirstPage() {
  bubbles.forEach((bubble) => {
    bubble.style.opacity = 1;
  });
  text1.style.animation = `fadeInDown 1s`;
  text2.style.animation = "";
  text3.style.animation = "";
  img1.style.animation = "";
  img2.style.animation = "";
  img3.style.animation = "";
  img4.style.animation = "";
  img5.style.animation = "";

  secondPage.classList.add("page-hidden");
  thirdPage.classList.add("page-hidden");
  fourthPage.classList.add("page-hidden");
  homePage.classList.remove("page-hidden");
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
  showIframe();
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

//ifrmae 진행할 때 페이지 감추는 함수
function showIframe() {
  bubbles.forEach((bubble) => {
    bubble.style.opacity = 1;
  });
  text1.style.animation = "";
  text2.style.animation = "";
  text3.style.animation = "";
  img1.style.animation = "";
  img2.style.animation = "";
  img3.style.animation = "";
  img4.style.animation = "";
  img5.style.animation = "";
  homePage.classList.add("page-hidden");
  secondPage.classList.add("page-hidden");
  thirdPage.classList.add("page-hidden");
  fourthPage.classList.add("page-hidden");
}

//interval 반복 될 함수
//order을 받아 순서대로 진행
function startInterval() {
  switch (order) {
    case 1:
      order = 2;
      goSecondPage();
      break;
    case 2:
      order = 3;
      goThirdPage();
      break;
    case 3:
      order = 4;
      gofourthPage();
      break;
    case 4:
      order = 1;
      gofirstPage();
      break;
  }
}

//반복시키는 함수
function interval() {
  intervalId = setInterval(startInterval, 7000);
}

startInterval();
interval();
