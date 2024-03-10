// if
const isUserloggedIn = true
const temperature = 41

// if( temperature < 50){
// console.log("Temperature is less tahn 50");
// }
// else {
//     console.log("Temperature is greater than 50");
// }

// <, >, <=, >=, ==, !=, ===, !==

const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`User power: ${power}`);


const balance = 1000

// if (balance < 500) console.log("test");

// if (balance < 500) {
//     console.log("less than");
// }
// else if (balance < 750 ) {
//     console.log("less than");
// }
// else{
//     console.log("hello");
// }




const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if ( userLoggedIn && debitCard ) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
