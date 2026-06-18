// 55:40 - 57:37 - Introduction to Type Inference & Type Annotations

// Type Inference
// Understanding type inference
// Type annotations

// Type Inference --> Variable ko na batana type kya hai, typeScript khud identify kargi type kya hai
let b = 5; // Here the value of b is 5, thats why the type of b is number.

// Annotation --> Giving type to variable
let x: number;

let q: number | boolean | string;
q = 12;
q = true;
q = "Raj"

console.log(q);

// Type Annotations  --> We can also perform type annotations in function
function iconic (a: number, b: string) {}