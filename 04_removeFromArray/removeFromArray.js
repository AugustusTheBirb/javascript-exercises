const removeFromArray = function(arr) {
    for (let i = 1; i<arguments.length; i++ ){
        spliceLocation = arr.indexOf(arguments[i])
        while ( spliceLocation >= 0) {
            arr.splice(spliceLocation, 1)
            spliceLocation = arr.indexOf(arguments[i])
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
