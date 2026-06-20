// 03:37:21 - 03:41:33 - Modules

// Modules
// Exporting and Importing Modules
// Default Exports

/*___________________________________________________________________________________________________
1. Modules

Module = Ek alag file jisme code (functions, variables, classes, interfaces, etc.) organize karke rakha jata hai.

TypeScript/JavaScript mein jab kisi file mein import ya export use hota hai, to woh file module ban jati hai.

Benefits:

Code organized rehta hai.
Reusability badhti hai.
Naming conflicts kam hote hain.
Large projects manage karna aasaan hota hai.

Example:

math.ts

export const PI = 3.14;

export function add(a: number, b: number) {
    return a + b;
}

app.ts

import { PI, add } from "./math";

console.log(PI);
console.log(add(10, 20));

____________________________________________________________________________________________ */

/*
2. Exporting and Importing Modules

Export

Kisi variable, function, class, ya interface ko dusri files mein use karne ke liye export karte hain.

export const username = "Raj";

export function greet() {
    console.log("Hello");
}

Ya end mein bhi export kar sakte hain:

const username = "Raj";

function greet() {
    console.log("Hello");
}

export { username, greet };
Import

Export ki hui values ko dusri file mein lane ke liye import use karte hain.

import { username, greet } from "./user";

console.log(username);
greet();

Curly braces {} required hain jab named exports import karte ho.

Renaming Imports
import { greet as sayHello } from "./user";

sayHello();

Yahaan greet ko local naam sayHello diya gaya hai.


_____________________________________________________________________________________________________*/

/*
Default Export

Jab module mein ek main cheez export karni ho tab default export use karte hain.
Ek file mein sirf 1 default export ho sakta hai.


export default function greet() {
    console.log("Hello");
}

Import:

import greet from "./user";

Default export import karte waqt {} nahi lagte.
Import karte waqt naam kuch bhi rakh sakte ho.

import sayHello from "./user";
*/