const userEmail = []
// if (userEmail) {
//     console.log("Got user Email");
// }
// else {
//     console.log("Don't have user email");
// }

//  falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, Nan

// truthy values
//  "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyobj = {}

// if (Object.keys(emptyobj).length === 0) {
//     console.log("Object is empty");
// }

//  Nullish Coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



// console.log(val1);

// ternary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less tha  80") : console.log("more than 80");