import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation]);
Swiper.use([Pagination]);

export const serviceSwiper = () => {
    if (document.querySelector('.services__swiper')) {
        return new Swiper('.services__swiper', {
            watchOverflow: true,

            speed: 800,
            effect: 'cards',
            fadeEffect: {
                crossFade: true,
            },

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
                    slidesPerView: 'auto',
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
