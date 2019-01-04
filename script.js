

// task 1

const greet = 'Hello';
const who = 'World!';

console.log(`${greet} ${who}`);

// task 2 

const multiply = (a, b=1) => a*b

console.log(multiply(2,5));
console.log(multiply(5));

// task 3 
         
let average = (...items) => {
    let sum = 0;
    items.forEach(item=>
    sum +=item );
    return sum/items.length;
};
     



console.log (average(1)); // 1
console.log(average(1, 3)); // 2
console.log(average(1, 3, 6, 6)); // 4

// task 4 

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

let gradesAverage = (grades)=> {
    let sum= 0;
    grades.forEach(grad=>
        sum +=grad);
    return sum/grades.length
};

console.log(gradesAverage(grades));


// task 5 

const table = [1, 4, 'Iwona', false, 'Nowak'];

const [ , ,firstName, , surname] = table;

console.log(`${firstName} ${surname}`);





