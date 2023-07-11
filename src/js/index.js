import '../scss/style.scss'

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