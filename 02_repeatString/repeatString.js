const repeatString = function(word, numTimes) {
    if(numTimes<0) return "ERROR";
    let str = "";
    for(let i =0; i<numTimes; i++){
        str += word;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
