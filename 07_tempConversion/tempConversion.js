const convertToCelsius = function(temp) {
  let C = (temp - 32) * (5/9);
  return C;
};

const convertToFahrenheit = function(temp) {
  let F = (temp * (9/5)) + 32;
  return F;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
