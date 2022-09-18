'use strict'

let lastName = 'Doe'
let oldLastName = lastName
lastName = 'Duu'
console.log(lastName, oldLastName)

const j = {
  firstName: 'j',
  lastName: 'k',
  age: 18,
}

// copy memory value to access the same memory address in heap
// NOT creating a new object in the heap, just another variable on the stack that holds memory adddress reference from heap
const xj = j
xj.lastName = 'X'

console.log(`Before`, j)
console.log(`After`, xj)

// error, can't change value to a new memory address because it was declared as 'const'
// xj = {}

// copy object
const a1 = {
  firstName: 'P',
  lastName: 'Q',
  age: 11,
  family: ['1', '2', '3'],
}

// merge two objects and create a new object (therefore, we create a new memory address in the heap)
// WARNING: this only works on the 1st level.. creates a shallow copy (object within object not copied)
const b2 = Object.assign({}, a1)
b2.age = 7

// this will update both 'a1' and 'b2'
b2.family.push('n4')
b2.family.push('n5')

console.log(`first`, a1)
console.log(`second`, b2)
