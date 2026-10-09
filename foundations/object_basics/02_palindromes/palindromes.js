const palindromes = function (s) {
    const arr = s.toLowerCase().replace(/[^a-z0-9]/g, "").split("");
    for (let index = 0; index < arr.length / 2; index++) {
        if (arr[index] !== arr[arr.length - index - 1]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
