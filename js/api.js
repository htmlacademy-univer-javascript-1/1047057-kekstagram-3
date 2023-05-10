const SERVER_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

function getData (onSuccess, onFail) {
  fetch(`${SERVER_URL}/data`, {method: 'GET',})
    .then((response) => {
      if(response.ok) {
        return response.json();
      } else {
        onFail();
      }
    })
    .then((result) => onSuccess(result))
    .catch(() => onFail());
}

function postData (body, onSuccess, onFail, onFinal) {
  fetch(
    SERVER_URL,
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onFail();
    }
  })
    .catch(() => onFail())
    .finally(() => onFinal());
}


export {getData, postData};
