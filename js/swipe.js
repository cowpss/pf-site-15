'use strict';

{
  new Glide('.glide', {
    loop: true,
    startAt: 0,
    perView: 4,
    hoverpause: true,
    autoplay: 3000,
    disableOnINteraction: false,
    gap: 20,
    fixedWidth: "100vw",
    type: 'carousel',
    waitForTransition: false,
    breakpoints: {
      768: {
        perView: 3,
        gap: 16,
      },

      375: {
        perView: 1,
        gap: 8,
      },
    },
  }).mount()
}