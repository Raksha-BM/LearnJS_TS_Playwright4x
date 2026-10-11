/** in JS, we have 3 keywords to declare variables
 * 
 var [ old way ]
 let 
 const
 
**/
//Var : Reassignment and redeclaration are possible in the same scope
var name = "Java" // declaration 
var name = "JavaScript" //Redeclaration
name = "Python"; //Reassignment
console.log(name)

/* OUTPUT:
Python
*/

//let 
/* let cannot be redeclared in the same scope. */
let name = "Java" //Redeclaration
name = "JavaScript" //Reassignment [Possible]

let name = "Java"
let name = "JavaScript" // ❌ Redeclaration not allowed 

const test = () => {
let name = "Java"
}

let name = "JavaScript"

/*Here,
Outside function
 name → "JavaScript"

Inside function
name → "Java"
*/

/* const : const cannot be reassigned
const cannot be redeclared in the same scope. */
const name = "Java";
name = "JavaScript"; // ❌ Reassigning not allowed

//Case2 
const name = "Python"  

function test() {
    const name = "Ruby" 
    const name = "C++"  // ❌ not allowed
}