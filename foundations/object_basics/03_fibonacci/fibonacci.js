const fibonacci = function(n) {
    if (typeof n != "number" || n === null || Number.isNaN(n) || n <= 0) return "OOPS"; 

    let a = 0;
    let b = 1;
    let c;

    for (let i = 0; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
    }

    return a;
};

// Do not edit below this line
module.exports = fibonacci;
