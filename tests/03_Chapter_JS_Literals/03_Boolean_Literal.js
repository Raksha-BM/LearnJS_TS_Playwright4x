// A Boolean represents a value that can be either true or false.

let isStoreOpen = true;
let isProductAvailable = false;

console.log(isStoreOpen); // true
console.log(isProductAvailable);    // false
console.log("Type of isStoreOpen is,",typeof isStoreOpen);  
console.log("Type of isProductAvailable is,",typeof isProductAvailable); 

console.log(Boolean(""));        // false
console.log(Boolean(0));         // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false 
console.log(Boolean(NaN)); // false 