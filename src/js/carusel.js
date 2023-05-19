import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const carusel = () => {
    new Swiper(".carusel", {
        modules: [Navigation, Pagination],
        slidesPerView: 4,
        // centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
} 