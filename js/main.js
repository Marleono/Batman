const swiper = new Swiper('.main-slider', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.main-slider__arrow',
  },
});