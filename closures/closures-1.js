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
console.log(res1());
