// singleton
// object.create

// object literals

const mySym = Symbol("key1")


const jsUSer = {
    name: "Adesh",
   " full name": "Adesh rai" ,
    age: 18,
    [mySym]: "mykey1",
    location: "Mumbai",
    email: "adeshrai707@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsUSer.email);
// console.log(jsUSer["email"]);
// console.log(jsUSer[" full name"]);
// console.log(jsUSer[mySym]);

jsUSer.email = "adesh@chatgpt.com"
// Object.freeze(jsUSer)
jsUSer.email = "adesh@microsoft.com"
// console.log(jsUSer);

jsUSer.greeting = function(){
    console.log("Hello js user");
}
jsUSer.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(jsUSer.greeting());
console.log(jsUSer.greetingTwo());