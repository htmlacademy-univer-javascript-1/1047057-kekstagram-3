import '../pristine/pristine.min.js';
import { isDescriptionValid } from './util.js';

const uploadInput = document.getElementById('upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('.img-upload__cancel');
const body = document.querySelector('body');
const form = document.getElementById('upload-select-image');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'item--invalid',
  successClass: 'item--valid',
  errorTextParent: 'img-upload__field-wrapper',
});

function cancelUploadWithEsc(evt) {
  if (evt.key === 'Escape') {
    cancelUpload();
  }
}

function startUpload() {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', cancelUploadWithEsc);
}

function cancelUpload() {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', cancelUploadWithEsc);
  form.reset();
}

function setupUpload() {
  uploadInput.addEventListener('change', startUpload);
  cancelButton.addEventListener('click', cancelUpload);

  pristine.addValidator(form.querySelector('.text__description'), isDescriptionValid, 'От 20 до 140 символов');

  form.addEventListener('submit', (evt) => {
    if (!pristine.validate()) {
      evt.preventDefault();
    }
  });
}

export {setupUpload};
