const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const nav = document.querySelector(".navbar");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
  nav.classList.toggle("active");
});

let logo = document.getElementById("navbar__logo");
let situacao = "desactive";

function trocar() {
  if (situacao == "desactive") {
    logo.src = "/images/logo2.png";
    situacao = "active";
  } else if (situacao == "active") {
    logo.src = "/images/logo.png";
    situacao = "desactive";
  }
}


  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      767: {
        slidesPerView: 1,
        setWrapperSize: true
      }
    }
  })
