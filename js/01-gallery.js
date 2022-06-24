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
  console.log(event.target.nodeName);
  if (event.target.nodeName === "IMG") {  instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" alt="${event.target.alt}" />`,
    {
      onShow: (instance)=> console.log('onShow', instance),
      onclose : (instance)=> console.log('onClose', instance)
    }
  
  )
  instance.show((instance) => console.log('finished show()', instance));
  }
 
  
}

function test(event) {
  console.log(event.code);
  if (event.code === "Escape") {
    instance.close();
  }
}