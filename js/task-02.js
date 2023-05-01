const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const makeList = (options) => {
  return options.map((option) => {
    const itemEl = document.createElement('li');
    itemEl.textContent = option;
    itemEl.classList.add('item');

    return itemEl;
  });
};

const itemsArray = makeList(ingredients);
list.append(...itemsArray);