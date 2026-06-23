// 03:41:34 - 03:47:20 - Type Assertions

// Type Assertion
// Type Casting
// Non-null assertion operator



//Type Assertion --> Type assertion ka mtlb batana typescript ko ki particular cheej ka type kya hai.  --> ye aap tab karte ho jab aap typescript se jada us value ka type jante ho

let a: any = 12;
// (a as number). Treating a as number
// (a as string). Treating a as string

// (<number>a). Treating a as number
// (<string>b). Treating a as string

//________________________________________________________________________________________________________

//TypeCasting

let b = Number("12");
console.log(b)

//________________________________________________________________________________________________________

// Non-null assertion operator

//variable! --> This variable is not null or not undefined

let c: null | undefined | string;
c= "Hey";

// c!. ---> Now this is not null and not undefined and it show string related methods