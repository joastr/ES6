'use strict';

// task 1

var greet = 'Hello';
var who = 'World!';

console.log(greet + ' ' + who);

// task 2 

var multiply = function multiply(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return a * b;
};

console.log(multiply(2, 5));
console.log(multiply(5));

// task 3 

var average = function average() {
    for (var _len = arguments.length, items = Array(_len), _key = 0; _key < _len; _key++) {
        items[_key] = arguments[_key];
    }

    var sum = 0;
    items.forEach(function (item) {
        return sum += item;
    });
    return sum / items.length;
};

console.log(average(1)); // 1
console.log(average(1, 3)); // 2
console.log(average(1, 3, 6, 6)); // 4

// task 4 

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

var gradesAverage = function gradesAverage(grades) {
    var sum = 0;
    grades.forEach(function (grad) {
        return sum += grad;
    });
    return sum / grades.length;
};

console.log(gradesAverage(grades));

// task 5 

var table = [1, 4, 'Iwona', false, 'Nowak'];

var firstName = table[2],
    surname = table[4];


console.log(firstName + ' ' + surname);
