// The for...in loop is used to iterate over the properties of an object. It only iterate over keys of an object which have their enumerable property set to “true”.

// Syntax

// for (let key in object) {
//     // Code to execute
// }

const ob = {name: "person1", gender: "uknown", age: "20"};
for(let key in ob){
    console.log(key,":", ob[key] );
};

console.log("----PRINT VALUES----");
for(let key in ob){
    console.log(ob[key] );
};

