// The scope of var and let
// var is scoped to the function
// let is blocked such that it can be scoped into a particular blockscope.

//  Best Practices for using Var Let and Const in ES6
// Use var for top-level variables that are shared across many scopes.
// Use let for localized variables in smaller scopes
// Refactor let to const only after some code has been written and you're reasonably sure that you've got a case where there shouldn't be variable reassignment.

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
//it cannot be reassigned
const person = {
  name: 'Edwin',
  age: 28,
};
//instead you can change the value
person.name = 'Ed'; //valid
person.age = 29; //valid

//not valid
person = {name: 'Jimbo'}; //error: Assignment to constant variable

// let and const example
{
  const name = 'Edwin';
  console.log(name); //outputs Edwin
}
console.log(name); //output: nothing

//for loop example
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log('The numer is ' + i); //outputs 10 - 10 times
  }, 1000);
};

// fixed version of the for loop using let ( block scoped )
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log('The number is ' + i); //outputs 1-10
  }, 1000);
};

//example of in block scope and outside block scope variables
function blockscopes() {
  var x = 1;
  let y = 2;
  const z = 3;
  {
    var x = 100;
    let y = 200;
    const z = 300;
    console.log('x in the block scope is ', x);
    console.log('y in the block scope is ', y);
    console.log('z in the block scope is ', z);
  }
  console.log('x outside the block scope is ', x);
  console.log('y outside the block scope is ', y);
  console.log('z outside the block scope is ', z);
}

blockscopes();
//output:
// x in the block scope is 100
// y in the block scope is 200
// z in the block scope is 300
// x outside the block scope is 100
// y outside the block scope is 2
// z outside the block scope is 3
