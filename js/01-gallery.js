import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const markupImg = createImgMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", markupImg);

galleryEl.addEventListener("click", onClickImg);

function createImgMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
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

function onModal(evt) {
  const instance = basicLightbox.create(
    `
    <img src="${evt.target.dataset.source}" width="800" height="600">`
  );
  instance.show();
    galleryEl.addEventListener("keydown", (evt) => {
      if (evt.code === "Escape") {
        instance.close();
        galleryEl.removeEventListener("keydown", () => {
        })
      }
    });
}
