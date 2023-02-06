import './_libs';
import './_templates';
import './_components';
import './_vendor';

import './_swipers';

const typeText = () => {
    const text = [' — база отдыха в подмосковье'];
    let line = 0;
    let count = 0;
    let out = '';
    let htmlTitle = document.querySelector('.hero__text');

    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

    const typeLine = () => {
        const interval = setTimeout(() => {
            out += text[line][count];
            htmlTitle.innerHTML = out + ' | ';
            count++;

            if (count >= text[line].length) {
                count = 0;
                line++;

                if (line === text.length) {
                    clearTimeout(interval);
                    htmlTitle.innerHTML = out;
                    return true;
                }
            }

            typeLine();
        }, getRandomInt(250));
    };

    typeLine();
};

const typeTextAccent = () => {
    const text = ['relax'];
    let line = 0;
    let count = 0;
    let out = '';
    let htmlTitle = document.querySelector('.hero__accent');

    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

    const typeLine = () => {
        const interval = setTimeout(() => {
            out += text[line][count];
            htmlTitle.innerHTML = `${out} | `;
            count++;

            if (count >= text[line].length) {
                count = 0;
                line++;

                if (line === text.length) {
                    clearTimeout(interval);
                    htmlTitle.innerHTML = out;
                    setTimeout(() => typeText(), 250);
                    return true;
                }
            }

            typeLine();
        }, getRandomInt(250));
    };

    typeLine();
};

typeTextAccent();
