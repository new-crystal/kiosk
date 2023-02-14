"use strict";

//페이지 순서
let order = 1;

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

//처음으로 상태 = false
//true -> 처음으로 버튼 누를 경우
let time = false;

//clearTimeout을 하기 위한 setTimeout Id
let timeOut = null;

//iframe
const iframeBox = document.querySelector(".iframe-page");
const footer = document.querySelector(".footer");
let iframeContent = null;

//btn
const home = document.querySelector(".home");
const signUpBtn = document.querySelector(".sign-up");
const closeBtn = document.querySelector(".close-btn");

//닫기 버튼 이벤트 리스너
document.addEventListener("touchstart", (e) => {
  if (e.target.className === "close-btn") {
    signUp = false;
    closeIfrme();
  }
});

//마우스 우클릭 방지 이벤트
document.addEventListener(
  "contextmenu",
  function (event) {
    event.preventDefault();
  },
  false
);

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
  if (event.target.id === "home") {
    home.classList.add("button-active");
    setTimeout(() => {
      home.classList.remove("button-active");
    }, 500);
    gofirstPage(true);
  } else if (event.target.id === "sign-up") {
    signUpBtn.classList.add("button-active");
    setTimeout(() => {
      signUpBtn.classList.remove("button-active");
    }, 500);
    makeSignUp();
    time = true;
  }
}

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
//7초 딜레이
function goSecondPage(move) {
  if (!time) {
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
  if (!time && order === 2 && move) {
    setTimeout(() => {
      startLoop();
    }, 7000);
  }

  if (!time && order === 2 && !move) {
    order = 3;
    timeOut = setTimeout(() => {
      startLoop();
    }, 7000);
  }
}

//세번째 페이지로 이동 함수
//7초 딜레이
function goThirdPage(move) {
  if (!time) {
    homePage.classList.add("page-hidden");
    secondPage.classList.add("page-hidden");
    fourthPage.classList.add("page-hidden");
    text2.style.animation = "";
    text3.style.animation = "";

    thirdPage.classList.remove("page-hidden");
    img1.style.animation = `fadeInRight 1s`;
    img2.style.animation = `fadeInRight 2s`;
  }

  if (!time && order === 3 && move) {
    setTimeout(() => {
      startLoop();
    }, 7000);
  }

  if (!time && order === 3 && !move) {
    order = 4;
    timeOut = setTimeout(() => {
      startLoop();
    }, 7000);
  }
}

//네번째 페이지로 이동 함수
//7초 딜레이
function gofourthPage(move) {
  if (!time) {
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

  if (!time && order === 4 && move) {
    setTimeout(() => {
      startLoop();
    }, 7000);
  }

  if (!time && order === 4 && !move) {
    order = 1;
    timeOut = setTimeout(() => {
      startLoop();
    }, 7000);
  }
}

//첫번째 페이지로 이동 함수
//true -> 처음으로 버튼 이동
//false -> 자동으로 이동
async function gofirstPage(homebtn) {
  if (!time) {
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
  if (homebtn && !time) {
    clearTimeout(timeOut);
    setTimeout(() => {
      startLoop();
    }, 7000);
  } else if (!time && !homebtn && order === 1) {
    order = 2;
    timeOut = setTimeout(() => {
      startLoop();
    }, 7000);
  }
}

//회원가입 버튼 이벤트
//sign-up = true -> iframe, closed button 생성, 뒷 배경 어둡게
//sign-up = false -> iframe, closed button 제거
function makeSignUp() {
  signUp = !signUp;
  if (signUp === true) {
    time = true;
    clearTimeout(timeOut);
    showIframe();
    iframeBox.classList.remove("page-hidden");
    iframeContent = document.createElement("iframe");
    iframeContent.classList.add("iframe");
    iframeContent.src =
      "https://organonpro.com/kr-kr/member-option/?screenToRender=traditionalRegistration";
    iframeContent.width = 900;
    iframeContent.height = 1200;
    iframeBox.appendChild(iframeContent);

    container.style.backgroundColor = "rgba(0,0,0,0.3)";
    btnBox.style.filter = "brightness(80%)";
  } else if (signUp === false) {
    if (time === true) {
      time = !time;
      closeIfrme();
    }
  }
}

//ifrmae 닫기 함수
//닫기 버튼을 누르거나
//회원가입을 다시 한 번 눌렀을 경우(signUp = true 일 때)실행
function closeIfrme() {
  time = false;
  signUp = false;
  iframeContent = null;

  iframeBox.classList.add("page-hidden");
  container.style.backgroundColor = "rgba(0,0,0,0)";
  btnBox.style.filter = "brightness(100%)";
  stopIfrme();
}

//ifrmae 보여주는 함수
function showIframe() {
  clearTimeout(timeOut);
  time = true;
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

//iframe에서 나갈 때 받은 순서에 따라 다음 화면 보여주는 함수
function stopIfrme() {
  console.log(order);
  console.log(time);
  bubbles.forEach((bubble) => {
    bubble.style.opacity = 0;
  });
  clearTimeout(timeOut);
  switch (order) {
    case 1:
      gofirstPage(true);
      break;
    case 2:
      goSecondPage(true);
      break;
    case 3:
      goThirdPage(true);
      break;
    case 4:
      gofourthPage(true);
      break;
    default:
      gofirstPage(true);
      break;
  }
}

function startLoop() {
  console.log(order);
  console.log(time);
  switch (order) {
    case 1:
      gofirstPage(false);
      break;
    case 2:
      goSecondPage(false);
      break;
    case 3:
      goThirdPage(false);
      break;
    case 4:
      gofourthPage(false);
      break;
    default:
      gofirstPage(false);
      break;
  }
}

gofirstPage(false);
