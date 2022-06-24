import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector(".gallery");



const galleryContainer = galleryItems.map(
   (image) => `   
  <a  onclick="event.preventDefault()" class="gallery__item" href="${image.original}">
    <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
  </a>
`
).join("");

galleryEl.insertAdjacentHTML("beforeend", galleryContainer);

let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt',
captionDelay: 250 });