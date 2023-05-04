const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

function onInputRange(event) {
    console.log(event.currentTarget.value);
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}

inputEl.addEventListener('input', onInputRange);
