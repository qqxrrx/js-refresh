'use strict'

// for-loop is used if number of iterations are known
for (let r = 1; r < 11; r++) {
  console.log(`rep #${r}`)
}

console.log(`---- while loop`)
let r = 1
while (r < 11) {
  console.log(`rep #${r}`)
  r++
}

console.log(`---- dice rolling`)

// Math.random() function returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1
// Math.trunc() function returns the integer part of a number by removing any fractional digits.
let dice = Math.trunc(Math.random() * 6) + 1

// while-loop is used if number of iterations are unknown
while (dice !== 6) {
  console.log(`roll of: ${dice}`)
  dice = Math.trunc(Math.random() * 6) + 1
  if (dice === 6) {
    console.log(`found dice 6, exiting loop`)
  }
}
