function getRandomFromInterval(from, to) {
  from = Math.ceil(from);
  to = Math.floor(to);
  return Math.floor(Math.random() * (to - from + 1) + from);
}

function isBelowMaxStringLength(string, maxLength) {
  return string.length <= maxLength;
}

function isDescriptionValid(value) {
  return value.length >= 20 && value.length <= 140;
}

export {getRandomFromInterval, isBelowMaxStringLength, isDescriptionValid};
