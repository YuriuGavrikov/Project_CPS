import "../../node_modules/focus-visible/dist/focus-visible";
import "../scss/main.scss";
import "../index.html";
import "../js/swiper";

const helloText = document.querySelector(".hello__text");
const buttonShowMoreText = document.querySelector(".button__showMore_text");

buttonShowMoreText.addEventListener("click", () => {
  helloText.classList.toggle("hello__text_open");

  buttonShowMoreText.children[0].classList.toggle("rotate");

  helloText.classList.length === 2
    ? (buttonShowMoreText.children[1].innerHTML = "Свернуть")
    : (buttonShowMoreText.children[1].innerHTML = "Читать далее");
});

const containerInner = document.querySelector(".container__inner");

containerInner.addEventListener("click", (event) => {
  if (event.target.closest(".button__showMore")) {
    let btn = event.target.closest(".button__showMore");
    btn.previousElementSibling.classList.toggle("section__list_open");

    btn.firstElementChild.classList.toggle("rotate");
    btn.firstElementChild.classList.length === 1
      ? (btn.lastElementChild.innerHTML = "Свернуть")
      : (btn.lastElementChild.innerHTML = "Показать все");

    console.log(btn.firstElementChild.classList.length);
  }
});

// ----------------------------------------------------------------------------------------

const container = document.querySelector(".container");

const burger = document.querySelector("#burgerOpen");
const burgerClose = document.querySelector(".burger-close");
const burgerMenu = document.querySelector(".burgerMenu");
const burgerMenuList = document.querySelector(".burgerMenu__list");

const burgerMenuBlur = document.createElement("div");
burgerMenuBlur.classList.add("burgerMenu-blur");

burger.addEventListener("click", () => {
  burgerMenu.classList.toggle("burgerMenu-open");
  container.append(burgerMenuBlur);
});

burgerClose.addEventListener("click", () => {
  burgerMenu.classList.toggle("burgerMenu-open");
  burgerMenuBlur.remove();
});
burgerMenuBlur.addEventListener("click", () => {
  burgerMenu.classList.toggle("burgerMenu-open");
  burgerMenuBlur.remove();
});

burgerMenuList.addEventListener("click", (event) => {
  if (event.target.className.includes("burgerMenu__item")) {
    for (let child of burgerMenuList.children) {
      if (child.className.includes("burgerMenu__item-active"))
        child.classList.toggle("burgerMenu__item-active");
    }
    event.target.classList.toggle("burgerMenu__item-active");
  }
});
// -------------------------------------------------------------------------------------------
const feedbackMenu = document.querySelector(".feedbackMenu");
const feedbackMenuBtnClose = document.querySelector(".feedbackMenu__btn_close");
const feedbackMenuBtnOpen = document.querySelector(".feedbackMenu__btn_open");

const feedbackMenuBlur = document.createElement("div");
feedbackMenuBlur.classList.add("feedbackMenu-blur");

feedbackMenuBtnOpen.addEventListener("click", () => {
  feedbackMenu.classList.add("feedbackMenu-open");
  container.append(feedbackMenuBlur);
});
feedbackMenuBtnClose.addEventListener("click", () => {
  feedbackMenu.classList.toggle("feedbackMenu-open");
  feedbackMenuBlur.remove();
});
feedbackMenuBlur.addEventListener("click", () => {
  feedbackMenu.classList.toggle("feedbackMenu-open");
  feedbackMenuBlur.remove();
});
// -------------------------------------------------------------------------------------------
const orderCall = document.querySelector(".orderCall");
const orderCallBtnClose = document.querySelector(".orderCall__btn_close");
const orderCallBtnOpen = document.querySelector(".orderCall__btn_open");

const orderCallBlur = document.createElement("div");
orderCallBlur.classList.add("orderCall-blur");

orderCallBtnOpen.addEventListener("click", () => {
  orderCall.classList.add("orderCall-open");
  container.append(orderCallBlur);
});
orderCallBtnClose.addEventListener("click", () => {
  orderCall.classList.toggle("orderCall-open");
  orderCallBlur.remove();
});
orderCallBlur.addEventListener("click", () => {
  orderCall.classList.toggle("orderCall-open");
  orderCallBlur.remove();
});
