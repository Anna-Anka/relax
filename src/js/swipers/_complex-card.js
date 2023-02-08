// * Подключение свайпера
import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation]);
Swiper.use([Pagination]);

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
                speed: 800,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true,
                },
                navigation: {
                    nextEl: card.querySelector('.swiper-button-next'),
                    prevEl: card.querySelector('.swiper-button-prev'),
                },

                pagination: {
                    el: card.querySelector('.swiper-pagination'),
                    clickable: true,
                },
            });
        });
    }
};

export default complexSwiper;
