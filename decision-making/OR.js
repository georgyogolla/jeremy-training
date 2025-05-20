
//        OR (||)
// (pipe character above enter key)
// If one side is true, the whole thing is true

// Only one side needs to be true;
1 !== 1 || 10 === 10; // true
10/2 === 5 || null; // true
0 || undefined; // false -  both 0 and undefined are falsy values

// OR(||) with (if)
let age = 76;
if(age < 6 || age >= 65){
    console.log("You get in for free");
} else {
    console.log("There will be Kshs. 1000 fee")
};