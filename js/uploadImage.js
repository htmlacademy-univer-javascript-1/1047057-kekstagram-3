import '../pristine/pristine.min.js';
import { isDescriptionValid } from './util.js';
import { setupScale } from './scale.js';
import { setupEffects } from './effects.js';

const uploadInput = document.getElementById('upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('.img-upload__cancel');
const body = document.querySelector('body');
const form = document.getElementById('upload-select-image');

let disassembleEffects;
let disassembleScale;

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'item--invalid',
  successClass: 'item--valid',
  errorTextParent: 'img-upload__field-wrapper',
});

function setUpPristine() {
  pristine.addValidator(form.querySelector('.text__description'), isDescriptionValid, 'От 20 до 140 символов');

  form.addEventListener('submit', pristineEventListener);
}

function pristineEventListener(evt) {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
}

function cancelUploadWithEsc(evt) {
  if (evt.key === 'Escape') {
    cancelUpload();
  }
}

function startUpload() {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  cancelButton.addEventListener('click', cancelUpload);
  document.addEventListener('keydown', cancelUploadWithEsc);
  disassembleEffects = setupEffects();
  disassembleScale = setupScale();
  setUpPristine();
}

function cancelUpload() {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', cancelUploadWithEsc);
  form.reset();
  cancelButton.removeEventListener('click', cancelUpload);
  document.removeEventListener('keydown', cancelUploadWithEsc);
  form.removeEventListener('submit', pristineEventListener);
  disassembleEffects();
  disassembleScale();
}

function setupUpload() {
  uploadInput.addEventListener('change', startUpload);
}

export {setupUpload};
