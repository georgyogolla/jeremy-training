// Unlike global and local scopes, which are defined by functions or global context, block scope is created within specific code blocks, such as conditional statements (if, else, switch) and loops (for, while).

// Variables declared in block scope are confined to that block, offering a high degree of isolation.
if(true){
    let name = "Joshua";
    console.log(name)// Joshua
};
console.log(name);// name is not defined outside the if block