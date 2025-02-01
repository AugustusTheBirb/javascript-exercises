const sumAll = function(a,b) {
    let s = 0
    if (Math.floor(a) !== a || Math.floor(b) !== b) {return "ERROR"}
    if (typeof(a) !== "number" || typeof(b) !== "number") {return "ERROR"}
    m = Math.min(a,b)
    M = Math.max(a,b)
    if (m < 0){return "ERROR"}
    for (let i = m; i < M + 1; i++){
        s += i
    }
    return s
};

// Do not edit below this line
module.exports = sumAll;
