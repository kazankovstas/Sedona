const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".main-nav__toggle");
const navList = document.querySelector(".main-nav__list");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

navToggle.addEventListener("click", function () {
  navList.classList.toggle("main-nav__list--toggle");
});
