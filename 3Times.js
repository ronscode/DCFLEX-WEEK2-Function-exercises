// 3 times
// Given this function:

// function call3Times(fun) {
//   fun();
//   fun();
//   fun();
// }
// Use the call3Times function to print "Hello, world!" 3 times.


function fun() {
  console.log("Hello, world!");
}

function call3Times(anArg) {
  fun();
  fun();
  fun();
}

call3Times(fun)