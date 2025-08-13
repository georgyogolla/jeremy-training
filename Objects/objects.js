// An object in JavaScript is a data structure used to store related data collections. It stores data as key-value pairs, where each key is a unique identifier for the associated value. Objects are dynamic, which means the properties can be added, modified, or deleted at runtime.

// 1. Creation Using Object Literal
// The object literal syntax allows you to define and initialize an object with curly braces {}, setting properties as key-value pairs.
const subaru = {
    newModel: 'imprezza',
    yearOfManufacture: 2018,
    oririnalColor: 'grey',
    2020: 'year of modification'
}

console.log(subaru);

//2. Creation Using new Object() Constructor
const lenovoThinkPad = new Object();
lenovoThinkPad.color = "black";
lenovoThinkPad.model = "T480S";
lenovoThinkPad.RAM = "16GB";
lenovoThinkPad.storage = "512SSD";
lenovoThinkPad.price = "Kshs.40000";
console.log(lenovoThinkPad);

// 1. Accessing Object Properties
// You can access an object’s properties using either dot notation or bracket notation
console.log(`yearOfManufacture: ${subaru.year}`);
console.log(`Lenovo Thinkpad ${lenovoThinkPad.model} Costs: ${lenovoThinkPad.price}`);
// using brackets to access properties in an object 
console.log(lenovoThinkPad["storage"]);

// 2. Modifying Object Properties
// Properties in an object can be modified by reassigning their values.
lenovoThinkPad.storage = "256SSD";
console.log(lenovoThinkPad);

// 3. Adding Properties to an Object
// You can dynamically add new properties to an object using dot or bracket notation.
const meals = {breakfast: "tea"};
meals.lunch = "ugali";
meals.supper = "Rice";
console.log(meals);

// 4. Removing Properties from an Object
// The delete operator removes properties from an object.
const newCar = {model: "Tesla", color: "Red", year: 2020};
delete newCar.color;
console.log(newCar);

// 5. Checking if a Property Exists
// You can check if an object has a property using the in operator or hasOwnProperty() method.
const programmingLanguages = {
    python: "data science",
    javascript: "web applications",
    java: "android",
    c: "systems applications", 
    123: "Js Object's Keys are always strings"
}

console.log("python" in programmingLanguages);
console.log(programmingLanguages.hasOwnProperty("Golang"));

// 7. Merging Objects
// Objects can be merged using Object.assign() or the spread syntax { ...obj1, ...obj2 }.

const mergedCars = {...subaru, ...newCar};
console.log(mergedCars);

const assignedObjects = Object.assign({}, programmingLanguages, meals, subaru, newCar);
console.log(assignedObjects);

// 8. Object Length
// You can find the number of properties in an object using Object.keys().
console.log(Object.keys(assignedObjects).length);

// Recognizing a JavaScript Object
// To check if a value is an object, use typeof and verify it's not null.
console.log(typeof assignedObjects === "object" && assignedObjects !== null);

// Deleting a property in an Object
const newPerson = {
    age: "20",
    race: "Black",
    height: "5 inches",
    eyeColor: "Blue",
    country: "Kenya",
    gender: "male"
}
console.log(delete newPerson.eyeColor);
console.log(newPerson);

// checking for length in an Object
console.log(Object.keys(newPerson).length);
console.log(Object.values(newPerson).length);




