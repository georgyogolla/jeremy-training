// In JavaScript, global scope is the widest scope available. 
// Variables declared in global scope are accessible from anywhere in your code, whether it's inside functions, conditional statements, loops, or other blocks of code.

let name = "Jeremy"; // globally scoped variable
function greetings(age){
    // name is accessible within this function because it is a globally scoped variable
    return `Hello, my name is ${name} and i am ${age} years old`;
};
console.log(greetings(20));