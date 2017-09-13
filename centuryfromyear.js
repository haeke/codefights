// given a year, return the century that it was in

function century(year) {
  //use the ceiling function to handle decimals i.e. 1605 is the 17th century
  return Math.ceil(year / 100);
};

//test cases
console.log(century(1605)); // 17th century
console.log(century(1900)); // 20th century
console.log(century(2004)); // 21th century
