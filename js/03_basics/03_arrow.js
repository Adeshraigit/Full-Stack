const user = {
    username: "Adesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Adesh"
//     console.log(this.username);
// }

// chai()

// const chai = () =>{
//     let username = "Adesh"
//     console.log(this);
// }

// chai()

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({user: "Adesh"})



console.log(addTwo(4,3));