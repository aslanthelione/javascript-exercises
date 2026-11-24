const permutations = function (arr) {
  if (arr.length <= 1) return [[...arr]];

  const result = [];
  arr.forEach((item) => {
    const rest = arr.filter((other) => other !== item);
    const subPerms = permutations(rest);
    result.push(...subPerms.map((perm) => [item, ...perm]));
  });

  return result;
};

// Do not edit below this line
module.exports = permutations;
