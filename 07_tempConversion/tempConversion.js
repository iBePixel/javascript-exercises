const convertToCelsius = function(x) {
  let result;
  result = (x - 32) * 5/9;
  
  if (result % 1 != 0){
    result = result.toFixed(1)
    result = parseFloat(result);
  }
 return result
};

const convertToFahrenheit = function(y) {
  let result = (y * 9/5) + 32
  if (result % 1 != 0){
    result = result.toFixed(1)
    result = parseFloat(result);
  }
  return result
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
