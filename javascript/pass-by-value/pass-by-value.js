// Pass by value means when a variable is assigned to another variable, the value stored in the variable is copied into the new variable. 
// They are independent of each other, each occupying its own memory space.
// Javascript uses pass by value on primitive data types e.g Numbers, Strings, null, undefined, BigInt, Symbol.


let a = 10;
let b = a;

a = 20;

console.log(a); // Outputs: 20
console.log(b); // Outputs: 10
// In this example, we first declare a variable a and set it equal to 10. 
// We then declare another variable b and set it equal to a. At this point, both a and b are 10. 
// However, when we change the value of a to 20, b remains 10 because the value was passed by value - meaning the value 10 was copied to b when it was declared, and changes to a do not affect b.