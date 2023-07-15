const reverseString = function(oldString) {
    let reversedWord = "";
    let end = oldString.length;
    while(end--){
        reversedWord += oldString.at(end);
    }
    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
