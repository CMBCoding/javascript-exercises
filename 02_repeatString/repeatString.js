const repeatString = function(phrase, round) {
  if (round < 3) return "ERROR";
  let str = "";
  for (i = 0; i < round; i++) {
    str += phrase;
  }
  return str;

};

// Do not edit below this line
module.exports = repeatString;
