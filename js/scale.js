const scaleValueContainer = document.querySelector('.scale__control--value');
const biggerButton = document.querySelector('.scale__control--bigger');
const smallerButton = document.querySelector('.scale__control--smaller');
const image = document.querySelector('.img-upload__preview');

const step = 25;
const defaultValue = 100;
const maxValue = 100;
const minValue = 25;
let currentScale = defaultValue;

function applyScale(scale) {
  scaleValueContainer.value = `${scale}%`;
  image.style.transform = `scale(${scale / 100})`;
}

function calculateScale(enlarge) {
  const newScale = currentScale + (enlarge ? step : - step);
  if(enlarge) {
    return newScale <= maxValue ? newScale : currentScale;
  }
  return newScale >= minValue ? newScale : currentScale;
}

function smallerButtonListener() {
  currentScale = calculateScale(false);
  applyScale(currentScale);
}

function biggerButtonListener() {
  currentScale = calculateScale(true);
  applyScale(currentScale);
}

function disassembleScale() {
  smallerButton.removeEventListener('click', smallerButtonListener);
  biggerButton.removeEventListener('click', biggerButtonListener);
}

function setupScale() {
  applyScale(defaultValue);
  smallerButton.addEventListener('click', smallerButtonListener);
  biggerButton.addEventListener('click', biggerButtonListener);
  return disassembleScale;
}

export {setupScale};
