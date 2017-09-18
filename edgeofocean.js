// A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

// start at 1, at each level multiply by 4
function shapeArea(n) {
  var result = 1;
  for (var i = 1; i <= n - 1; i++) {
    result += i * 4;
  };

  return result;
}
