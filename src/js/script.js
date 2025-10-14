import "/src/sass/style.scss";

// burger
const burger = document.querySelector(".header__burger");
const close = document.querySelector(".header__menu-close");
const menu = document.querySelector(".header__menu");
const overlay = document.querySelector(".header__fill");
burger?.addEventListener("click", () => {
  menu?.classList.add("header__menu_active");
  document.body.style.overflow = "hidden";
});
close?.addEventListener("click", () => {
  menu?.classList.remove("header__menu_active");
  document.body.style.overflow = "";
});
overlay.addEventListener("click", () => {
  menu.classList.remove("header__menu_active");
});
