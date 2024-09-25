const sumAll = function(start, end) {
    let value = start; 
    for (let i = start + 1; i <= end; i++){
        value = value + i;
    }
    console.log(value)
    return value
};

// Do not edit below this line
module.exports = sumAll;
