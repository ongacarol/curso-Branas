const sum = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const calculator = function (fn) {
    return function(a, b) {
        // return "calculator";
        return fn(a, b);
    };
};

console.log(calculator(sum)(2, 2));