function renderMiniatures(imgArray) {
  const fragment = document.createDocumentFragment();

  imgArray.forEach((img) => {
    fragment.appendChild(renderMiniature(img));
  });

  document.querySelector('.pictures').appendChild(fragment);
}

function renderMiniature(img) {
  const miniatureTemp = document.querySelector('#picture').content.querySelector('.picture').cloneNode(true);
  miniatureTemp.querySelector('.picture__img').src = img.url;
  miniatureTemp.querySelector('.picture__likes').textContent = img.likes;
  miniatureTemp.querySelector('.picture__comments').textContent = img.comments;
  return miniatureTemp;
}

export {renderMiniatures};
