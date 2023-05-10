import '../pristine/pristine.min.js';
import { isDescriptionValid } from './util.js';
import { setupScale } from './scale.js';
import { setupEffects } from './effects.js';
import { postData } from './api.js';
import { showErrorMessage, showSuccessMessage,
  showForm, hideForm,
  addFormEventListener, removeFormEventListener,
  addCancelButtonEventListener, removeCancelButtonEventListener,
  addUploadInputEventListener, getCloseWithEscapeKey,
  disableSubmitButton, enableSubmitButton,
  addUploadEscEventListener, removeUploadEscEventListener, resetForm } from './form-ui.js';

const cancelUploadWithEsc = getCloseWithEscapeKey(finishUpload);

let resetEffects;
let resetScale;

let formCleared = true;

const pristine = new Pristine(document.getElementById('upload-select-image'), {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'item--invalid',
  successClass: 'item--valid',
  errorTextParent: 'img-upload__field-wrapper',
});

function pristineEventListener(evt) {
  evt.preventDefault();
  if (pristine.validate()) {
    const onSuccess = () => {finishUpload(); showSuccessMessage();};
    const onFail = () => {removeUploadEscEventListener(cancelUploadWithEsc);
      hideForm();
      showErrorMessage();
      formCleared = false;};
    disableSubmitButton();
    postData(new FormData(evt.target), onSuccess, onFail, enableSubmitButton);
  }
}

function startUpload() {
  showForm();
  addUploadEscEventListener(cancelUploadWithEsc);
  if (formCleared) {
    addFormEventListener(pristineEventListener);
    addCancelButtonEventListener(finishUpload);
    resetEffects = setupEffects();
    resetScale = setupScale();
  }
}

function finishUpload() {
  hideForm();
  removeFormEventListener(pristineEventListener);
  removeCancelButtonEventListener(finishUpload);
  removeUploadEscEventListener(cancelUploadWithEsc);
  resetEffects();
  resetScale();
  resetForm();
  formCleared = true;
}

function setupUpload() {
  addUploadInputEventListener(startUpload);
  pristine.addValidator(document.querySelector('.text__description'), isDescriptionValid, 'От 20 до 140 символов');
}

export {setupUpload};
