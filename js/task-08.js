const form = document.querySelector('.login-form');

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
    event.currentTarget.reset();
    console.log(formData);
  }  
}

form.addEventListener('submit', onFormSubmit);

function onClearForm() {
  console.log(email);
}
