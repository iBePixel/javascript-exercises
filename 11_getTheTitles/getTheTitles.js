const getTheTitles = function(arr) {
    let result = []
    arr.map(item => result.push(item.title));

    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
