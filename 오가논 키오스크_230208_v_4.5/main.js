"use strict";

//페이지 순서
let order = 1;

//페이지 전체
const container = document.querySelector(".container");
document.addEventListener("touchstart", () => {});

//페이지
const homePage = document.querySelector(".homepage");
const secondPage = document.querySelector(".second-page");
const thirdPage = document.querySelector(".third-page");
const fourthPage = document.querySelector(".fourth-page");
const iframePage = document.querySelector(".iframe-page");

//애니메이션 요소
const text1 = document.querySelector(".first-animation-down");
const btnBox = document.querySelector(".btn-box");
const texts = document.querySelectorAll(".text");
const img1 = document.querySelector(".third-1");
const img2 = document.querySelector(".third-2");
const img3 = document.querySelector(".fourth-1");
const img4 = document.querySelector(".fourth-2");
const img5 = document.querySelector(".fourth-3");
const fourthImg = document.querySelector(".fourth-img-box");
const bubbles = document.querySelectorAll(".bubble");
const buttons = document.querySelectorAll("button");

//배경음악
const bgSound = new Audio("./sound/bg.mp3");

//회원가입 상태 = false
//true -> 회원 가입 버튼 누를 경우 -> iframe, closed button 생성
let signUp = false;

//처음으로 상태 = false
//true -> 처음으로 버튼 누를 경우
let time = false;

//iframe
const iframeBox = document.querySelector(".iframe-page");
const iframe = document.querySelector(".iframe");
const footer = document.querySelector(".footer");

//닫기 버튼 이벤트 리스너
document.addEventListener("touchstart", (e) => {
  if (e.target.className === "close-btn") {
    setTimeout(() => {
      signUp = false;
      closeIfrme();
    }, 500);
  }
});

//팝업창이 꺼진 경우 터치 이벤트 시 배경화면 다시 밝게
container.addEventListener("touchstart", (e) => {
  if (signUp === false) {
    iframeBox.classList.add("page-hidden");
    container.style.backgroundColor = "rgba(0,0,0,0)";
    btnBox.style.filter = "brightness(100%)";
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

//시작 함수
//애니메이션, 두 번째 페이지로 이동
function init() {
  animation(text1, "fadeInDown", 1);
  gofirstPage(false);
}

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
  if (move) {
    if (!time && order === 2) {
      resetPage(homePage);
      resetPage(thirdPage);
      resetPage(fourthPage);
      resetAnimation(text1);
      bubbles.forEach((bubble) => {
        bubble.style.opacity = 0;
      });
      goNextPage(homePage, secondPage);
      order = 3;
      goThirdPage();
      texts.forEach((text) => {
        animation(text, "fadeInleft", 1);
      });
    }
  } else {
    if (!time && order === 2) {
      resetPage(homePage);
      resetPage(thirdPage);
      resetPage(fourthPage);
      resetAnimation(text1);
      bubbles.forEach((bubble) => {
        bubble.style.opacity = 0;
      });
      goNextPage(homePage, secondPage);
      order = 3;
      setTimeout(() => {
        goThirdPage();
      }, 7000);
      texts.forEach((text) => {
        animation(text, "fadeInleft", 1);
      });
    }
  }
}

//세번째 페이지로 이동 함수
//7초 딜레이
function goThirdPage(move) {
  if (move) {
    if (!time && order === 3) {
      resetPage(homePage);
      resetPage(secondPage);
      resetPage(fourthPage);
      texts.forEach((text) => {
        resetAnimation(text);
      });
      goNextPage(secondPage, thirdPage);
      animation(img1, "fadeInRight", 1);
      animation(img2, "fadeInRight", 2);
      order = 4;
      gofourthPage();
    }
  } else {
    if (!time && order === 3) {
      resetPage(homePage);
      resetPage(secondPage);
      resetPage(fourthPage);
      texts.forEach((text) => {
        resetAnimation(text);
      });
      goNextPage(secondPage, thirdPage);
      animation(img1, "fadeInRight", 1);
      animation(img2, "fadeInRight", 2);
      order = 4;
      setTimeout(() => {
        gofourthPage();
      }, 7000);
    }
  }
}

//네번째 페이지로 이동 함수
//7초 딜레이
function gofourthPage(move) {
  if (move) {
    if (!time && order === 4) {
      resetPage(homePage);
      resetPage(secondPage);
      resetPage(thirdPage);
      resetAnimation(img1);
      resetAnimation(img2);
      goNextPage(thirdPage, fourthPage);
      animation(img3, "fadeInUp", 1);
      animation(img4, "fadeInUp", 2);
      animation(img5, "fadeInUp", 3);
      order = 1;
      gofirstPage(false);
    }
  } else {
    if (!time && order === 4) {
      resetPage(homePage);
      resetPage(secondPage);
      resetPage(thirdPage);
      resetAnimation(img1);
      resetAnimation(img2);
      goNextPage(thirdPage, fourthPage);
      animation(img3, "fadeInUp", 1);
      animation(img4, "fadeInUp", 2);
      animation(img5, "fadeInUp", 3);
      order = 1;
      setTimeout(() => {
        gofirstPage(false);
      }, 7000);
    }
  }
}

//첫번째 페이지로 이동 함수
//true -> 처음으로 버튼 이동
//false -> 자동으로 이동
async function gofirstPage(homebtn) {
  if (time === false) {
    setTimeout(() => {
      time = false;
    }, 500);
  }
  if (homebtn === true && !time && order === 1) {
    bubbles.forEach((bubble) => {
      bubble.style.opacity = 1;
    });
    animation(text1, "fadeInDown", 1);
    texts.forEach((text) => {
      resetAnimation(text);
    });
    resetAnimation(img1);
    resetAnimation(img2);
    resetAnimation(img3);
    resetAnimation(img4);
    resetAnimation(img5);
    resetPage(secondPage);
    resetPage(thirdPage);
    resetPage(fourthPage);
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
    animation(text1, "fadeInDown", 1);
    resetAnimation(img3);
    resetAnimation(img4);
    resetAnimation(img5);
    resetPage(secondPage);
    resetPage(thirdPage);
    resetPage(fourthPage);
    goNextPage(fourthPage, homePage);
    setTimeout(() => {
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

//page reset함수
function resetPage(page) {
  page.classList.remove("page-visible");
  page.classList.add("page-hidden");
}

//ifrmae 닫기 함수
//닫기 버튼을 누르거나
//회원가입을 다시 한 번 눌렀을 경우(signUp = true 일 때)실행
function closeIfrme() {
  time = false;
  iframe.src = iframe.src;
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
  texts.forEach((text) => {
    resetAnimation(text);
  });
  resetAnimation(img1);
  resetAnimation(img2);
  resetAnimation(img3);
  resetAnimation(img4);
  resetAnimation(img5);
  resetPage(homePage);
  resetPage(secondPage);
  resetPage(thirdPage);
  resetPage(fourthPage);
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
