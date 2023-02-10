export const servicesItem = () => {
    if (document.querySelector('.services__item')) {
        const items = document.querySelectorAll('.services__item');
        const { length } = items;
        if (length % 2 !== 0) {
            const last = items[length - 1];
            last.classList.add('services__item--width');
        }
    }
};