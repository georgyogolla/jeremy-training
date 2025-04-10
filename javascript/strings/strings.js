// In JavaScript,
// Strings are pieces of text,
// or strings of characters.
// We wrap them in quotes

// let bad = "this is wron';
// console.log(bad);SyntaxError: Invalid or unexpected token

// STRINGS ARE INDEXED
let firstName = 'ziggy';
// strings have a length property:
console.log(firstName.length);

// Access individual characters using index:
console.log(firstName[0]);
let firstChar = firstName[0];
console.log(firstChar);

// STRING METHODS
// Strings come with a set of built-in methods,
// which are actions that can be performed on or
// with that particular string.
// We can do things like...
// Searching within a string
// Replacing parts of a string
// Changing case (upper/lowercase)

// string.method()
// Changing Case
let msg = "change this to upper case";
console.log(msg.toUpperCase());
let msg2 = "CHANGE THIS TO LOWER CASE";
console.log(msg2.toLowerCase());

// trim
let greeting = "   We want to get rid of the white space";
console.log(greeting);
console.log(greeting.trim());


// thing.method(arg)
// Some methods accept arguments that modify their behavior.
// We pass these arguments inside of the parentheses.
// indexOf(arg)
let fee = "schoolfee";
let firstIndex = fee.indexOf("p");
console.log(firstIndex);

// slice();
let school = fee.slice(0, 6);
console.log(school);
let extractFee = fee.slice(6);
console.log(extractFee);

// replace();
let laughter = "tehehe! This is so funny. tehehe";
let replaceFirstTehehe = laughter.replace("tehehe", "haha");
console.log(replaceFirstTehehe);
let replaceAllTehehe = laughter.replaceAll("huu", "haha");
console.log(replaceAllTehehe);
