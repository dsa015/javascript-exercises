const fibonacci = function (num) {
  let f1 = 0; //preceding
  let f2 = 1; // next
  let sum; //current sum

  if (num < 0) return "OOPS";
  for (let i = 0; i < num; i++) {
    sum = f1 + f2; // becomes the current num
    f2 = f1; // f2 becomes the preceding num
    f1 = sum; // f1 becomes the current "num"
  }
  return sum;
};
// Do not edit below this line
module.exports = fibonacci;

//In mathematics, the Fibonacci sequence is a sequence
// in which each number is the sum of the two preceding ones.
