'use strict'

const airline = 'TAP Air Portugal'
const plane = 'A320'

console.log(plane[0])
console.log(plane[1])
console.log(plane[2])
console.log('B737'[0])

console.log(airline.length)
console.log('B737'.length)

// first occurance from left
console.log(airline.indexOf('r'))
// last occurance
console.log(airline.lastIndexOf('r'))

// case sensitive
console.log(airline.indexOf('Portugal'))
// not found = -1
console.log(airline.indexOf('portugal'))

// start at index 4 position where extraction will start
// result is called a "substring", does not change the source string
console.log(airline.slice(4))
// start index = 4, ending index = 7 (end index not included)
// length = end - start
console.log(airline.slice(4, 7))

console.log(airline.slice(0, airline.indexOf(' ')))
console.log(airline.slice(airline.lastIndexOf(' ') + 1))

// start backwards if used a negative value
console.log(airline.slice(-2))
console.log(airline.slice(1, -1))

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1)
  if (s === 'B' || s === 'E') {
    console.log(`You got the middle seat`)
  } else {
    console.log(`You got lucky`)
  }
}

// 11th row, column B
checkMiddleSeat('11B')
// 23rd row, column C
checkMiddleSeat('23C')
// 3rd row, column E
checkMiddleSeat('3E')

// strings are converted into an object behind the scenes
// that's why there are string methods
// after the operation is done, converted back to primitive type
console.log(new String('john doe'))
// object
console.log(typeof new String('john doe'))
// string
console.log(typeof new String('john doe').slice(1))
