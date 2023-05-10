function showSuccessMessage () {
  showMessage('success');
}

function showErrorMessage () {
  showMessage('error');
}

function showMessage (type) {
  const messageTemplate = document.querySelector(`#${type}`).content.cloneNode(true);
  document.body.appendChild(messageTemplate);
  const closeButton = document.querySelector(`.${type}__button`);
  /* eslint-disable prefer-const */
  let closeWithEscapeKey;
  const eventListener = function (){
    const message = document.querySelector(`.${type}`);
    document.body.removeChild(message);
    document.removeEventListener('keydown', closeWithEscapeKey);
  };
  /* eslint-enable prefer-const */
  closeButton.addEventListener('click', eventListener);
  closeWithEscapeKey = getCloseWithEscapeKey(eventListener);
  document.addEventListener('keydown', closeWithEscapeKey);
}

function showLoadingError() {
  showMessage('loading--error');
}

function disableSubmitButton() {
  const submitButton = document.querySelector('.img-upload__submit');
  submitButton.disabled = true;
}

function enableSubmitButton() {
  const submitButton = document.querySelector('.img-upload__submit');
  submitButton.disabled = false;
}

function getCloseWithEscapeKey(closingFunction) {
  const eventFunction = function(evt) {
    if(evt.key === 'Escape') {
      closingFunction();
    }
  };

  return eventFunction;
}

function hideUploadOverlay() {
  const uploadOverlay = document.querySelector('.img-upload__overlay');
  uploadOverlay.classList.add('hidden');
}

function unhideUploadOverlay() {
  const uploadOverlay = document.querySelector('.img-upload__overlay');
  uploadOverlay.classList.remove('hidden');
}

function addModalOpen() {
  const body = document.querySelector('body');
  body.classList.add('modal-open');
}

function removeModalOpen() {
  const body = document.querySelector('body');
  body.classList.remove('modal-open');
}

function showForm () {
  unhideUploadOverlay();
  addModalOpen();
}

function hideForm() {
  hideUploadOverlay();
  removeModalOpen();
}

function resetForm() {
  const form = document.getElementById('upload-select-image');
  form.reset();
}

function addFormEventListener(eventListener) {
  const form = document.getElementById('upload-select-image');
  form.addEventListener('submit', eventListener);
}

function removeFormEventListener(eventListener) {
  const form = document.getElementById('upload-select-image');
  form.removeEventListener('submit', eventListener);
}

function addCancelButtonEventListener(eventListener) {
  const cancelButton = document.querySelector('.img-upload__cancel');
  cancelButton.addEventListener('click', eventListener);
}

function removeCancelButtonEventListener(eventListener) {
  const cancelButton = document.querySelector('.img-upload__cancel');
  cancelButton.removeEventListener('click', eventListener);
}

function addUploadInputEventListener(eventListener) {
  const uploadInput = document.getElementById('upload-file');
  uploadInput.addEventListener('change', eventListener);
}

function addUploadEscEventListener(eventListener) {
  document.addEventListener('keydown', eventListener);
}

function removeUploadEscEventListener(eventListener) {
  document.removeEventListener('keydown', eventListener);
}

export {showSuccessMessage, showErrorMessage,
  showForm, hideForm,
  addFormEventListener, removeFormEventListener,
  addCancelButtonEventListener, removeCancelButtonEventListener,
  addUploadInputEventListener, getCloseWithEscapeKey,
  disableSubmitButton, enableSubmitButton,
  addUploadEscEventListener, removeUploadEscEventListener, resetForm, showLoadingError};
