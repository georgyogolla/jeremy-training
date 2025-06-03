// The Array object, as with arrays in other programming languages, 
// enables storing a collection of multiple items under a single variable name, 
// and has members for performing common array operations.

const firstArray = [8, "hello", null, true, undefined, NaN, 10, 'Kenya', false, "World"];

console.log(firstArray);
console.log(firstArray[3]);
console.log(firstArray.length);
console.log(firstArray[firstArray.length - 1]);

// Array methods
const fruits = [];
fruits.push('orange', 'banana', 'apple');
fruits.push('hello');
fruits[2] = 'mango';

fruits.length = 6;
fruits.length = 3;
console.log(fruits.length);
console.log(fruits);

