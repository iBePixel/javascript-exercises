const add = function(num1, num2) {
	result = num1 + num2;
  return result;
};

const subtract = function(num1, num2) {
    result = num1 - num2;
    return result;
};

const sum = function(arr) {
  result = arr.reduce((sum, current) => sum + current, 0);
	return result;
};

const multiply = function(arr) {
  result = arr.reduce((sum, current) => sum * current);
	return result;
};

const power = function(base, power) {
	let result = base;
  
  for (let i = 1; i < power; i++){
    result = result * base;
  }

  return result;
};

const factorial = function(num) {
  let result = 1;

  for (let i = 1; i <= num; i++){
    result = result * i;
  }
  return result;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
