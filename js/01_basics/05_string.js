const name = "Adesh"
const repoCount = 50

// console.log(name + repoCount + "Value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Adeshar')

// console.log(gameName[0])
// console.log(gameName.__proto__)


// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(4))
// console.log(gameName.indexOf('a'))

const newString = gameName.substring(0,5)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "   Adesh   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://adesh.com/adesh%20rai"

console.log(url.replace('%20','-'))

console.log(url.includes('adesh'))

console.log(gameName.split('-'))