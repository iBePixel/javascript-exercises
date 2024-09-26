const sumAll = function (start, end) {

    let value;
    let finish;

    if (start > 0 && end > 0 && typeof start === 'number' && typeof end === 'number' && (start % 1) === 0 && (end % 1) === 0) {
        if (start < end) {
            value = start;
            finish = end;
        }
        else if (end < start) {
            value = end;
            finish = start;
        }

        for (let i = value + value; i <= finish; i++) {
            value = value + i;
        }
        return value
    }

    else {
        return 'ERROR';
    }
}


// Do not edit below this line
module.exports = sumAll;
