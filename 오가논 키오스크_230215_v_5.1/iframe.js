import { Page } from "./page.js";

const page = new Page();

export class Iframe {
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

  make() {
    this.signUp = !this.signUp;
    if (this.signUp) {
      this.create();
    } else if (!this.signUp) {
      this.close();
    }
  }

  close() {
    this.signUp = false;
    this.iframeContent = null;
    this.iframeBox.classList.add("iframe-page-hidden");
    this.container.style.backgroundColor = "rgba(0,0,0,0)";
    this.btnBox.style.filter = "brightness(100%)";
  }

  create() {
    page.showIframe();
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
