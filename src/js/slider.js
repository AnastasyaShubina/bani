import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const swiperSlider = () => {
    new Swiper('.swiper', {
        modules: [Navigation, Pagination],

        pagination: {
            type: 'bullets',
            clickable: true,
            el: '.swiper-pagination-bullets'
          },
      });
}