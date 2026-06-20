// Optional and default parameter

// Optional Parameter
function raj (name: string, age: number, gender?: string){

}

// calling the function
raj ("Raj", 23, "male");
raj ("Hem", 23); // age is optional 

// Default Parameter

function Human (name: string, age: number, gender: string = "not to be disclosed"){
    console.log (name, age, gender);
}

Human ("Ram", 22, "Male"); // we use gender: string = "not to be disclosed" so --> gender will not be disclosed in console