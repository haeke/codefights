//Arrow functions - imlpict returns, does not rebind the value of 'this'

//Example 1 -
const name = ['edwin', 'edward', 'eddy'];

// ES5 function
const Fullnames = name.map(function (name) {
  return `${name} other`;
});

// ES6 equivalent - implicent return
const Fullnames2 = name.map((name) => `${name} other`);

//ES6 with a return statement
const Fullnames3 = name.map((name, other) => {
  return `${name} other`;
});

const fullname = (test) => console.log(`this is a test`);

fullname();
