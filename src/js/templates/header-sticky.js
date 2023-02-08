export const headerSticky = () => {
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');
    const headerHeight = header.offsetHeight;
    let lastScrollTop = 0;
    hero.style.paddingTop = `${headerHeight} 100px`;

    window.addEventListener('scroll', () => {
        const scrollDistance = window.scrollY;
        if (scrollDistance > lastScrollTop) {
            header.classList.remove('header--fixed');
        } else {
            header.classList.add('header--fixed');
        }

        if (scrollDistance === 0) {
            header.classList.remove('header--fixed');
        }

        lastScrollTop = scrollDistance;
    });
};
