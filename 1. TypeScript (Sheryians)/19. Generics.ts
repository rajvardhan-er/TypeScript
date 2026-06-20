// 03:16:03 - 03:37:20 - Generics

// Generics
// Generic functions
// Generic interfaces
// Generic Classes

//_______________________________________________________________

// Hume ek function banana hai jo ki accept karega koi bhi value and use print karega.

function logger (a: any) { // Because of using any, a can get any value. ----------------> But using 'any' is BAD PRACTICE
    console.log (a)
}

logger("Hey");
logger(12);
logger(true);

//_______________________________________________________________

// Hum ek function ko use karte waqt bata sakte hai ki function arguments ko kis type se treat kare------------------------------------------> BEST PRACTICE <----------------------

function abcd <T> (a:T){
    console.log (a)
}
abcd <string> ("Raj"); // 'String' as 'T' as 'a'
abcd <number> (12); // 'number' as 'T' as 'a'

// Example

function abc <T> (a: T, b: string, c: number) {
    console.log (a,b,c)
}
abc <string> ("Halua", "Puri", 4)