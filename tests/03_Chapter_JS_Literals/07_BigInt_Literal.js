// A BigInt literal is an integer written directly in your code with the letter n at the end.

let a = 123n; // The n at the end tells JavaScript that the value is a BigInt, not a regular Number.
console.log(a);        // 123n
console.log(typeof a); // "bigint"

let a1 = 100n;
let b = 9007199254740993n;
let c = 0n;
let d = -50n;
console.log(typeof a1); // "bigint"

let population = 9_000_000_000n;
console.log(population);

// You cannot use a decimal point in a BigInt literal
let num = 12.5n; // SyntaxError

// Don't mix BigInt and Number in arithmetic
console.log(10n + 5);
// TypeError