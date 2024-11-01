const fibonacci = function(num) {
    let max = num
    let num1 = 1
    let num2 = 0
    let result = 1;

    if (num < 0){
        return "OOPS"
    }
    else if (num.typeOf == 'string'){
        max = parseInt(max);
    }
    else if (num == 0){
        return 0
    }

    for(let i = 1; i < max; i++){
        result = num1 + num2;
        num2 = num1;
        num1 = result;
    }


    return result;
};

// Do not edit below this line
module.exports = fibonacci;
