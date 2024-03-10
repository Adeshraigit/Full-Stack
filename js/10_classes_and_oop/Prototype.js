// let myName = "adesh    "

// console.log(myName.length);



let myHeros = ["thor","spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`)
}

// heroPower.hitesh()
// myHeros.hitesh()

// inheritance

const user ={
    name: "chai",
    username: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js assignment',
    fulltime: true,
    __proto__: TeachingSupport
}

// Teacher.__proto__ = User

// modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "chaiaurcode      "

String.prototype.truLength = function(){
    // console.log(`${this}`);
    console.log(`True length is: ${
        this.trim().length
    }`)
}

anotherUsername.truLength()
"adesh".truLength()