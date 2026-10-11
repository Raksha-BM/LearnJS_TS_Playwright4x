/**
 * null means an intentionally empty or absent value.
 * typeof null returns "object" — a well-known JavaScript quirk.
**/
//Special Values
// 1. null
let middleName = null;

console.log(middleName);
console.log(typeof middleName);

// 2. undefined ( A value is missing or hasn't been assigned )
let age;
console.log(age); // undefined
console.log(typeof age);

// 3. NaN (Not a Number )
let result1 = Number("hello");
console.log(result1); // NaN

console.log(typeof NaN); //Number
// JavaScript's Number type represents
//  numeric values, including integers, decimals, Infinity, and NaN.

let result2 = BigInt("hello");
console.log(result1); // SyntaxError: Cannot convert hello to a BigInt

/**
 * Number() can represent integers and decimals. If conversion fails, it returns NaN.
 * BigInt() represents integers of arbitrary size. If the input string doesn't represent
 *  a valid integer, it throws an error instead.
 */

console.log(Number("")); // 0
console.log(BigInt("123")); // 123n
console.log(BigInt("12.5")); //Syntax Error

// 4. Infinity and -Infinity
console.log(1 / 0);  // Infinity
console.log(-1 / 0); // -Infinity
console.log(typeof 1/0); //NaN
/**Why NaN? 
 *  JavaScript evaluates typeof before division because typeof has higher precedence than /.
 *  console.log((typeof 1) / 0);
**/
console.log(typeof(Infinity)) //Number


