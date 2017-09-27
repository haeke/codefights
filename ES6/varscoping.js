// The scope of var and let
// var is scoped to the function
// let is blocked such that it can be scoped into a particular blockscope.

function setWidth() {
  var width = 100;
  console.log(width);
};

console.log(width); // error not within the scope

var age = 100;
if (age > 12) {
  var dogYears = age * 7;
  console.log(`you are ${dogYears} dog years old`); //variable is available outside
}

if (age > 13) {
  let dogYears2 = age * 7;
  console.log(`you are ${dogYears2} dog years old`); //variable is only available in the block scope.
}
