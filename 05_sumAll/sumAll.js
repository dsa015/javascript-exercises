const sumAll = function (min, max) {
  let total = 0;

  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  } else if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return "ERROR";
  } else if (min < 0 || max < 0) {
    return "ERROR";
  }
  for (let i = min; i <= max; i++) {
    total += i;
  }
  return total;
};


// Do not edit below this line
module.exports = sumAll;
