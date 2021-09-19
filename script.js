"use strict"

const navButton = document.querySelector('.page-header__nav-button');
const menu = document.querySelector('.page-header__nav');

let isOpenedMenu = false;

navButton.addEventListener("click", () => {
  if (isOpenedMenu) {
    navButton.classList.remove("page-header__nav-button--active");
    menu.classList.add("page-header__nav--closed");
    isOpenedMenu = false;
  } else {
    navButton.classList.add("page-header__nav-button--active");
    menu.classList.remove("page-header__nav--closed");
    isOpenedMenu = true;
  }
});
