// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

function makeArrayConsecutive2(statues) {
  //sort in ascending order
  statues.sort(function (a, b) {
    return a - b;
  });

  var result = 0;
  //start counting up from the first element in the array to the last, if a number is missing add to the count of missing numbers
  for (var i = statues[0]; i < statues[statues.length - 1]; i++) {
    if (statues.indexOf(i) === -1) {
      result++;
    };
  };

  return result;
}
