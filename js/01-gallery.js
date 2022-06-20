import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector(".gallery");

let instance;

const galleryContainer = galleryItems.map(
   (image) => `<div class="gallery__item">
  <a onclick="event.preventDefault()" class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`
).join("");

console.log("gallery Container =>", galleryContainer);

galleryEl.insertAdjacentHTML("beforeend", galleryContainer);
galleryEl.addEventListener("click", eventGallery);
document.addEventListener("keyup", test);

function eventGallery(event) {
  console.log(event.target.dataset.source);
  instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" alt="${event.target.alt}" />

`)
 
  instance.show();
}

function test(event) {
  console.log(event.code);
  if (event.code === "Escape") {
    instance.close();
  }
}