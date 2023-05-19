import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const caruselGoods = () => {
    new Swiper(".caruselGoods", {
        modules: [Navigation, Pagination],
        slidesPerView: 3,
        // centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
} 