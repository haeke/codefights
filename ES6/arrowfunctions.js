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

const race = '100m Dash';
const winners = ['Hunter Gath', 'Singa Song', 'Hugh Nose'];

const win = winners.map((winner, index) => ({ name: winner, race: race, place: index + 1 }));

console.log(win); //in browser use console.table(win);

// arrow functions and this - in the example below we want to target a class named box on click

//using a regular function, 'this' points to the box class
const box = document.querySelector('.box');
box.addEventListener('click', function () {
  console.log(this); //output: outputs the box class
});

// using the arrow function 'this' inherits the parent. aka the Window attribute
// not the best practice
box.addEventListener('click', () => {
  console.log(this);
});

// example of using an arrow function to keep a reference to 'this' inside multiple functions
box.addEventListener('click', function () {
  this.classList.toggle('.opening');
  setTimeout(() => {
    console.log(this); //inherits the context of this from above
    this.classList.toggle('open');
  }, 500);
});
