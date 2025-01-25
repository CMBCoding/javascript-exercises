const convertToCelsius = function(temp) {
  let C = (temp - 32) * (5/9);
  return Number(C.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let F = (temp * (9/5)) + 32;
  return Number(F.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
