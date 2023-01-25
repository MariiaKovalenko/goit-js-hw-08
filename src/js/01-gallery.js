// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryList = document.querySelector('.gallery');
const imageMarkup = addImagesMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', imageMarkup);
galleryList.addEventListener('click', onModalOpen);

function addImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    })
    .join('');
};


function onModalOpen(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return
  }
};

const gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
console.log(galleryItems);
