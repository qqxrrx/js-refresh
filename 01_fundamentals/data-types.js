// single line comment
/**
 * multi line comment
 */

// top-down execution

let jsBoolean = true // to declare a variable use 'let' keyword
console.log(jsBoolean)

console.log(typeof true)
console.log(typeof jsBoolean)
console.log(typeof 1)
console.log(typeof 'test')

jsBoolean = 'newvalue' // new value assigned to existing variable
console.log(typeof jsBoolean)

let yr
console.log(yr) // value = undefined
console.log(typeof yr) // data type = undefined

yr = 2222
console.log(yr)

console.log(typeof null) // object, BUG in javascript... should return as null
