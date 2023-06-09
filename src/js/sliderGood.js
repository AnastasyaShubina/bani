// import Swiper, { Navigation, Pagination } from 'swiper';
// import 'swiper/css/bundle';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

export const swiperGood = () => {
  // const swiper = new Swiper(".swiperGood", {
  //   loop: true,
  //   spaceBetween: 10,
  //   slidesPerView: 3,
  //   direction: "vertical",
  //   freeMode: true,
  //   watchSlidesProgress: true,
  // });
  // new Swiper(".swiperGood2", {
  //   modules: [Navigation, Pagination],
  //   loop: true,
  //   spaceBetween: 10,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   thumbs: {
  //     swiper: swiper,
  //   },
  // });

  var swiper = new Swiper(".swiperGood", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    direction: "vertical",
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".swiperGood2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

}