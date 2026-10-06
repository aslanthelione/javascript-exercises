const convertToCelsius = function(f) {
  return format((f - 32) * 5 / 9);
};

const convertToFahrenheit = function(c) {
  return format(c * 9 / 5 + 32);
};

function format(x) {
  return (Math.round(10 * x) / 10);
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
