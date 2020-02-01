console.log("#2: Even Numbers")

// Even Numbers
// Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.

var arrOfNums2 = [1, 7, 42, 12, 7, 5, 2, 5, 1, 18, 200, 201, 20];

function onlyEven(theArray) {
  const allEven = theArray.filter(function (element) {
    return element % 2 === 0;
  });
  console.log(allEven)
}

onlyEven(arrOfNums2);
