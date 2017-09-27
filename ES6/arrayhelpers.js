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

var values = [1, 2, 3, 4, 5, 6, 7];
