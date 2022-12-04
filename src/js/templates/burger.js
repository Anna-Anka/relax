import { disableScroll } from '../templates/disable-scroll';
import { enableScroll } from '../templates/enable-scroll';

export const burger = () => {
    const burger = document?.querySelector('[data-burger]');
    const menu = document?.querySelector('[data-menu]');
    const menuLinks = document?.querySelectorAll('[data-menu-link]');
    const overlay = document?.querySelector('[data-menu-overlay]');
    const wrapper = document?.querySelector('.header__wrapper')

    burger?.addEventListener('click', (e) => {
        burger?.classList.toggle('burger--active');
        menu?.classList.toggle('menu--active');
        wrapper?.classList.toggle('header__wrapper--active')

        if (menu?.classList.contains('menu--active')) {
            burger?.setAttribute('aria-expanded', 'true');
            burger?.setAttribute('aria-label', 'Закрыть меню');
            disableScroll();
        } else {
            burger?.setAttribute('aria-expanded', 'false');
            burger?.setAttribute('aria-label', 'Открыть меню');
            enableScroll();
        }
    });

    overlay?.addEventListener('click', () => {
        burger?.setAttribute('aria-expanded', 'false');
        burger?.setAttribute('aria-label', 'Открыть меню');
        burger.classList.remove('burger--active');
        menu.classList.remove('menu--active');
        wrapper?.classList.remove('header__wrapper--active')
        enableScroll();
    });

    menuLinks?.forEach(el => {
        el.addEventListener('click', () => {
            burger?.setAttribute('aria-expanded', 'false');
            burger?.setAttribute('aria-label', 'Открыть меню');
            burger.classList.remove('burger--active');
            menu.classList.remove('menu--active');
            wrapper?.classList.remove('header__wrapper--active')
            enableScroll();
        });
    });
}
