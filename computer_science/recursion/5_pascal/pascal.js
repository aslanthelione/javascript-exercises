const pascal = function (n) {
  if (n === 1) return [1];

  const prev = pascal(n - 1);
  return [1, ...prev.slice(1).map((value, i) => value + prev[i]), 1];
};

// Do not edit below this line
module.exports = pascal;
