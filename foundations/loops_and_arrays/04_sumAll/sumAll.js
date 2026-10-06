const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";

    if (a > b) {
        const temp = a;
        a = b;
        b = temp;
    }
    
    if (a < 0) return 'ERROR';

    return ((b * b + b) - (a * a - a)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
