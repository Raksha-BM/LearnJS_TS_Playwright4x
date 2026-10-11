/** 
 * A string literal is the text you write directly in your code, enclosed in quotes.
 * JavaScript supports three main ways to write string literals.
**/

// 1. Double quotes 
let brand = "Samsung";

// 2. Single quotes
const copyingBrand = "Apple";

// 3. Backticks ` ` 
// Backticks let you insert variables using ${...}. 
// This is called template literal interpolation.

let product = "Samsung S26 FE";
let greeting = `Hello, ${product}!`;

console.log(greeting);

let message1 = "It's a beautiful day";
console.log(message1)
let message2 = 'It\'s a beautiful day';
console.log(message2);
