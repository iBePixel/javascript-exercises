const findTheOldest = function(arr) {
    workingArr = arr
    let result = arr[0]
    let ages = []
    let year = new Date().getFullYear();

    workingArr.forEach(element => {
        if (element.yearOfDeath == undefined){
            element.yearOfDeath = year;
        }
    });

    workingArr.forEach(element => {
        age = element.yearOfDeath - element.yearOfBirth;
        ages.push(age)
        console.log(age)
    });

    let topAge = ages[0];

    for (let i = 1; i < ages.length; i++){
        if(ages[i] > topAge){
            result = arr[i]
            topAge = ages[i]
        }
    }

    console.log(topAge);
    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
