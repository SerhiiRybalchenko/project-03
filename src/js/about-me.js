import Accordion from 'accordion-js';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

new Accordion('.accordion-container-about-me', {
  openOnInit: [0],
});




let sviperHtml = '.swiper-about-me';
let swiperButtonNext = '.long-arrow-right';

if (screen.width < 768) {
  let swiper = new Swiper(sviperHtml, {
    navigation: {
      nextEl: swiperButtonNext,
    },
    edgeSwipeThreshold: 40,
    loop: true,
    slidesPerView: 2,
    mousewheel: true,
    keyboard: true,
    openOnInit: [0],
  });
} else if (screen.width < 1400) {
  let swiper = new Swiper(sviperHtml, {
    navigation: {
      nextEl: swiperButtonNext,
    },
    loop: true,
    slidesPerView: 3,
    mousewheel: true,
    keyboard: true,
    openOnInit: [0],
  });
} else {
  let swiper = new Swiper(sviperHtml, {
    navigation: {
      nextEl: swiperButtonNext,
    },
    loop: true,
    slidesPerView: 6,
    mousewheel: true,
    keyboard: true,
      openOnInit:[0],
  });
}

window.onresize = function () {

    if (screen.width < 768) {
      let swiper = new Swiper(sviperHtml, {
        navigation: {
          nextEl: swiperButtonNext,
        },
        loop: true,
        slidesPerView: 2,
        mousewheel: true,
        keyboard: true,
      });
    } else if (screen.width < 1400) {
      let swiper = new Swiper(sviperHtml, {
        navigation: {
          nextEl: swiperButtonNext,
        },
        loop: true,
        slidesPerView: 3,
        mousewheel: true,
        keyboard: true,
      });

    } else {
      let swiper = new Swiper(sviperHtml, {
        navigation: {
          nextEl: swiperButtonNext,
        },
        loop: true,
        slidesPerView: 6,
        mousewheel: true,
        keyboard: true,
      });
  }
  
};
