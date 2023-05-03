const input = document.querySelector('#name-input');
const nameTitle = document.querySelector('#name-output');

function onInputChange(event) {
  nameTitle.textContent = event.currentTarget.value;
}

input.addEventListener('input', onInputChange);
