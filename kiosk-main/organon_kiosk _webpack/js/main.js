"use strict";
class Page {
  order = 1;

  //페이지
  homePage = document.querySelector(".homepage");
  secondPage = document.querySelector(".second-page");
  thirdPage = document.querySelector(".third-page");
  fourthPage = document.querySelector(".fourth-page");
  iframePage = document.querySelector(".iframe-page");

  //애니메이션 요소
  text1 = document.querySelector(".first-animation-down");
  btnBox = document.querySelector(".btn-box");
  text2 = document.querySelector(".text-1");
  text3 = document.querySelector(".text-2");
  img1 = document.querySelector(".third-1");
  img2 = document.querySelector(".third-2");
  img3 = document.querySelector(".fourth-1");
  img4 = document.querySelector(".fourth-2");
  img5 = document.querySelector(".fourth-3");
  fourthImg = document.querySelector(".fourth-img-box");
  bubbles = document.querySelectorAll(".bubble");

  //첫번째 페이지 작동 함수
  gofirst() {
    //다른 페이지 숨기기
    this.secondPage.classList.add("page-hidden");
    this.thirdPage.classList.add("page-hidden");
    this.fourthPage.classList.add("page-hidden");

    // 애니메이션 초기화
    this.text2.style.animation = "";
    this.text3.style.animation = "";
    this.img1.style.animation = "";
    this.img2.style.animation = "";
    this.img3.style.animation = "";
    this.img4.style.animation = "";
    this.img5.style.animation = "";

    //페이지 보이기
    this.homePage.classList.remove("page-hidden");

    //페이지 애니메이션
    this.bubbles.forEach((bubble) => {
      bubble.style.opacity = 1;
    });
    this.text1.style.animation = `fadeInDown 1s`;
  }

  //두번째 페이지 작동 함수
  goSecond() {
    //다른 페이지 숨기기
    this.homePage.classList.add("page-hidden");
    this.thirdPage.classList.add("page-hidden");
    this.fourthPage.classList.add("page-hidden");

    //전 페이지 애니메이션 초기화
    this.text1.style.animation = "";
    this.bubbles.forEach((bubble) => {
      bubble.style.opacity = 0;
    });

    //페이지 보이기
    this.secondPage.classList.remove("page-hidden");

    //페이지 애니메이션
    this.text2.style.animation = `fadeInleft 1s`;
    this.text3.style.animation = `fadeInleft 1.5s`;
  }

  //세번째 페이지 작동 함수
  goThird() {
    //다른 페이지 숨기기
    this.homePage.classList.add("page-hidden");
    this.secondPage.classList.add("page-hidden");
    this.fourthPage.classList.add("page-hidden");

    //전 페이지 애니메이션 초기화
    this.text2.style.animation = "";
    this.text3.style.animation = "";

    //페이지 보이기
    this.thirdPage.classList.remove("page-hidden");

    //페이지 애니메이션
    this.img1.style.animation = `fadeInRight 1s`;
    this.img2.style.animation = `fadeInRight 2s`;
  }

  //네번째 페이지 작동 함수
  gofourth() {
    //다른 페이지 숨기기
    this.homePage.classList.add("page-hidden");
    this.secondPage.classList.add("page-hidden");
    this.thirdPage.classList.add("page-hidden");

    //전 페이지 애니메이션 초기화
    this.img1.style.animation = "";
    this.img2.style.animation = "";

    //페이지 보이기
    this.fourthPage.classList.remove("page-hidden");

    //페이지 애니메이션
    this.img3.style.animation = `fadeInUp 1s`;
    this.img4.style.animation = `fadeInUp 2s`;
    this.img5.style.animation = `fadeInUp 3s`;
  }

  //Iframe 보여주는 함수
  showIframe() {
    //비눗방울
    this.bubbles.forEach((bubble) => {
      bubble.style.opacity = 1;
    });
    //모든 애니메이션 초기화
    this.text1.style.animation = "";
    this.text2.style.animation = "";
    this.text3.style.animation = "";
    this.img1.style.animation = "";
    this.img2.style.animation = "";
    this.img3.style.animation = "";
    this.img4.style.animation = "";
    this.img5.style.animation = "";

    //모든 페이지 숨기기
    this.homePage.classList.add("page-hidden");
    this.secondPage.classList.add("page-hidden");
    this.thirdPage.classList.add("page-hidden");
    this.fourthPage.classList.add("page-hidden");
  }
}

class Iframe {
  //회원가입 상태 = false
  //true -> 회원 가입 버튼 누를 경우 -> iframe, closed button 생성
  signUp = false;

  //페이지 전체
  container = document.querySelector(".container");

  //iframe
  iframeBox = document.querySelector(".iframe-page");
  btnBox = document.querySelector(".btn-box");
  iframeContent = null;

  signUpBtn = document.querySelector(".sign-up");
  closeBtn = document.querySelector(".close-btn");

  close() {
    this.signUp = false;
    this.iframeContent = null;
    this.iframeBox.classList.add("iframe-page-hidden");
    this.container.style.backgroundColor = "rgba(0,0,0,0)";
    this.btnBox.style.filter = "brightness(100%)";
  }

  create() {
    this.signUp = true;
    this.iframeBox.classList.remove("iframe-page-hidden");
    this.iframeContent = document.createElement("iframe");
    this.iframeContent.classList.add("iframe");
    this.iframeContent.src =
      "https://organonpro.com/kr-kr/member-option/?screenToRender=traditionalRegistration";
    this.iframeContent.width = 900;
    this.iframeContent.height = 1200;
    this.iframeBox.appendChild(this.iframeContent);

    this.container.style.backgroundColor = "rgba(0,0,0,0.3)";
    this.btnBox.style.filter = "brightness(80%)";
  }
}

const page = new Page();
const iframe = new Iframe();

//clearInterval을 하기 위한 setInterval Id
let intervalId = null;

//button
const home = document.querySelector(".home");
const signUpBtn = document.querySelector(".sign-up");
const closeBtn = document.querySelector(".close-btn");

//배경음악 디버깅 함수
window.onload = function () {
  //배경음악
  const bgSound = new Audio("./sound/bg.mp3");
  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then(() => {
      const AudioContext = window.AudioContext;
      const audioContext = new AudioContext();
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

startInterval();
interval();
