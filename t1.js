/*
Task 1
Given an array of numbers,
return the sum of the positive elements
*/

function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}
