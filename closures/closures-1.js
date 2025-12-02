// The word "closure" literally means a "bond" or "enclosure." Think of it like keeping a variable safely locked away, just like storing something inside a box.

// Even though the box is closed, you can still use its contents when needed. This is why it's called a closure: because you keep a function's variables enclosed in such a way that, even if the outside world cannot access them directly, the function itself can still use them whenever required.

var num1 = 2;
var num2 = 3;

function sum() {
  return function () {
    return num1 + num2;
  };
}
const res1 = sum();
// console.log(res1());

var num3 = 4; // globally scoped variable
function sum2() {
  var num4 = 3; // function scope
  return function () {
    // var num5 = 6;
    // console.log(num4);
    return num3 + num4;
  };
}

var nums = sum2();
console.log(nums());

// Creating Private Properties with Closures
function bankAccount(initialBalance) {
  var balance = initialBalance;
  return function () {
    return balance;
  };
}
var account = bankAccount(100000);
console.log(account());

// Understanding Closure Mechanics
var nums1 = 4;
function total() {
  var sums2 = 2;
  var sums = 3;
  return function () {
    return sums;
  };
}
var totalled = total();
console.log(totalled());

// A closure is only needed to use variables from an outer scope. Since this is the very first-level outer scope (meaning the global scope) and it's not inside any function, the sum function is already capturing it in its own scope. So no additional closure is created.
var num1 = 2;
function sum() {
  var num2 = 3;
  return num1 + num2;
}
console.dir(sum);

// Self-Contained Closures
(function () {
  var s1 = 5;
  var s2 = 10;
  function sumAll() {
    return s1 + s2;
  }
  console.log(sumAll());
})();

//  a closure doesn't really hold the values themselves. It holds a reference to the variables.
