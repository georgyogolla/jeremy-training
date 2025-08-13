
// Run code if a given condition is true 
// Syntax
// if(condition){
//     do something
// }

let rating = 3;
if(rating === 4){
    console.log("NOT THE EXPECTED RESULT");
} else if(rating === 5){
    console.log("NOT CORRECT");
} else if(rating === 6){
    console.log("INCORRECT RESULT");
} else {
    console.log("DID NOT MEET THE EXPECTATIONS");
};


let pass = "tacotuesday";
if(pass.length >= 6 && pass.indexOf(' ') === -1){
    console.log("Valid Pass");
} else {
    console.log("Invalid Pass");
};