import "/src/sass/style.scss";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

import "/src/sass/style.scss";

// burger
// Получаем элементы
const burger = document.querySelector(".header__burger");
const close = document.querySelector(".header__menu-close");
const menu = document.querySelector(".header__menu");
const overlay = document.querySelector(".header__fill");

// Открыть
burger?.addEventListener("click", () => {
  menu?.classList.add("header__menu_active");
  overlay?.classList.add("is-active");
  document.body.style.overflow = "hidden"; // запрет скролла
});

// Функция закрытия (одна на все случаи)
const closeMenu = () => {
  menu?.classList.remove("header__menu_active");
  overlay?.classList.remove("is-active");
  document.body.style.overflow = ""; // ВОЗВРАТ скролла
};

// Закрыть: крестик
close?.addEventListener("click", closeMenu);

// Закрыть: клик по фону
overlay?.addEventListener("click", closeMenu);

// Закрыть: Esc
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});
// Закрыть меню при клике на ссылку
const menuLinks = document.querySelectorAll(".header__menu-link");

menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Проверяем: если это ссылка внутри страницы (начинается с #)
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      closeMenu(); // закрываем меню
    }
  });
});

// шаги
const dots = document.querySelectorAll(".journey__dot");
const steps = document.querySelectorAll(".journey__step");
if (dots.length && steps.length) {
  const clearActive = () => {
    dots.forEach((dot) => dot.classList.remove("is-active"));
    steps.forEach((step) => step.classList.remove("is-current"));
  };
  steps.forEach((step, index) => {
    step.addEventListener("click", () => {
      clearActive();
      dots[index].classList.add("is-active");
      step.classList.add("is-current");
    });
  });
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      clearActive();
      dot.classList.add("is-active");
      steps[index].classList.add("is-current");
      steps[index].scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

//  Swiper
const swiper = new Swiper(".reviews__swiper", {
  slidesPerView: "auto",
  spaceBetween: 32, //
  navigation: { nextEl: ".reviews__next", prevEl: ".reviews__prev" },
  pagination: { el: ".reviews__pagination", clickable: true },
  roundLengths: true,
  watchOverflow: true,
  loop: true,
  breakpoints: {
    0: {
      spaceBetween: 10,
    },
    426: {
      spaceBetween: 32,
    },
  },
});

// Элементы счётчика
const tens = document.querySelector(".reviews__counter-tens");
const ones = document.querySelector(".reviews__counter-ones");
const total = document.querySelector(".reviews__counter-total");
const totalSlides = document.querySelectorAll(
  ".reviews__swiper .swiper-slide:not(.swiper-slide-duplicate)"
).length;
if (total) total.textContent = String(totalSlides).padStart(2, "0");
function updateCounter() {
  const current = (swiper.realIndex ?? 0) + 1;
  const s = String(current).padStart(2, "0");
  if (tens) tens.textContent = s[0];
  if (ones) ones.textContent = s[1];
}
swiper.on("init", updateCounter);
swiper.on("slideChange", updateCounter);
if (swiper.initialized) updateCounter();

document.addEventListener("DOMContentLoaded", () => {
  const cols = document.querySelectorAll(".footer__col");

  const isMobile = () => window.innerWidth <= 480;

  const reset = () => cols.forEach((col) => col.classList.remove("is-open"));

  cols.forEach((col) => {
    const title = col.querySelector(".footer__title");
    if (!title) return;

    title.addEventListener("click", () => {
      if (isMobile()) col.classList.toggle("is-open");
    });
  });

  window.addEventListener("resize", () => {
    if (!isMobile()) reset();
  });
});
