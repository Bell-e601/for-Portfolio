var mySwiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    mousewheel: {},
});
var mySwiper = new Swiper('.swiper-container-second', {
  navigation: {
      nextEl: '.swiper-button-next-2',
      prevEl: '.swiper-button-prev-2',
      disabledClass: 'DISABLED',
  },  
  mousewheel: {},
});
var mySwiper = new Swiper('.swiper-container-third', {
  navigation: {
      nextEl: '.swiper-button-next-3',
      prevEl: '.swiper-button-prev-3',
      disabledClass: 'DISABLED-2',
  },
  mousewheel: {},
});