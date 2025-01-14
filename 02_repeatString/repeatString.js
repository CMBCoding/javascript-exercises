const repeatString = function(text, rounds) {
    let str = "";
    if (rounds < 0) return "ERROR";
    for (let i = 0; i < rounds; i++) {
        str = str + text;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;