import { renderMiniatures } from './render-miniatures.js';
import { setupUpload } from './upload-image.js';
import { getData } from './api.js';
import { showLoadingError } from './form-ui.js';
getData(renderMiniatures, showLoadingError);
setupUpload();
//Задание 7 часть 2
