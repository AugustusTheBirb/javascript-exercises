const reverseString = function(string) {
    answer = ""
    for (let i = string.length-1; i >= 0; i--){
        answer += string[i]
    }
    return answer
};

// Do not edit below this line
module.exports = reverseString;
