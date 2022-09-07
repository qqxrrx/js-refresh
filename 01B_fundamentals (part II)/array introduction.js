'use strict'
// array is a data structure

const friend1 = 'A'
const friend2 = 'B'
const friend3 = 'C'

const friends = ['A', 'B', 'C']
console.log(friends)

// alternative declaration
const years = new Array(2000, 2001, 2002)

// array indexes are zero based
console.log(friends[0])
// number of elements in the array
console.log(friends.length)

console.log(friends[friends.length - 1])

// array mutation/change
friends[2] = 'D'
console.log(friends)

// friends array is declared as 'const'
// primitive values declared as 'const' are immutable
// however, arrays are not primitive types therefore they are mutable

const john = ['john', 'doe', 2045 - 2014, 'professor', friends]
console.log(john)

const calcAge = (birthYear) => 2045 - birthYear
const years1 = [2000, 1944, 2002, 2012, 2018]

console.log(calcAge(years1)) // NaN

const ageA_x = [
  calcAge(years1[0]),
  calcAge(years1[1]),
  calcAge(years1[years1.length - 1]),
]
console.log(ageA_x)
