// 03:10:08 - 03:16:02 - Functions : Overloading

// ts function signature
// This example tells how's the function overloading works
function abcd (a: string) : void;
function abcd (a: string, b: number): number;

function abcd (a: any, b?: any){
    if (typeof a === "string" && b === undefined){
        console.log("Hey");
    }

    if (typeof a === "string" && typeof b === "number"){
        return 123;
    }

    else throw new Error ("Something is Wrong");
}

abcd("12");
abcd("Hey", 12);