'use strict'

let age = 30
let oldAge = age
age = 31
console.log(age)
console.log(oldAge)

const me = {
  name: 'john',
  age: 30,
}

const friend = me
friend.age = 40 // <- updates all references

console.log(`friend`, friend)
console.log(`me`, me)
