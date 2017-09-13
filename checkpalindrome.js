//given a string check to see if it is a palindrome

function palindrome(word) {
  //use the split() function to split the string into an array of substrings
  //use the reverse() function to reverse the word
  //use join to create a string from the array of substrings
  return word === word.split("").reverse().join(""); //returns true or false
};

//test cases
palindrome('racecar'); //true
palindrom('aabb'); // false
