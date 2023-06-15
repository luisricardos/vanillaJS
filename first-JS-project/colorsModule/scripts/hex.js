import {getRandomNumber} from '../../utils/common.js';

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    const randomHex = getRandomHex();
    document.body.style.backgroundColor = randomHex;
    color.textContent = randomHex;
});

function getRandomHex() {
    let hexColor = '#';
    for (let index = 0; index < 6; index++) {
        hexColor += hex[getRandomNumber(hex.length)];
    }
    return hexColor;
}