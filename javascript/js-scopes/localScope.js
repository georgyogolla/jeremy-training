// Local scope in JavaScript is like a private room within a building – it's an enclosed space where variables are only accessible from within that specific room.

// When you declare a variable in local scope, it is limited in visibility to the block of code, function, or conditional statement in which it is defined.

// Variables in local scope are protected from interference or modification by code outside their scope, providing a level of isolation.

function principalsRoom(){
    let principalName = "Kennedy";
    return principalName;
};
console.log(principalsRoom());// "Kennedy"
// console.log(principalName); principalName is locally scoped within the function and can't be accessed outside the function 

// Variable shadowing occurs when you declare a variable with the same name inside a local scope, effectively "hiding" the variable with the same name in a higher scope.

let fruit = "orange";
function myFruit(){
    let fruit = "banana";
    // console.log(fruit);
    return fruit;
};
const result = myFruit(); // banana
console.log(result)
console.log(fruit); // orange