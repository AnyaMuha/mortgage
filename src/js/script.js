import "/src/sass/style.scss";

// burger
const burger = document.querySelector(".hero__burger");
const close = document.querySelector(".hero__menu-close");
const menu = document.querySelector(".hero__menu");
const overlay = document.querySelector(".hero__fill");
burger?.addEventListener("click", () => {
  menu?.classList.add("hero__menu_active");
  document.body.style.overflow = "hidden";
});
close?.addEventListener("click", () => {
  menu?.classList.remove("hero__menu_active");
  document.body.style.overflow = "";
});
overlay.addEventListener("click", () => {
  menu.classList.remove("active");
});
