function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls input');
console.log(inputEl);
const btnCreate = document.querySelector('button[data-create]');
console.log(btnCreate);
const btnDestroy = document.querySelector('button[data-destroy]');
console.log(btnDestroy);
const boxEl = document.querySelector('#boxes');
console.log(boxEl);

function onInputChange() {
  let boxAmount = Number(inputEl.value);
  return boxAmount;
}

function onCreateBoxes() {
  createBoxes(onInputChange());
}

function createBoxes(amount) {
  let boxArray = [];
  for (let i = 0; i < amount; i += 1) {
    let sizes = 30 + 10 * i;
    const newBox = document.createElement('div');
    newBox.style.width = `${sizes}px`;
    newBox.style.height = `${sizes}px`;
    let newColor = getRandomHexColor();
    newBox.style.background = newColor;
    boxArray.push(newBox);
  }
  return boxEl.append(...boxArray);
}

function destroyBoxes() {
  inputEl.value = '';
  return (boxEl.innerHTML = '');
}

inputEl.addEventListener('input', onInputChange);

btnCreate.addEventListener('click', onCreateBoxes);

btnDestroy.addEventListener('click', destroyBoxes);
