/** Logical operators help us combine conditions or reverse a condition.
 * JavaScript has three main logical operators:
 * AND ( && ) -> Both conditions must be true.
 * || ( OR ) -> At least one condition must be true.
 * ! ( NOT ) -> Reverses a condition's truth value.
**/ 

let age = 29;
let hasID = true;

console.log(age >= 18 && hasID); // true
console.log(!true);

console.log(true || false);

// Why? 0 is falsy, so JavaScript stops immediately
//  and returns 0. It doesn't evaluate the second operand.
console.log(0 && "Hello"); // 0
console.log(0 || "Hello"); // Hello

console.log("A" && "B" && "C"); // C
console.log("A" || "B" || "C"); // A

//  && → returns the first falsy value, or the last value if all are truthy.
// || → returns the first truthy value, or the last value if all are falsy.