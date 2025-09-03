// Function Expressions
// In JavaScript, a function expression is a way to store functions in variables. For example,
let square = function(n){
    return n * n;
};
console.log(square(4));

// In JavaScript, a function can be defined based on a condition.
//  For example, the following function definition defines myFunc only if num equals 0:
let myFunc;
let num = 1;
if(num === 1){
    myFunc = function(obj){
        return obj.make = "BMW";
    }
};
const myCar = {
    color: "Black",
    Engine: "3L"
};

const car = myFunc(myCar);
console.log(car);