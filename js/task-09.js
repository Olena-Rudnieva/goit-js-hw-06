function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');
const body = document.body;

function onColorChange() {
  let newColor = getRandomHexColor();
  body.style.background = newColor;
  colorEl.textContent = newColor;
}

btnEl.addEventListener('click', onColorChange);
