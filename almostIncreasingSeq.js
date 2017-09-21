// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

function almostIncreasingSequence(sequence) {
  var errors = 0;
  // we need to check if the current element is larger or the same as the element next to it. If it is then we need to check the element against the element past the second element and the element before with the element ahead of the current element. If this it is, it cannot be sequential. If there is more than one pair of elements where the current element is larger than anything that proceeds it.
  for (var i = 0; i < sequence.length; i++) {
    if (sequence[i] >= sequence[i+1]) {
      errors++;
      if (sequence[i] >= sequence[i + 2] && sequence[i - 1] >= sequence[i + 1]) {
        return false;
      }
    }
  }

  return errors <= 1;
}
