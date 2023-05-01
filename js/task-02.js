const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const itemsArray = ingredients.map((option) => {
  const itemEl = document.createElement('li');
  itemEl.textContent = option;
  itemEl.classList.add('item');

  return itemEl;
});

list.append(...itemsArray);
