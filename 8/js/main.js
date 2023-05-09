import { generateImgDescriptionArray } from './data.js';
import { renderMiniatures } from './renderMiniatures.js';
import { setupUpload } from './uploadImage.js';
renderMiniatures(generateImgDescriptionArray());
setupUpload();
//Задание 7 часть 2
