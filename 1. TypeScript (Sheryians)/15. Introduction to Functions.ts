// 02:50:10 - 03:03:04 - Introduction to Functions

// Functions
// Function Types
// Optional and default parameters
// Rest Parameters
// Overloads

// ______________________________________________________________

// Function --> A function is a reusable block of code designed to perform a specific task. It can accept input values (parameters), process them, and optionally return a result.
//              A function is a block of code that runs when it is called.

function ABCD (): string{  // THIS FUNCTION RETURN THE STRING
      return "Hey"; // Hey is the String
}

function xyz(): void{ // void: THIS FUNCTION NOT RETURNS ANYTHING
    // return "Hey";  --> Type 'string' is not assignable to type 'void'.
}
//__________________________________________________________________

//Function Types

function abcd (name: string, cb: (value: string)=> void){

}
abcd ("Raj", (value: string) => {
    console.log(value);
})

//______________________

function abcdef (name: string, age: number, cb: (arg: string) => void) {
    cb("Hey");
}

abcdef ("Raj", 24, (arg: string)=> {
    console.log ("abcd");
})