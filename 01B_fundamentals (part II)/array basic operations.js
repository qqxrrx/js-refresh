'use strict'
const friends = ['A', 'B', 'C']

// .push() adds element at the end of an array
// returns length of new array
const newLength = friends.push('D')
console.log(friends)
console.log(newLength)

// .unshift() adds element at the beginning of the array
// returns length of new array
friends.unshift('0')
console.log(friends)

// .pop() remove last element of an array
// returns the removed element
const popped = friends.pop()
console.log(popped)
console.log(friends)

// .shift() remove first element of an array
// returns the removed element
const shifted = friends.shift()
console.log(shifted)
console.log(friends)

// .indexOf() return zero based index where element is located
// return -1 if element is not found
// uses strict equality (no type coercion)
console.log(friends.indexOf('C'))

// .includes() return boolean value if element exist or not in array
// uses strict equality (no type coercion)
// mostly used on conditional statements
console.log(friends.includes('Z'))

if (friends.includes('X')) {
  console.log(`friend found`)
} else {
  console.log(`friend not found`)
}
