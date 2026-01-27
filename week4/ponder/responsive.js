const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuBtn.classList.toggle("change");

  console.log("toggled menu button " + nav.classList);
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 700) {
    nav.classList.remove("active");
    menuBtn.classList.remove("change");
  }
}); 