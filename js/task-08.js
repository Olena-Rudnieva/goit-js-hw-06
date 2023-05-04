const form = document.querySelector('.login-form');
console.log(form);

function onFormSubmit(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const password = formEl.password.value;

  if (email === '' || password === '') {
    const message = 'Заповніть це поле!';
    alert(message);
  } else {
    const formData = {
      email,
      password,
    };

    console.log(formData);
  }
  event.currentTarget.reset();
}

form.addEventListener('submit', onFormSubmit);

function onClearForm() {
  console.log(email);
}
