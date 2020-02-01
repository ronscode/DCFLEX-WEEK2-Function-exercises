console.log("#1: Positive Numbers ")

// Positive Numbers
// Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.

var arrOfNums1 = [1, -7, 42, 12, 7, -5, -2, -5, 1, 20];

function onlyPositive(arrOfNums) {
  const newArray = arrOfNums.filter(function (element) {
    return element > 0;
  });
  console.log(newArray)
}

onlyPositive(arrOfNums1);