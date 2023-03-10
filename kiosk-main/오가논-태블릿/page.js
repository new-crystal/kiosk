export class Page {
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
