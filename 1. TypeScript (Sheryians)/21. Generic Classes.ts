// Generic Classes

class BottleMaker <T>{
    constructor (public key: T) {}
}

let b1 = new BottleMaker <string> ("Hey");
let b2 = new BottleMaker<number>(12);
console.log(b1, b2);

//______________________________________________

function abcd <T> (a: T, b:T): T {
    return "Hey" as T;  // --> Correct way
    // return <T> "Hey";   // --> Correct way
}

abcd <string> ("Hey", "Hello");