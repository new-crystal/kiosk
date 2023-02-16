export class Page {
  constructor() {
    this.order = 1;
    this.homePage = document.querySelector(".homepage");
    this.secondPage = document.querySelector(".second-page");
    this.thirdPage = document.querySelector(".third-page");
    this.fourthPage = document.querySelector(".fourth-page");
    this.iframePage = document.querySelector(".iframe-page");

    this.text1 = document.querySelector(".first-animation-down");
    this.btnBox = document.querySelector(".btn-box");
    this.text2 = document.querySelector(".text-1");
    this.text3 = document.querySelector(".text-2");
    this.img1 = document.querySelector(".third-1");
    this.img2 = document.querySelector(".third-2");
    this.img3 = document.querySelector(".fourth-1");
    this.img4 = document.querySelector(".fourth-2");
    this.img5 = document.querySelector(".fourth-3");
    this.fourthImg = document.querySelector(".fourth-img-box");
    this.bubbles = document.querySelectorAll(".bubble");
  }

  gofirst() {
    this.bubbles.forEach((bubble) => {
      bubble.style.opacity = 1;
    });
    this.text1.style.animation = `fadeInDown 1s`;
    this.text2.style.animation = "";
    this.text3.style.animation = "";
    this.img1.style.animation = "";
    this.img2.style.animation = "";
    this.img3.style.animation = "";
    this.img4.style.animation = "";
    this.img5.style.animation = "";

    this.secondPage.classList.add("page-hidden");
    this.thirdPage.classList.add("page-hidden");
    this.fourthPage.classList.add("page-hidden");
    this.homePage.classList.remove("page-hidden");
  }
  goSecond() {
    this.homePage.classList.add("page-hidden");
    this.thirdPage.classList.add("page-hidden");
    this.fourthPage.classList.add("page-hidden");
    this.text1.style.animation = "";
    this.bubbles.forEach((bubble) => {
      bubble.style.opacity = 0;
    });

    this.secondPage.classList.remove("page-hidden");
    this.text2.style.animation = `fadeInleft 1s`;
    this.text3.style.animation = `fadeInleft 1.5s`;
  }

  goThird() {
    this.homePage.classList.add("page-hidden");
    this.secondPage.classList.add("page-hidden");
    this.fourthPage.classList.add("page-hidden");
    this.text2.style.animation = "";
    this.text3.style.animation = "";

    this.thirdPage.classList.remove("page-hidden");
    this.img1.style.animation = `fadeInRight 1s`;
    this.img2.style.animation = `fadeInRight 2s`;
  }

  gofourth() {
    this.homePage.classList.add("page-hidden");
    this.secondPage.classList.add("page-hidden");
    this.thirdPage.classList.add("page-hidden");
    this.img1.style.animation = "";
    this.img2.style.animation = "";

    this.fourthPage.classList.remove("page-hidden");

    this.img3.style.animation = `fadeInUp 1s`;
    this.img4.style.animation = `fadeInUp 2s`;
    this.img5.style.animation = `fadeInUp 3s`;
  }

  showIframe() {
    this.bubbles.forEach((bubble) => {
      bubble.style.opacity = 1;
    });
    this.text1.style.animation = "";
    this.text2.style.animation = "";
    this.text3.style.animation = "";
    this.img1.style.animation = "";
    this.img2.style.animation = "";
    this.img3.style.animation = "";
    this.img4.style.animation = "";
    this.img5.style.animation = "";
    this.homePage.classList.add("page-hidden");
    this.secondPage.classList.add("page-hidden");
    this.thirdPage.classList.add("page-hidden");
    this.fourthPage.classList.add("page-hidden");
  }
}
