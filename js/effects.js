const image = document.querySelector('.img-upload__preview');
const defaultButton = document.getElementById('effect-none');
const chromeButton = document.getElementById('effect-chrome');
const sepiaButton = document.getElementById('effect-sepia');
const marvinButton = document.getElementById('effect-marvin');
const phobosButton = document.getElementById('effect-phobos');
const heatButton = document.getElementById('effect-heat');
const buttonArray = new Array (defaultButton, chromeButton, sepiaButton, marvinButton, phobosButton, heatButton);

let currentEffect = 'none';

const eventListeners = new Array(6);

function generateEventListener(button) {
  const newEffect = `effects__preview--${button.value}`;
  const eventListener = function() {
    image.classList.remove(currentEffect);
    if (button.value !== 'none') {
      image.classList.add(newEffect);
    }
    currentEffect = newEffect;
  };
  return eventListener;
}

function disassembleEffects() {
  for(let i = 0; i < buttonArray.length; i++) {
    buttonArray[i].removeEventListener('click', eventListeners[i]);
  }
  image.classList.remove(currentEffect);
}

function setupEffects() {
  for(let i = 0; i < buttonArray.length; i++) {
    eventListeners[i] = generateEventListener(buttonArray[i]);
    buttonArray[i].addEventListener('click', eventListeners[i]);
  }
  return disassembleEffects;
}

export {setupEffects};
