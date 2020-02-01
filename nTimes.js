// n times
// You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. It will call that function for that many times. Example:

// > callNTimes(5, hello)
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world!
// You are allowed to use a loop in the implementation of callNTimes.

function fun() {
  console.log("Hello, world!")
}

function callNTimes(arg1, arg2) {
  for (var i = 0; i < arg1; i++) {
    arg2()
  }
}

callNTimes(5, fun)