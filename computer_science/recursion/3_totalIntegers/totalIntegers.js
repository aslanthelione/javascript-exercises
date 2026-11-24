const totalIntegers = function (obj) {
  if (typeof obj !== "object" || obj === null) return undefined;

  return Object.values(obj).reduce((acc, value) => {
    if (Number.isInteger(value)) return acc + 1;
    return acc + (totalIntegers(value) ?? 0);
  }, 0);
};
// Do not edit below this line
module.exports = totalIntegers;
