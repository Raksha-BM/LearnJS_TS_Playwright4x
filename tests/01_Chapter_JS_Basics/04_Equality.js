/**
 * Loose equality ( == )	
 * Converts the data types before comparing values. This process is called type coercion.
 * Strict equality ( ===)	
 * JavaScript doesn't convert the type. It checks for value and data type to be same **/

console.log( 1 == true); //Correct
console.log( 1 === true); //Incorrect as 1 is of type number and true is boolean 

console.log( 1 == "1"); //Correct
console.log( 1 === "1"); //Incorrect as 1 is of type number and "1" is String type 