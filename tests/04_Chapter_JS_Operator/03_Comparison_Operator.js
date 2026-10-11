// Comparison operators compare two values and return a Boolean result: true or false.

let age = 29;

console.log(age > 18);  // true
console.log(age < 18);  // false

5 === 5    // true
5 === "5"  // false

5 !== 3    // true
5 !== "5"  // true

// == loose equality; JavaScript may convert types before comparing.
// === strict equality; it does not convert types to make them match.

console.log(5 == "5");   // true
console.log(5 === "5"); // false