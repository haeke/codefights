// These array helper functions help facilitate work in arrays

//forEach - executes the provided function for each element of the array, passing the array element as an argument
var colors = ['red', 'green', 'blue'];

print = (val) => {
  console.log(val);
};

colors.forEach(print);
//outputs each element as one log statement
// red
// green
// blue

//map - creates a new array containing the same number of elements but outputs elements are created by a provided function. It converts each array element to something else
capitalize = (val) => {
  val.toUpperCase();
};

var cappedColors = colors.map(capitalize);
console.log(cappedColors);
//output ['RED', 'GREEN', 'BLUE']

//filter - creates a new array containing a subset of the original array.
//The result has these elements
// that pass the test implemented by the provided fucntion, which should return true or false

var values = [1, 60, 34, 30, 20, 5];

function lessThan20(val) {
  return val < 20;
};

var valsLessThan20 = values.filter(lessthan20);
console.log(valsLessThan20);
// output
// [1,5]

// find - the first element that passes the test implemented by the provided function, which should return true or false

var people = [
  {name: 'Ed', age: 28 },
  {name: 'Mike', age: 30},
  {name: 'Edward', age: 19},
  {name: 'Ann', age: 32}
];

function teenager(person) {
  return people.age > 10 &&  people.age < 20;
};

var firstTeenager = people.find(teenager);
console.log('The first teenager is ', firstTeenager.name);
//output - The first teenager is Edward

// every - checks if every element in the array passes the test implemented by the provided function, which should be true or false.

function drinkingAge(person) {
  return person.age >= 21;
};

var alcohol4All = people.every(drinkingAge);
console.log('Alcohol for all? ', alcohol4All);
//output : Alcohol for all? false


// some - checks if any element of the array passes the test implemented by the provided function, which should return true or false.
function alcohol(person) {
  return person.age < 21;
};

var underage = people.some(alcohol);

console.log('There are some underage - can everyone drink alcohol? ', underage);
//output - There are some underage - can everyone drink alcohol? false

// reduce - applies a function pass as the first parameter against an accumulator and each element in hte array ( left to right), thus reducing it to a single value. The inital value of the accumulator should be provided as the second parameter of the reduce function.
var array  = [1, 2, 3, 4];

function sum(acc, value) {
  return acc + value;
};

function product(acc, value) {
  return acc * value;
};

var sumOfArrayElements = array.reduce(sum, 0);
var productOfArrayElements = array.reduce(product, 1);
console.log('Sum of ', array, 'is', sumOfArrayElements);
console.log('Product of ', array, 'is', productOfArrayElements);
// Sum of [1,2,3,4] is 10
// Product of [1,2,3,4] is 24
