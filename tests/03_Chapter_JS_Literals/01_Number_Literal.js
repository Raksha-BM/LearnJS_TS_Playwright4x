// Literal is the value assigned directly to a variable. Basically the variable value.
// Unlike java, in JS we dont have floating point numbers

let age = 29;          // integer
let height = 5.1;      // floating-point
let price  = 99.99;     // floating-point

console.log("age is ",age ,typeof age);    // "number"
console.log("height is ",height,typeof height); // "number"
console.log("price is",price,typeof price);  // "number" // ',' Separate arguments to console.log()
console.log("price is"+price+typeof price);  // "number"  //Combine/concatenate values
let bigNum = BigInt(44);
console.log(bigNum ,typeof bigNum);  