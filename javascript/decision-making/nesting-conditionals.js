
// NESTING CONDITIONALS 
let password = "cat dog";
// validate password 
if(password.length >= 6){
    if(password.indexOf(' ') !== -1){
        console.log("Passwords cannot contain spaces");
    } else {
        console.log("Valid password");
    }
} else {
    console.log("Password too short");
};