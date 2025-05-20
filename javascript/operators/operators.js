// JavaScript has both binary and unary operators, and one special ternary operator, the conditional operator. A binary operator requires two operands, one before the operator and one after the operator:
// example
// operand1 operator operand2 e.g 3 + 4

// A unary operator requires a single operand, either before or after the operator:
// operator operand - ++1
// operand operator - 1++

// An assignment operator assigns a value to its left operand based on the value of its right operand. The simple assignment operator is equal (=), which assigns the value of its right operand to its left operand.
// e.g X = 'my name';

// Assignment	x = f()	x = f()
// Addition assignment	x += f()	x = x + f()
// Subtraction assignment	x -= f()	x = x - f()
// Multiplication assignment	x *= f()	x = x * f()
// Division assignment	x /= f()	x = x / f()
// Remainder assignment	x %= f()	x = x % f()
// Exponentiation assignment	x **= f()	x = x ** f()
// Left shift assignment	x <<= f()	x = x << f()
// Right shift assignment	x >>= f()	x = x >> f()
// Unsigned right shift assignment	x >>>= f()	x = x >>> f()
// Bitwise AND assignment	x &= f()	x = x & f()
// Bitwise XOR assignment	x ^= f()	x = x ^ f()
// Bitwise OR assignment	x |= f()	x = x | f()
// Logical AND assignment	x &&= f()	x && (x = f())
// Logical OR assignment	x ||= f()	x || (x = f())
// Nullish coalescing assignment	x ??= f()	x ?? (x = f())

// The left shift assignment (<<=) operator performs left shift on the two operands and assigns the result to the left operand.
let a = 5;
// 00000000000000000000000000000101

a <<= 2; // 20

// The logical AND assignment (&&=) operator only evaluates the right operand and assigns to the left if the left operand is truthy.

let a = 1;
let b = 0;

a &&= 2;
console.log(a);
// Expected output: 2

b &&= 2;
console.log(b);
// Expected output: 0


// The logical OR assignment (||=) operator only evaluates the right operand and assigns to the left if the left operand is falsy.

const a = { duration: 50, title: "" };

a.duration ||= 10;
console.log(a.duration);
// Expected output: 50

a.title ||= "title is empty.";
console.log(a.title);
// Expected output: "title is empty."

const x = {
    get value() {
      return 1;
    },
    set value(v) {
      console.log("Setter called");
    },
  };
  
  x.value ||= 2;


//   The nullish coalescing assignment (??=) operator, also known as the logical nullish assignment operator, only evaluates the right operand and assigns to the left if the left operand is nullish (null or undefined).

const a = { duration: 50};

a.speed ??= 25;
console.log(a.speed);
// Expected output: 25

a.duration ??= 10;
console.log(a.duration);
// Expected output: 50
  