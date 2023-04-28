const idEl = document.querySelector('#categories');
console.log('Number of categories:', idEl.children.length);

const categorieTitle = idEl.querySelectorAll('h2');

categorieTitle.forEach((element) => {
  console.log('Category:', element.textContent);
  const listEl = element.nextElementSibling;
  const listItemEl = listEl.children;
  console.log('Elements', listItemEl.length);
});
