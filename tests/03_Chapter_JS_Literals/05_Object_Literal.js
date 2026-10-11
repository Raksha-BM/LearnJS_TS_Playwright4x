// An object literal is a way to create an object directly 
// by writing its properties inside curly braces {}.

let person = {
    name: "Stephen",
    age: 32,
    city: "New York"
};   // Here, { name: "Stephen", age: 32, city: "New York" } is the object literal.
/**
 * { ... } → creates the object using object literal syntax.
 * name, age, city → property keys.
 * "Stephen", 32, "New York" → property values.
 */

// Object literal properties can contain different data types.
let user = {
    name: "Stephen",          // String
    age: 32,                 // Number
    isTester: true,          // Boolean
    middleName: null,        // Null
    skills: ["JavaScript", "Playwright"] // Array
};

// You can also use an empty object literal:
let person1 = {};

// If Object key contains space, then it should be enclosed within the quotes.
let person2 = {
    "full name": "Stephen Hawking"
};

console.log(person2["full name"]);