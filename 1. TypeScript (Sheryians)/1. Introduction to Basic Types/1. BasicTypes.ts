// 21:06 - 31:12 - Introduction to Basic Types 
// _________________________________________________________

// Basic Types
// 1. Primitive Types - Number, String, Boolean
// 2. Arrays
// 3. Tuples
// 4. Enums
// 5. Any, Unknown, Void, NUll, Undefined, Never
// _________________________________________________________

// 31:13 - 34:08 - Primitive Types  

// Numbers
let a = 12; // Num
let abcd = false; // Boolean --> Boolean means value comes in True & False
let c = "King" // String

// 34:09 - 37:21 - Arrays 

let arr = []; // Array

// 37:22 - 40:20 - Tuples

let m: [string, number] =["Raj", 22]; // Tuple

// 40:21 - 45:17 -  Enums // Enumerations

enum UserRoles {
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin"
}

UserRoles.ADMIN;

// 45:18 - 55:39 - Any, Unknown, Void & More

let d: number; // Setting d as number
d = 4; // instead of using let d = 4.

let f // By-default type any

// unknown is a TypeScript type that can hold any value, but unlike any, you must perform type checking or type assertion before using it. This makes it a safer alternative to any.

// Void

// If there is a function and it not returns anything, then we can use void as return.

function xyz(): void{
    console.log ("Hey");
} // it returns void means it not return anything

// if any function return any number i.e 12 then
function show(): number {
    return 5;
}

// if function returns string i.e Raj then
function nam() : string {
    return "Raj";
}

// Null
let k:null = null;
let v = null;

// Undefined
let g: undefined; // if we not assign any value to variable then its undefined

// Never --> Not return anything.

function http() : never {
    while (true) {}
}
http();
console.log ("Hello"); // This will not executes because upper function not returns anything after execution.