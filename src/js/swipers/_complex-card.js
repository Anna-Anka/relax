// * Подключение свайпера
import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

const complexSwiper = () => {
    if (document.querySelector('.complex-card__swiper')) {
        const allCards = document.querySelectorAll('.complex-card__swiper');
        allCards.forEach((card) => {
            // eslint-disable-next-line no-unused-vars, no-new
            new Swiper(card, {
                loop: true,
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 10,

                navigation: {
                    nextEl: card.querySelector('.swiper-button-next'),
                    prevEl: card.querySelector('.swiper-button-prev'),
                },

                breakpoints: {
                    992: {
                        pagination: {
                            el: '.swiper-pagination',
                        },
                    },
                },
            });
        });
    }
};

export default complexSwiper;
