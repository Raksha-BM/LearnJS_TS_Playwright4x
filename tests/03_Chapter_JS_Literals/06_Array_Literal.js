/**
 * An array literal is a way to create an array directly by
 *  placing values inside square brackets [], separated by commas.
 */

let fruits = ["Apple", "Banana", "Mango"]; 
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Mango

console.log(fruits.length); // 3
console.log(typeof fruits); // "object"
// To specifically check whether a value is an array
console.log(Array.isArray(fruits)); // true

// Yes! JavaScript arrays can contain strings, numbers, Booleans, null, objects, and even other arrays.
let details = [
    "Stephen",
    32,
    true,
    null
];

console.log(details[0]); // Stephen
console.log(details[1]); // 32
console.log(details[2]); // true
console.log(details[3]); // null

// An array can also be empty:
let items = [];