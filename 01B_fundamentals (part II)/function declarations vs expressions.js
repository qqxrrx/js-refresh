'use strict'

// function declaration
// they can be called before they are defined
// this happens because of hoisting
function calcAge1(birthYear) {
  return 2044 - birthYear
}

const age1 = calcAge1(2002)
console.log(age1)

// function expression, using anonymous function
// calcAge2 will hold the function itself and not the value created by that function
const calcAge2 = function (birthYear) {
  return 2044 - birthYear
}

const age2 = calcAge2(2002)
console.log(age2)
