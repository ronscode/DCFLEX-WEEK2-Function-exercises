// Sort an array
// Given an array of strings such the array of names given in the previous problem, sort them by alphabetically order.

var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

function sortArray(someArr) {
  return someArr.sort()
}

sortArray(people);

console.log("The sorted array is " + people)