// Primitive

// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt




// Reference (Non-primitive)

// types : Array, Objects, Functions

//imp => objects, web-events, browser-events; 

/*Return type of variables in JavaScript
1) Primitive Datatypes
Number => number
String  => string
Boolean  => boolean
null  => object
undefined  =>  undefined
Symbol  =>  symbol
BigInt  =>  bigint

2) Non-primitive Datatypes
Arrays  =>  object
Function  =>  function
Object  =>  object*/

//+++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYtName = "hiteshchoudharydotcom"

let anotherName = myYtName
anotherName = "chaiaurcode"
console.log(anotherName)
console.log(myYtName)

let userOne = {
    email: "user@google.com",
    upi: "user@byl"
}

let userTwo = userOne

userTwo.email = "adesh@google.com"

console.log(userOne.email)
console.log(userTwo.email)