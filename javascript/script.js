let navLink = document.querySelector("nav-btn");
let menuBar = document.querySelector("#menu-bar");
let navbar = document.querySelector(".nav");
let header = document.querySelector("header");

menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("bx-x");
  navbar.classList.toggle("active-btn");
});
