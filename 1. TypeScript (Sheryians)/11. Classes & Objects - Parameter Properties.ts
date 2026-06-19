// 02:22:05 - 02:26:08 - Classes & Objects : Parameter Properties


// Parameter properties in TypeScript are a shorthand feature that allows you to declare and initialize class properties directly in the constructor parameters by adding an access modifier (public, private, protected) or readonly to the parameter.

// Parameter Properties --> Declaring variables and those values with types in constructor parameter
class User1 {
    constructor (public name: string, public age: number, public gender?: string) { // Using question mark after gender for its for optional.

    }
}

let u2 = new User1 ("Harsh", 25, "Male")
let u3 = new User1 ("LagBataq", 18,)