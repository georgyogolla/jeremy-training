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

console.log(Object.keys(fruits));
console.log(Object.values(fruits));

// Array.isArray(): Checks if a value is an array.
console.log(Array.isArray(fruits));
const drinks = ['soft drinks', 'hard drinks'];

// concat(): Merges two or more arrays.
const combined = fruits.concat(drinks);
console.log(combined);

// flat(): Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const mixedArrs = [1, 2, ['color', true], ['undefined', 'hello']];
const flattened = mixedArrs.flat();
console.log(flattened);

// includes(): Determines whether an array includes a certain value among its entries, returning true or false.
console.log(fruits.includes('apple'));

// indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(flattened.indexOf('hellooooooo'));

// pop(): Removes the last element from an array and returns that element. 
console.log(flattened.pop());

// shift(): Removes the first element from an array and returns that removed element. 
console.log(flattened.shift());

// unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array. 
console.log(flattened.unshift('cars', 200, ['javascript', 'html', 'css']));
console.log(flattened)


