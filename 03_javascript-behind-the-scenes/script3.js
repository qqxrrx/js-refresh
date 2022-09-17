'use strict'

console.log(`declaration: `)
console.log(add_declaration(1, 1))
console.log(`expression: `)
console.log(add_expression(1, 1))
console.log(`arrow: `)
console.log(add_arrow(1, 1))

// function declaration = works because of hoisting
function add_declaration(a, b) {
  return a + b
}

// function expression = ReferenceError, temporal dead zone (TDZ) above
const add_expression = function (a, b) {
  return a + b
}

// arrow function = ReferenceError, temporal dead zone (TDZ) above
const add_arrow = (a, b) => a + b

// if you use 'var' to declare functions, it will be undefined(...)
// just avoid 'var'... it could lead to critical errors especially if that 'var' variable is type coerced into a falsy value due to the nature of hoisting
// example: code to trigger a delete operation but the 'var' variable is used on the TDZ, it will be undefined and type coerced into falsy
// as best practice, use 'let' and 'const'... also declare them on top
