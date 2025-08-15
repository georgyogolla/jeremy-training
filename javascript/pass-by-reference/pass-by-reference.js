// When an object is created in JavaScript, it is stored in a memory space, and the variable associated with it stores the memory address or reference where the object is stored.

// If you assign this object variable to another variable, it does not copy the object. 
// Instead, it copies the reference to the object. Both variables now point to the same memory space, which means changes through one variable are reflected when accessing the object through the other variable.


const ob = {name: "John", age: 20, gender: "male", race: "black"};

// const obCopy = ob;

// obCopy.height = "5 inches";

// To ensure that both Objects do not point to the same address in memory, use shallow copy or deep copy.
// shallow copy 

const obShallowCopy = {...ob};
obShallowCopy.height = "5 inches";
console.log(obShallowCopy);
console.log(ob);
console.log("---Passs By Reference in Arrays---");
// Pass By Reference in Arrays
const arr = [1, 2, 3, 4];
arr.push(true);
// const arrCopy = arr;
// console.log(arrCopy);
// console.log(arr)

// Solution using shallow copy

const arrCopy = [...arr];
arrCopy.push("hello");
console.log(arrCopy);
console.log(arr);

