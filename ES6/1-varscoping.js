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

// let - const in ES6
const key = 'abc'; //use const when you don't want to change the value
let points = 123; //use let
let winner = false;

if (points > 40) {
  let winner = true; //declared inside a block - the winner is not a reference to the other winner
};

//properties of a const cannot be reassigned aka you cannot change name or age
const person = {
  name: 'Edwin',
  age: 28,
};
//instead you can change the value
person.name = 'Ed'; //valid
person.age = 29; //valid
