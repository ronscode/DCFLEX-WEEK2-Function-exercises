// Good Job!
// Given an array of people's names:

// var people = [
//   'Dom',
//   'Lyn',
//   'Kirk',
//   'Autumn',
//   'Trista',
//   'Jesslyn',
//   'Kevin',
//   'John',
//   'Eli',
//   'Juan',
//   'Robert',
//   'Keyur',
//   'Jason',
//   'Che',
//   'Ben'
// ];
// Print out 'Good Job, {{name}}!' for each person's name, one on a line.

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

console.log('Good Job!')

function goodJob(hardWorkers) {
  hardWorkers.forEach(function (name) {
    console.log('Good Job, ' + name + "!")
  });
}

goodJob(people);


// .MAP VERSION

function goodJobMap(hardWorkers) {
  let greatWorkers = hardWorkers.map(function (name) {
    return 'Great Job, ' + name + "!"
  });
  console.log(greatWorkers)
}
console.log("This is the .map version")

goodJobMap(people);
