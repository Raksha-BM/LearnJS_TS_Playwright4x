let pattern = /hello/;

console.log(pattern.test("hello Raksha")); // true
console.log(pattern.test("Good morning")); // false

let pattern = /\d/;  // \d matches a digit from 0 to 9.

console.log(pattern.test("abc5")); // true
console.log(pattern.test("hello")); // false

let pattern1 = /\d+/; // + means one or more occurrences of the preceding pattern.
// Match one or more digits

console.log(pattern1.test("Age 29")); // true
console.log(pattern1.test("Hello")); // false

let pattern3 = /^Hello/; // ^ matches the beginning of the string when the multiline flag isn't used.

console.log(pattern3.test("Hello Raksha")); // true
console.log(pattern3.test("Hi Hello")); // false

let pattern4 = /hello/i; //The i flag makes matching case-insensitive.
console.log(pattern4.test("HELLO")); // true

let accountPattern = /^ACC\d+$/;
// $ — end of the string.
// ^ — start of the string.
console.log(accountPattern.test("ACC12345")); // true
console.log(accountPattern.test("XYZ12345")); // false
console.log(accountPattern.test("ACC"));      // false 