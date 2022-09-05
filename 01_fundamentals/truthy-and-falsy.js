/**
  5 falsy values in js:
    0 (zero)
    '' (empty string)
    undefined (uninitialized)
    null (null value)
    NaN (not a number)
 */

console.log(`zero: ${Boolean(0)}`)
console.log(`empty string: ${Boolean('')}`)
console.log(`uninitialized: ${Boolean(undefined)}`)
console.log(`null value: ${Boolean(null)}`)
console.log(`not a number: ${Boolean(NaN)}`)

console.log(`empty object: ${Boolean({})}`) //true
console.log(`negative: ${Boolean(-1)}`) // true

// boolean has type coercion (automatically derived falsy or truthy)

const money = 0

// what if negative? it would be 'true'... bad pattern
if (money) {
  console.log(`don't spend it all`)
} else {
  console.log(`zero balance, get a job`)
}

let height
// typeof height === undefined
// if height = 0, it is falsy value
if (height) {
  console.log(`height is defined`)
} else {
  console.log(`height undefined`)
}
