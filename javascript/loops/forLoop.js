// Loops in JavaScript are used to reduce repetitive tasks by repeatedly executing a block of code as long as a specified condition is true. This makes code more concise and efficient.

// Suppose we want to print 'Hello World' five times. Instead of manually writing the print statement repeatedly, we can use a loop to automate the task and execute it based on the given condition.


// The for loop repeats a block of code a specific number of times. 
// It contains initialization, condition, and increment/decrement in one line.
// for (initialization; condition; increment/decrement) {
    // Code to execute
// }

// for loop that prints "hello world" 10 times
for(let i = 2; i < 5; i++){
    // execute code
    console.log("Hello world!!");
};

// example 2
for(let i = 1; i <= 3; i++){
    console.log("Count : ", i);
};
console.log("-------------------------------");
for(let i = 1; i < 3; i++){
    console.log("Count : ", i);
};

for (let i = 0; i < 4; i += 1){
    console.log(i)
};

// Reverse Loop
// A for loop can iterate “in reverse” by initializing the loop variable to the starting value, 
// testing for when the variable hits the ending value, 
// and decrementing (subtracting from) the loop variable at each iteration.

console.log("----Reverse Looping----");
const items = ['apricot', 'banana', 'cherry'];
for(let i = items.length - 1; i >= 0; i -= 1){
    console.log(`${i}. ${items[i]}`);
};

// Looping Through Arrays
// An array’s length can be evaluated with the .length property. 
// This is extremely helpful for looping through arrays, as the .length of the array can be used as the stopping condition in the loop.
console.log("----Looping Through Arrays----");
const arr = [1, true, NaN, undefined, null, "hello"];
for(let i = 0; i < arr.length; i++){
    console.log(`${i} - ${arr[i]}`);
};

// Break Keyword
// Within a loop, the break keyword may be used to exit the loop immediately, continuing execution after the loop body.
// Here, the break keyword is used to exit the loop when i is greater than 10.
console.log("----Break Keyword----");
for(let i = 0; i < 99; i++){
    if(i > 10){
        break;
    }
    console.log(i);
};

// Nested For Loop
// A nested for loop is when a for loop runs inside another for loop.
// The inner loop will run all its iterations for each iteration of the outer loop.
console.log("----Nested for loop----")
for(let outer = 0; outer < 2; outer += 1){
    for(let inner = 0; inner < 3; inner += 1){
        console.log(`Outer: ${outer}- Inner: ${inner}`);
    }
}

for(let row = 1; row <= 3; row++){
    for(let col = 1; col <= 3; col++){
        console.log(`${row} X ${col} = ${row * col}`);
    }
}