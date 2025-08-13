
// TERNARY OPERATOR
// Syntax
// condition ? expIfTrue: expIfFalse


// The conditional (ternary) operator is the only JavaScript operator that takes three operands: 
// a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), 
// and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.

const age = 26;
const beverage = age >= 21? "Adult": "Underage";
console.log(beverage);

// Conditional chains
// The ternary operator is right-associative, which means it can be "chained" in the following way, similar to an if … else if … else if … else chain:
function example() {
    return condition1 ? value1
      : condition2 ? value2
      : condition3 ? value3
      : value4;
  }
  