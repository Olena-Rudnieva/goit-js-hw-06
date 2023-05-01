const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryEl = document.querySelector('.gallery');

// const makeGallery = (option) => {
//   const itemEl = document.createElement('li');
//   const imageEl = document.createElement('img');
//   imageEl.style.url = option.url;
//   imageEl.style.alt = option.alt;
//   console.log(imageEl);
//   itemEl.append(imageEl);

//   return itemEl;
// }

// const galleryList  = images.map(makeGallery);
// console.log(galleryList);
// galleryEl.append(...galleryList);

// const image = images[0];

// console.log(image.url);

// const imageEl = document.createElement('img');
// imageEl.classList.add('image');
// imageEl.style.width = '90px';
// imageEl.style.url =
//   'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// imageEl.style.alt = image.alt;
// console.log(imageEl);

const galleryEl = document.querySelector('.gallery');

const itemEl = document.createElement('li');
itemEl.insertAdjacentHTML('afterbegin', '<img></img>')


console.log(itemEl);
