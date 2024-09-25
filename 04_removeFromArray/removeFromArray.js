const removeFromArray = function (array, ...toRemove) {

    for (let i = 0; i < array.length; i++) {
        for (let g = 0; g < toRemove.length; g++) {
            if (array[i] === toRemove[g]) {
                array.splice(i, 1)
                i = 0;
            }
        }
    }
    console.log(toRemove.length)
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
