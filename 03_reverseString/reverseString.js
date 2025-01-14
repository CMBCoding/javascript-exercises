const reverseString = function(str) {
    str.toString();
    var reverse = str.split("");
    var arrayReverse = reverse.reverse();
    var arrayJoin = arrayReverse.join("");
    return arrayJoin;
};

// Do not edit below this line
module.exports = reverseString;
