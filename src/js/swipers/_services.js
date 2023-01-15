// * Подключение свайпера
import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation]);
Swiper.use([Pagination]);

const serviceSwiper = () => {
    if (document.querySelector('.services__swiper')) {
        const serviceSwiper = new Swiper('.services__swiper', {
            loop: true,
            spaceBetween: 10,

            navigation: {
                nextEl: '.services__button--next',
                prevEl: '.services__button--prev',
            },

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            breakpoints: {
                767: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },

                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
            },
        });
    }
};

export default serviceSwiper;
