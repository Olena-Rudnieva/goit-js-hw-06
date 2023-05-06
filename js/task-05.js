const input = document.querySelector('#name-input');
const nameTitle = document.querySelector('#name-output');

function onInputChange(event) {
  
  if (input.value !== '') {
    nameTitle.textContent = event.currentTarget.value;
  } else {
    nameTitle.textContent = 'Anonymous'; 
  }
}

input.addEventListener('input', onInputChange);
