'use strict'

// arrow function, no 'this' keyword
const yearsUntilRetirement1 = (birthYear, firstName) => {
  const age = 2044 - birthYear
  const retirement = 65 - age
  return `${firstName} retires in ${retirement} years`
}

// function expression
const calcAge = function (birthYear) {
  return 2044 - birthYear
}

// function expression
const yearsUntilRetirement2 = function (birthYear, firstName) {
  const retirement = 65 - calcAge(birthYear)

  if (retirement > 0) {
    showConsole(firstName, retirement)
    return retirement
  } else {
    console.log(`${firstName} is already retired`)
    return -1 // default to -1, to indicate a less than or equal zero condition
  }
}

// invoke/execute/call function with ()
// arguments = the value you pass towards a function
// parameter = the variable inside function where you insert arguments
console.log(yearsUntilRetirement2(1991, 'john'))
console.log(yearsUntilRetirement2(1970, 'doe'))

// function declaration (can be used before they are declared)
function showConsole(firstName, retirement) {
  console.log(`${firstName} retires in ${retirement} years`)
}
