// 03:03:05 - 03:10:07 - Functions: Rest Parameter

// ... rest / spread operator

// Function ke parameter me agar ... lagaya to aap waha par saare diye gaye args (arguments) ko ek hi variable me as an array rakh rahe ho

function sum (...arr: number[]){
    console.log(arr);
}
sum (1,2,3,4,5,6,7,8,9,10);

function friend(...args: string[]){
    console.log(args)
    console.log(args[0])
    console.log(args[1])
}

friend ("Raj", "Ram", "Raghav")

//__________________________________________________________________

var arr = [1,2,3,4,5];
var arr2 = [...arr]; // "arr ke saare elements ko spread (expand) karke ek naye array 'arr2' mein daal do."