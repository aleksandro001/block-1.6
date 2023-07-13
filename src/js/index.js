
import 'swiper/swiper.scss';
import 'swiper/modules/pagination.scss';
import '../scss/style.scss';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';



console.log('Works!')

let active = document.querySelector(".burger__toggle");
let open = document.querySelector(".burger");
let clock = document.querySelector(".burger__button-cross");
let block = document.querySelector(".wrap");

active.addEventListener("click", function () {
  open.classList.toggle("active");
  block.classList.toggle("block");
  console.log('go')
});
clock.addEventListener("click", function(){
  open.classList.toggle("active");
  block.classList.toggle("block");
})

//===================================
let btnExpand = document.querySelector(".swiper__show");
let sliderIcons = document.querySelector(".swiper-wrapper");

btnExpand.addEventListener("click", function () {
  sliderIcons.classList.toggle("click");
  this.classList.toggle("click");

  if (this.classList.contains("click")) {
    this.textContent = "Скрыть";
  } else {
    this.textContent = "Показать все";
  }
});

window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width: 768px)").matches) {
    sliderIcons.style.transform = "";
    swiper.disable();
  }else{
    swiper.enable();
  }
});
//===================================

const swiper = new Swiper(".swiper", {
  // Optional parameters
  spaceBetween: 10,
  direction: "horizontal",
  loop: true,
  width: 720,
  slidesPerView: 3,
  modules: [Pagination],

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const width = window.innerWidth
if (width >= 768){
  swiper.disable();
}