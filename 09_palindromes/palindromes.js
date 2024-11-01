const palindromes = function (string) {
    let reversed = string.toLowerCase().split('').filter(char => {return /[a-zA-Z0-9]/.test(char)}).reverse().join("");
    const alphanumericalString = string.toLowerCase().split('').filter(char => {return /[a-zA-Z0-9]/.test(char)}).join('');
    
    return reversed == alphanumericalString;
    
};

// Do not edit below this line
module.exports = palindromes;
