// Square the Numbers
// Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].

console.log("#3: Square the Numbers")

var notSquaredNums = [10, 2, 4, 3.14, 8, 42];

function squareTheNumbers(theArg) {
  const nowSquared = theArg.map(function (element) {
    return element * element;
  });
  console.log(nowSquared)
}

squareTheNumbers(notSquaredNums)