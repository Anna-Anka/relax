/* eslint-disable spaced-comment */
/* eslint-disable no-undef */
export const mapFunction = () => {
    function init() {
        const center = [55.681474860423, 36.771407883605974];

        const map = new ymaps.Map('map', {
            center,
            zoom: 13,
        });

        const placemark = new ymaps.Placemark(center, {
            balloonContent: `
                <div class="balloon">
                    <p class="balloon__address">
                        г. Голицыно, Минское шоссе, д.45.
                    </p>
                    <a class="balloon__contacts" href="tel:+72411842970">
                        +7 (986) 149-20-65
                    </a>
                </div>
            `,
        }, {
            iconLayout: 'default#image',
            iconImageHref: './../../img/logo.svg',
            iconImageSize: [36, 58],
            iconImageOffset: [-16, -65],
        });

        map.geoObjects.add(placemark);
        //placemark.balloon.open();
    }
    ymaps.ready(init);
};
