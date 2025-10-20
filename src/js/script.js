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

const dots = document.querySelectorAll(".journey__dot");
const steps = document.querySelectorAll(".journey__step");

if (dots.length && steps.length) {
  // функция очистки активных классов
  const clearActive = () => {
    dots.forEach((dot) => dot.classList.remove("is-active"));
    steps.forEach((step) => step.classList.remove("is-current"));
  };

  // клик по шагу
  steps.forEach((step, index) => {
    step.addEventListener("click", () => {
      clearActive();
      dots[index].classList.add("is-active");
      step.classList.add("is-current");
    });
  });

  // клик по кружку
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      clearActive();
      dot.classList.add("is-active");
      steps[index].classList.add("is-current");
      steps[index].scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}
