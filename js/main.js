const swiper = new Swiper('.main-slider', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.main-slider__arrow',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    }
  }
});

let burger = document.querySelector('.menu-burger');
let closeMenu = document.querySelector('.header__menu-close');
let menuMobile = document.querySelector('.header');

burger.addEventListener('click', () => {
  menuMobile.style.display = 'block'

});

closeMenu.addEventListener('click', () => {
  menuMobile.style.display = 'none'

});

const WINDOW_MODAL = document.querySelector('.modal');
const BUTTON_MODAL = document.querySelector('.main__button-play');

BUTTON_MODAL.addEventListener('click', (e) => {
  WINDOW_MODAL.classList.add('active');

});

WINDOW_MODAL.addEventListener('click', (e) => {
  const isModal = e.target.closest('.modal__inner');

  if (!isModal) {
    WINDOW_MODAL.classList.remove('active');
  }

});
