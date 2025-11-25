// A function scope is created when you declare a variable within a function.
// Variables declared inside a function are accessible only within that function and are not accessible from outside.

function favFruit() {
  let myFavFruit = "Banana";
  console.log(myFavFruit);
  //   Accessible within this function
}

favFruit();
// console.log(myFavFruit); // Not accessible outside the function
