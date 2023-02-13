"use strict";
//clearTimeout + function

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

//clearTimeout
let firstTime = null;
let secondTime = null;
let thirdTime = null;
let fourthTime = null;

//iframe
const iframeBox = document.querySelector(".iframe-page");
const footer = document.querySelector(".footer");
let iframeContent = null;

//닫기 버튼 이벤트 리스너
document.addEventListener("touchstart", (e) => {
  if (e.target.className === "close-btn") {
    setTimeout(() => {
      signUp = false;
      closeIfrme();
    }, 500);
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
    gofirstPage(true);
  } else if (event.target.id === "sign-up") {
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

//시작 함수
//애니메이션, 두 번째 페이지로 이동
function init() {
  text1.style.animation = `fadeInDown 1s`;
  gofirstPage(false);
}

//두번째 페이지로 이동 함수
//7초 딜레이
function goSecondPage(move) {
  if (!firstTime) {
    clerTimeout(firstTime);
  }
  if (move) {
    if (!time && order === 2) {
      homePage.classList.remove("page-visible");
      homePage.classList.add("page-hidden");

      thirdPage.classList.remove("page-visible");
      thirdPage.classList.add("page-hidden");
      fourthPage.classList.remove("page-visible");
      fourthPage.classList.add("page-hidden");

      text1.style.animation = "";
      bubbles.forEach((bubble) => {
        bubble.style.opacity = 0;
      });
      homePage.classList.remove("page-visible");
      homePage.classList.add("page-hidden");
      secondPage.classList.remove("page-hidden");
      secondPage.classList.add("page-visible");
      order = 3;
      goThirdPage();
      text2.style.animation = `fadeInleft 1s`;
      text3.style.animation = `fadeInleft 1.5s`;
    }
  } else {
    if (!time && order === 2) {
      homePage.classList.remove("page-visible");
      homePage.classList.add("page-hidden");

      thirdPage.classList.remove("page-visible");
      thirdPage.classList.add("page-hidden");
      fourthPage.classList.remove("page-visible");
      fourthPage.classList.add("page-hidden");

      text1.style.animation = "";
      bubbles.forEach((bubble) => {
        bubble.style.opacity = 0;
      });
      homePage.classList.remove("page-visible");
      homePage.classList.add("page-hidden");
      secondPage.classList.remove("page-hidden");
      secondPage.classList.add("page-visible");
      order = 3;
      text2.style.animation = `fadeInleft 1s`;
      text3.style.animation = `fadeInleft 1.5s`;
      secondTime = setTimeout(() => {
        goThirdPage();
      }, 7000);
    }
  }
}

//세번째 페이지로 이동 함수
//7초 딜레이
function goThirdPage(move) {
  clearTimeout(secondTime);
  if (move) {
    if (!time && order === 3) {
      homePage.classList.remove("page-visible");
      homePage.classList.add("page-hidden");
      secondPage.classList.remove("page-visible");
      secondPage.classList.add("page-hidden");
      fourthPage.classList.remove("page-visible");
      fourthPage.classList.add("page-hidden");
      text2.style.animation = "";
      text3.style.animation = "";
      secondPage.classList.remove("page-visible");
      secondPage.classList.add("page-hidden");
      thirdPage.classList.remove("page-hidden");
      thirdPage.classList.add("page-visible");
      img1.style.animation = `fadeInRight 1s`;
      img2.style.animation = `fadeInRight 2s`;
      order = 4;
      gofourthPage();
    }
  } else {
    if (!time && order === 3) {
      homePage.classList.remove("page-visible");
      homePage.classList.add("page-hidden");
      secondPage.classList.remove("page-visible");
      secondPage.classList.add("page-hidden");

      fourthPage.classList.remove("page-visible");
      fourthPage.classList.add("page-hidden");

      text2.style.animation = "";
      text3.style.animation = "";

      secondPage.classList.remove("page-visible");
      secondPage.classList.add("page-hidden");
      thirdPage.classList.remove("page-hidden");
      thirdPage.classList.add("page-visible");

      img1.style.animation = `fadeInRight 1s`;
      img2.style.animation = `fadeInRight 2s`;
      order = 4;
      thirdTime = setTimeout(() => {
        gofourthPage();
      }, 7000);
    }
  }
}

//네번째 페이지로 이동 함수
//7초 딜레이
function gofourthPage(move) {
  clearTimeout(thirdTime);
  if (move) {
    if (!time && order === 4) {
      homePage.classList.remove("page-visible");
      homePage.classList.add("page-hidden");
      secondPage.classList.remove("page-visible");
      secondPage.classList.add("page-hidden");
      thirdPage.classList.remove("page-visible");
      thirdPage.classList.add("page-hidden");

      img1.style.animation = "";
      img2.style.animation = "";
      thirdPage.classList.remove("page-visible");
      thirdPage.classList.add("page-hidden");
      fourthPage.classList.remove("page-hidden");
      fourthPage.classList.add("page-visible");

      img3.style.animation = `fadeInUp 1s`;
      img4.style.animation = `fadeInUp 2s`;
      img5.style.animation = `fadeInUp 3s`;
      order = 1;
      gofirstPage(false);
    }
  } else {
    if (!time && order === 4) {
      homePage.classList.remove("page-visible");
      homePage.classList.add("page-hidden");
      secondPage.classList.remove("page-visible");
      secondPage.classList.add("page-hidden");
      thirdPage.classList.remove("page-visible");
      thirdPage.classList.add("page-hidden");

      img1.style.animation = "";
      img2.style.animation = "";

      thirdPage.classList.remove("page-visible");
      thirdPage.classList.add("page-hidden");
      fourthPage.classList.remove("page-hidden");
      fourthPage.classList.add("page-visible");
      img3.style.animation = `fadeInUp 1s`;
      img4.style.animation = `fadeInUp 2s`;
      img5.style.animation = `fadeInUp 3s`;
      order = 1;
      fourthTime = setTimeout(() => {
        gofirstPage(false);
      }, 7000);
    }
  }
}

//첫번째 페이지로 이동 함수
//true -> 처음으로 버튼 이동
//false -> 자동으로 이동
async function gofirstPage(homebtn) {
  clearTimeout(fourthTime);
  if (time === false) {
    setTimeout(() => {
      time = false;
    }, 500);
  }
  if (signUp) {
    closeIfrme();
  }
  if (homebtn === true && !time) {
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

    secondPage.classList.remove("page-visible");
    secondPage.classList.add("page-hidden");
    thirdPage.classList.remove("page-visible");
    thirdPage.classList.add("page-hidden");
    fourthPage.classList.remove("page-visible");
    fourthPage.classList.add("page-hidden");

    homePage.classList.remove("page-hidden");
    homePage.classList.add("page-visible");
    setTimeout(() => {
      order = 2;
      goSecondPage();
    }, 7000);
    //homePage.classList[1] === "page-visible" && goSecondPage();
  } else if (!time && !homebtn && order === 1) {
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

    secondPage.classList.remove("page-visible");
    secondPage.classList.add("page-hidden");
    thirdPage.classList.remove("page-visible");
    thirdPage.classList.add("page-hidden");
    fourthPage.classList.remove("page-visible");
    fourthPage.classList.add("page-hidden");
    fourthPage.classList.remove("page-visible");
    fourthPage.classList.add("page-hidden");
    homePage.classList.remove("page-hidden");
    homePage.classList.add("page-visible");

    firstTime = setTimeout(() => {
      order = 2;
      goSecondPage();
    }, 7000);
  }
}

//회원가입 버튼 이벤트
//sign-up = true -> iframe, closed button 생성, 뒷 배경 어둡게
//sign-up = false -> iframe, closed button 제거
function makeSignUp() {
  signUp = !signUp;

  if (signUp === true) {
    showIframe();
    iframeBox.classList.remove("page-hidden");
    iframeBox.classList.add("page-visible");
    iframeContent = document.createElement("iframe");
    iframeContent.classList.add("iframe");
    iframeContent.src =
      "https://organonpro.com/kr-kr/member-option/?screenToRender=traditionalRegistration";
    iframeContent.width = 900;
    iframeContent.height = 1200;
    iframeBox.appendChild(iframeContent);

    container.style.backgroundColor = "rgba(0,0,0,0.3)";
    btnBox.style.filter = "brightness(80%)";
    time = true;
  } else if (signUp === false) {
    if (time === true) {
      time = !time;
    }
    closeIfrme();
  }
}

//ifrmae 닫기 함수
//닫기 버튼을 누르거나
//회원가입을 다시 한 번 눌렀을 경우(signUp = true 일 때)실행
function closeIfrme() {
  time = false;
  signUp = false;
  iframeContent = null;

  iframeBox.classList.remove("page-visible");
  iframeBox.classList.add("page-hidden");
  container.style.backgroundColor = "rgba(0,0,0,0)";
  btnBox.style.filter = "brightness(100%)";
  stopIfrme();
}

//ifrmae 보여주는 함수
function showIframe() {
  bubbles.forEach((bubble) => {
    bubble.style.opacity = 1;
  });
  text2.style.animation = "";
  text3.style.animation = "";
  img1.style.animation = "";
  img2.style.animation = "";
  img3.style.animation = "";
  img4.style.animation = "";
  img5.style.animation = "";
  homePage.classList.remove("page-visible");
  homePage.classList.add("page-hidden");
  secondPage.classList.remove("page-visible");
  secondPage.classList.add("page-hidden");
  thirdPage.classList.remove("page-visible");
  thirdPage.classList.add("page-hidden");
  fourthPage.classList.remove("page-visible");
  fourthPage.classList.add("page-hidden");
}

//iframe에서 나갈 때 받은 순서에 따라 다음 화면 보여주는 함수
function stopIfrme() {
  bubbles.forEach((bubble) => {
    bubble.style.opacity = 0;
  });
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

init();
