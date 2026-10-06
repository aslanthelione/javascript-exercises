const removeFromArray = function(arr, ...numbers) {
    return arr.filter(n => !numbers.includes(n))
};

// Do not edit below this line
module.exports = removeFromArray;
