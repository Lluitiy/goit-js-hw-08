import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";// Add imports above this line
import { galleryItems } from './gallery-items';

const galleryList = document.querySelector('.gallery');

const galleryImages = galleryItems.map(({ preview, original, description }) => {
  const createdImage = `
    <a class="gallery__item" href="${original}">
    <img 
    class="gallery__image"
    src="${preview}"
    alt="${description}"
    />
    </a>
    `;
  return createdImage;
});

galleryList.insertAdjacentHTML('beforeend', galleryImages.join(''));

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'outside',
  animationSpeed: 250,
  disableRightClick: true,
  disableScroll: true,
  scrollZoom: false,
});
console.log(galleryItems);
