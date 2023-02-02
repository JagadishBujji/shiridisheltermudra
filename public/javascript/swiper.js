var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: { releaseOnEdges: true },
  // mousewheelControl: true,
  slidesPerView: 1,
  parallax: true,
  observer: true,
  observeParents: true,
  speed: 1200,
  // freeMode: true,
  // freeModeSticky: true
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true
  }
});

console.log('swiper-js: ', swiper);