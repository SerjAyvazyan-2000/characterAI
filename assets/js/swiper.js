function initSwiper(selector, slides = 3.2, customBreakpoints = {}) {
  const baseBreakpoints = {
    320: { slidesPerView: 1 },
    450: { slidesPerView: 1.3 },
    576: { slidesPerView: 1.5 },
    992: { slidesPerView: 2 },
    1060: { slidesPerView: 2.2 },
    1200: { slidesPerView: 2.6 },
    1380: { slidesPerView: slides },
  };

  return new Swiper(selector, {
    slidesPerView: slides,
    spaceBetween: 12,
    loop: true,
    speed: 600,
    slideToClickedSlide: true,
    observer: true,
    observeParents: true,

    breakpoints: { 
      ...baseBreakpoints, 
      ...customBreakpoints 
    },
  });
}

initSwiper(".f-for-you-swiper", 3.2);
initSwiper(".f-scenarios-swiper", 4.3, {
  320: { slidesPerView: 1.3 }, 
  450: { slidesPerView: 1.5 }, 
  576: { slidesPerView: 1.6 }, 
  992: { slidesPerView: 2 },
  1200: { slidesPerView: 3 },
  1380: { slidesPerView: 4.3 },
});
initSwiper(".f-recommended-swiper", 3.2);
initSwiper(".f-popular-swiper", 3.2);
initSwiper(".f-trends-swiper", 3.2);
initSwiper(".f-vote-swiper", 3.4, {
  320: { slidesPerView: 1.1 }, 
  450: { slidesPerView: 1.5 }, 
  576: { slidesPerView: 1.6 }, 
  992: { slidesPerView: 2 },
  1200: { slidesPerView: 3 },
  1380: { slidesPerView: 3.4 },
});

const heroSwiper = new Swiper(".d-hero-swiper", {
  slidesPerView: 8,
  spaceBetween: 11,
  speed: 400,
  watchOverflow: true,
  resizeObserver: true,
  updateOnWindowResize: true,
  roundLengths: true,
  loop: true,

  pagination: {
    el: ".d-hero-paginatiion",
    clickable: true,
  },

  navigation: {
    nextEl: ".d-hero-swiper-next",
    prevEl: ".d-hero-swiper-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 6,
      grid: {
        rows: 2,
        fill: "row",
      },
    },
    576: { slidesPerView: 4 },
    800: { slidesPerView: 4 },
    992: { slidesPerView: 6 },
    1200: { slidesPerView: 8 },
  },
});
