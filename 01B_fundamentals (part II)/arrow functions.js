'use strict'

// arrow function
// implicit return, no need to use 'return' keyword
// they don't link to 'this' keyword
const calcAge3 = (birthYear) => 2044 - birthYear
console.log(calcAge3(2022))

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2044 - birthYear
  const retirement = 65 - age
  return `${firstName} retires in ${retirement <= 0 ? 0 : retirement} years`
}

console.log(yearsUntilRetirement(1977, 'john'))
console.log(yearsUntilRetirement(1988, 'john'))
