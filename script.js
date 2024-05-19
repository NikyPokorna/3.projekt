let menuIcon = document.querySelector(".menu-icon");
let menuList = document.querySelector("nav");
let hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-circle-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-circle-xmark");
    menuList.style.display = "none";
  }
});
const formular = document.querySelector("form");
const fullName = document.querySelector(".fullName");
const telefonNumber = document.querySelector(".telefonn-number");
const email = document.querySelector(".email");
const destination = document.querySelector(".destination");
const heslo1 = document.querySelector(".heslo1");
const heslo2 = document.querySelector(".heslo2");

const notName = document.querySelector(".notificationName");
const notEmail = document.querySelector(".notificationEmail");
const notDestination = document.querySelector(".notificationDestination");
const notHeslo1 = document.querySelector(".notificationHeslo1");
const notHeslo2 = document.querySelector(".notificationHeslo2");

formular.addEventListener("submit", (event) => {
  event.preventDefault();

  notName.style.display = fullName.value === "" ? "block" : "none";

  notEmail.style.display = email.value === "" ? "block" : "none";

  notDestination.style.display = destination.value === "" ? "block" : "none";
});

let form = document.addEventListener("submit", function (event) {
  let heslo1 = document.querySelector(".heslo1").value;
  let heslo2 = document.querySelector(".heslo2").value;
  let notificationHesloHlaska = document.querySelector(
    ".notificationHesloHlaska"
  );

  if (heslo1 !== heslo2) {
    notificationHesloHlaska.style.display = "block";
    event.preventDefault();
  } else {
    notificationHesloHlaska.style.display = "none";
  }
});

const buttonLight = document.querySelector(".light");
const buttonDark = document.querySelector(".dark");

const footer = document.querySelector("footer");
const header = document.querySelector("header");
const body = document.querySelector("body");
const sections = document.querySelectorAll("section");
const adresa = document.querySelector(".adresa");
const footerImg = document.querySelector(".footer-obrazek");

buttonLight.addEventListener("click", () => {
  header.style.backgroundColor = "";
  header.style.color = "";
  body.style.color = "";
  sections.forEach((section) => {
    section.style.backgroundColor = "";
    section.style.borderBottom = "";
  });
  footer.style.color = "";
  footer.style.backgroundColor = "";
});

buttonDark.addEventListener("click", () => {
  header.style.backgroundColor = "black";
  header.style.color = "white";
  body.style.color = "white";
  sections.forEach((section) => {
    section.style.backgroundColor = "black";
    section.style.borderBottom = "2px solid #b7b0b0";
  });
  adresa.style.borderBottom = "none";
  footerImg.style.borderBottom = "none";
  footer.style.color = "white";
  footer.style.backgroundColor = "black";
});
