// // Progress Bar
// const progressBar = document.querySelector(
//   '.circular__progress',
// );
// const circleValue = document.querySelector(
//   '.circular__value',
// );

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

/* Menu button 1 */

// const menuBtn = document.querySelector('.menu-btn');
// const hamburger = document.querySelector(
//   '.menu-btn__burger',
// );
// let menuOpen = false;

// menuBtn.addEventListener('click', toggleMenu);

// function toggleMenu() {
//   if (!menuOpen) {
//     hamburger.classList.add('open');
//     menuOpen = true;
//   } else {
//     hamburger.classList.remove('open');
//     menuOpen = false;
//   }
// }

/* Menu Button 2 */

// const menuBtn = document.querySelector('.menu-btn');
// let menuOpen = false;

// menuBtn.addEventListener('click', () => {
//   if (!menuOpen) {
//     menuBtn.classList.add('open');
//     menuOpen = true;
//   } else {
//     menuBtn.classList.remove('open');
//     menuOpen = false;
//   }
// });

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
