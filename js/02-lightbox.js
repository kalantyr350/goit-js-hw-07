import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// document.head.appendChild(linkCSS);

const galleryEl = document.querySelector(".gallery");

const markupImg = createImgMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", markupImg);

galleryEl.addEventListener("click", onClickImg);

function createImgMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `
      <li>
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
    })
    .join("");
}

function onClickImg(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains("gallery")) {
    return;
  }
  onModal(evt);
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
