const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');


ingredients.forEach(element => {  
  const itemEl = document.createElement('li');
  itemEl.textContent = element;
  itemEl.classList.add('item');
  list.append(itemEl);
});



