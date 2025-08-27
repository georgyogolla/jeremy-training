// Declaring javascript regular functions
function greet(){
    console.log("Hello Wolrd!!");
};
greet();

// functions arguments and parameters
function greetSomeone(name, age){
    console.log(`Hello, my name is ${name} and I am ${age} years old!`);
}
greetSomeone("Jeremy", 20);
greetSomeone("Joshua", 25);

// function that adds two numbers
console.log("---ADD TWO NUMBERS---");
// function add(num1, num2){
//     let sum = num1 + num2;
//     console.log(`Sum of ${num1} and ${num2} is : ${sum}`);
// };
// add(20, 45);

function add(num1, num2){
    // let sum = num1 + num2;
    console.log(`Sum of ${num1} and ${num2} is : ${num1 + num2}`);
    // return (`Sum of ${num1} and ${num2} is : ${num1 + num2}`);
};
add(20, 45);

// return statement in javascript
function square(x){
    return x * x;
};
const squared = square(4);
console.log(squared);

// The return Statement Terminates the Function
// Any code written in the function after the return statement is not executed. For example,
console.log("--- Terminating function execution using return statement---");
function terminatingExecution(){
    console.log("This is the first exeution");
    return "This where execution is terminated";
    console.log("This won't be executed"); 
}
const termination = terminatingExecution();
console.log(termination);