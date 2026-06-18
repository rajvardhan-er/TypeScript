// 58:36 - 01:10:55 - Introduction to Interfaces & Type Aliases

// Interfaces and Type Aliases
//  - Defining Interfaces  --> Using 'interface' keyword
//  - Using interfaces to define object shape
//  - Extending interfaces
//  - Type Aliases
//  - Intersection Types
// ________________________________________________

// Interface --> An interface describes the shape (face/structure) of an object.

interface User {
    name: string, // name store in string
    email: string, // email stores in string
    password: string // password also store in string
}

function getDataOfUser (obj: User) {

}

getDataOfUser({name: "King", email: "ro@hit", password: "12345"})

// _______________________________________________________________________________

// Object and Interface
// const object = {
//     name: "Bharat",
//     email: "Bharat@v.com",
//     password: "12345"
// }

interface user {
    name: string,
    email: string,
    password: string,
    age: string,
    gender? : string  // ? for optional.
}

function abcd (obj: user){} // passing object user to function abcd

abcd({
    name: "Rohit",
    email: "rk@com",
    password: "12345",
    age: "50"
});

// ___________________________________________________________________________________

// Extending interfaces --> Between two interfaces
// Same interfaces of same name can be merged in typescript

interface User1{
    name: string;
    email: string;
    password: string;
}

interface Admin extends User1 {
    admin: boolean;
}

function abcde (obj: Admin){
    obj.admin;
} 