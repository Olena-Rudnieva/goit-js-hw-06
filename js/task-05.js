const input = document.querySelector('#name-input');
const nameTitle = document.querySelector('#name-output');

function onInputChange(event) {
    console.log(event.currentTarget.value);
}


input.addEventListener('input', onInputChange)
