const matches = (a, b) => a === b || (Number.isNaN(a) && Number.isNaN(b));

const contains = function (object, searchValue) {
  if (typeof object !== "object" || object === null) return false;

  return Object.values(object).some(
    (value) => matches(value, searchValue) || contains(value, searchValue),
  );
};

// Do not edit below this line
module.exports = contains;
