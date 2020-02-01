// Acronym
// Write a function acronym that takes an array of words as argument and returns the acronym of the words. Use the reduce method to do this.

// > acronym(['very', 'important', 'person'])
// 'VIP'
// > acronym(['national', 'aeronautics', 'space', 'administration'])
// 'NASA'
console.log(
  "Lets make an acronym!"
)



var spaceForce = ['national', 'aeronautics', 'space', 'administration'];

function acronym(array) {
  return array.reduce(function (acc, word) {
    return acc + word.charAt(0).toUpperCase();
  }, '');
}

console.log(acronym(spaceForce));


// function acronym(anArray) {
//   var acr = "";
//   acr = anArray.reduce()
//   console.log(acr)
// }

// acronym(spaceForce);






// TAN'S CODE 

// function firstChar(total) {
//   console.log(total.charAt(0));
//   return total.charAt(0);
// };

// function acronym(words) {
//   var acr = "";
//   acr = .reduct() words.charAt(0)
//   console.log(acr)
// };

// console.log(acronym(["Very", "Important", "Person"]))












