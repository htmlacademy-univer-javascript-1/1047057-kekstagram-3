function getRandomFromInterval(from, to) {
  from = Math.ceil(from);
  to = Math.floor(to);
  return Math.floor(Math.random() * (to - from + 1) + from);
}

function isBelowMaxStringLength(string, maxLength) {
  return string.length <= maxLength;
}
