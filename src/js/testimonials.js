new Swiper('.testimonials-swiper-container', {
  direction: 'horizontal',
  autoHeight: true,
  loop: true,
  spaceBetween: 32,
  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 26,
    },
  },
});
