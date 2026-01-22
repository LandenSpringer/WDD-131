const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 700) {
    nav.classList.remove("active");
  }
});
