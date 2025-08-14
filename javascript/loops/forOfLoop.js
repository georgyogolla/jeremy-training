// The for...of loop is used to iterate over iterable objects like arrays, strings, or sets. It directly iterate the value and has more concise syntax than for loop.

// Syntax

// for (let value of iterable) {
//     // Code to execute
// }

const arr = [1, true, "hello", NaN, undefined, null, Number];
// for(let variable name of iterable(Array, string)){
    // do something
// }
for(let element of arr){
    console.log(element);
};