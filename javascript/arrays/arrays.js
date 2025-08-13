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
console.log(flattened);

// slice(): Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
const nums = [1, 2, 3, 4, 5];
const slicedNums = nums.slice(1, 4);
console.log(slicedNums);

// using slice to make a copy of an array
const numsCopy = nums.slice();
console.log(numsCopy); 

// The toReversed() method is simple to use.
// It creates a reversed version of the array without modifying the original one. 
// Here’s the basic syntax:

const numbers = [10, 20, 30, 40, 50];
const reversedNumbers = numbers.toReversed();
console.log(reversedNumbers);
console.log(numbers);

// toSpliced: Create New Arrays by Splicing Without Mutation
// const newArray = array.toSpliced(start, deleteCount, item1, item2, ...);
const fruit = ['apple', 'banana', 'cherry', 'date'];
// Create a new array by removing 'banana' and adding 'blueberry' without changing the original
const newFruit = fruit.toSpliced(1, 1, 'blueberry');
console.log(newFruit);
console.log(fruit);


// The with method is a new and powerful tool introduced in JavaScript to help replace elements in an array without changing the original array.
const movies = ['peaky blinders', '24 hours', 'originals'];
const newMovie = movies.with(2, 'Vampire diaries');
console.log(newMovie);







