const navbar = document.querySelector("#navbar-responsive");
const btnMenu = document.querySelector("#menu-btn");
const title = document.querySelector("#title");
const toggleNavbar = () => {
  navbar.classList.toggle("open");
};
btnMenu.addEventListener("click", toggleNavbar);
const menuX = () => {
  btnMenu.classList.toggle("open");
};
btnMenu.addEventListener("click", menuX);
const titleOpen = () => {
  title.classList.toggle("open");
};
title.addEventListener("click", titleOpen);
document.addEventListener("scroll", () => {
  if (window.scrollY >= 70) {
    navbar.classList.add("show");
  } else {
    navbar.classList.remove("show");
  }
});

document.addEventListener("scroll", () => {
  if (window.scrollY >= 44) {
    document.querySelector("#bottom-header").classList.add("shrink");
  } else {
    document.querySelector("#bottom-header").classList.remove("shrink");
  }
});

import { PRODUCTS } from "./server.js";

const cards = document.querySelector(".cards");

let fragment = document.createDocumentFragment();
PRODUCTS.forEach((el, i) => {
  let div = document.createElement("div");
  div.innerHTML = `
              <div class="img">
                <div class="sale">
                  <div class="galichka">
                    <img src="./images/galichla.svg" alt="Galichka" />
                    <span>Нет в наличии</span>
                  </div>
                  <button>SALE</button>
                  <div class="sovga">
                    <img src="./images/padarka.svg" alt="Sovg'a" />
                    <span>Подарок</span>
                  </div>
                </div>
                <img src="${el.thumbnail}" alt="" />
              </div>
              <div class="reyting">
                <img src="./images/рейтинг.svg" alt="reyting" />
                <span>(12) отзывов</span>
              </div>
              <h4 title="${el.description}"  class="heading-4">${el.description}</h4>
              <div class="price">
                <h4>${el.price}$</h4>
                <span>${el.discountPercentage}$</span>
              </div> 
  `;
  div.classList.add("card");
  fragment.appendChild(div);
});
cards.appendChild(fragment);

const backtop = document.querySelector(".backtop");

document.addEventListener("scroll", () => {
  if (window.scrollY >= 500) {
    backtop.style.bottom = "40px";
  } else {
    backtop.style.bottom = "-40px";
  }
});
