// After they became famous, the CodeBots all decided to move to a new building and live together. The building is represented by a rectangular matrix of rooms. Each cell in the matrix contains an integer that represents the price of the room. Some rooms are free (their cost is 0), but that's probably because they are haunted, so all the bots are afraid of them. That is why any room that is free or is located anywhere below a free room in the same column is not considered suitable for the bots to live in.

function matrixElementsSum(matrix) {
  //loop through the two dimensional array, if there is a 0 in the index add the index to the banned array. Then check to see if column index is the same as the banned index, if it does not contain the index add it to the total.
  var total = 0;
  var banned = [];

  for(var row = 0; row < matrix.length; row++) {
    for (var col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        banned.push(col);
      } else if (banned.indexOf(col) === -1) {
        total += matrix[row][col];
      }
    }
  }

  return total;
}
