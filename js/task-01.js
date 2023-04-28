const idEl = document.querySelector('#categories');
console.log('Number of categories:', idEl.children.length);

const categorieTitle = idEl.querySelectorAll('h2');

categorieTitle.forEach((element) => {
    console.log('Category:', element.textContent);
    console.log('Elements', categorieTitle.length);
});

