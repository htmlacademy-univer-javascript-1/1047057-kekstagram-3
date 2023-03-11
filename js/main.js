function getRandomFromInterval(from, to) {
  from = Math.ceil(from);
  to = Math.floor(to);
  return Math.floor(Math.random() * (to - from + 1) + from);
}

function isBelowMaxStringLength(string, maxLength) {
  return string.length <= maxLength;
}

function generateImgDescriptionArray() {
  const imgDescriptions = new Array(25);
  for(let i = 1; i <= 25; i++) {
    imgDescriptions[i - 1] = {id: i, url: `photos/${i}.jpg`,
      description: `I rate this picture ${getRandomFromInterval(0, 10)} outta 10`,
      likes: getRandomFromInterval(15, 200), comments: getRandomFromInterval(0, 200),};
  }
  return imgDescriptions;
}

isBelowMaxStringLength();
generateImgDescriptionArray();
