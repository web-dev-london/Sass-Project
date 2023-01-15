// // Progress Bar
// const progressBar = document.querySelector(
//   '.circular__progress',
// );
// const circleValue = document.querySelector(
//   '.circular__value',
// );

// const { default: Swiper } = require('swiper'); /* Fixme:  Find out and possibly remove  it  */

// let progressValue = 0;
// let progressEndValue = 95;
// let speed = 175;

// let progress = setInterval(() => {
//   progressValue++;
//   circleValue.textContent = `${progressValue}%`;
//   progressBar.style.background = `conic-gradient(
//     #0daa41 ${progressValue * 3.6}deg,
//     #cde0db ${progressValue * 3.6}deg
//   )`;
//   if (progressValue == progressEndValue) {
//     clearInterval(progress);
//   }
// }, speed);

/* Menu Button  */

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav__list');
const navItems = Array.from(
  document.querySelectorAll('.nav__item'),
);

let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    nav.classList.add('open');
    navList.classList.add('open');
    navItems.forEach((item) => {
      return item.classList.add('open');
    });

    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    nav.classList.remove('open');
    navList.classList.remove('open');
    navItems.forEach((item) => {
      return item.classList.remove('open');
    });
    menuOpen = false;
  }
});

/* Footer Collapsible */

const collapse = Array.from(
  document.querySelectorAll('.footer__header--col'),
);

collapse.forEach((items) => {
  items.addEventListener('click', function () {
    this.classList.toggle('active');
  });
});

// const acc = document.querySelector('.acc');
// const content = document.querySelector('.content');

// acc.onclick = function () {
//   content.classList.toggle('active');
// };
