/**
 * type conversion = manually convert types (explicitly, shown)
 * type coercion = js automatically converts types (implicitly, hidden)
 */

// type conversion -------------------------
const inputYear = '1991'

console.log(Number(inputYear))

console.log(inputYear + 18) // concatenation

console.log(Number(inputYear) + 18)

console.log(Number('xx')) // NaN = not a number

console.log(typeof NaN) // type of NaN is "number data type" but invalid one as a placeholder

console.log(String(23), 23)

// type coercion -------------------------
console.log('This ' + 23 + ' number')
console.log('This ' + '18' + ' number')

// converted strings to numbers, the - sign triggered conversion
console.log('23' - '10' - '3')

// converted everything to string, the + sign triggered conversion
// concatenated first, then converted to numbers following precedence
// ** > * > / > % > + > -
// exponentiation, multiplication, division, remainder, addition, subtraction
console.log('23' + '10' - 3)

console.log('23' / '2')

let n = '1' + 1 // concatenation, + (becomes 11, the string)
n = n - 1 // convert to number, - (becomes 10, the number)
console.log(n)

// add numbers first, then concatinate to '5'
// left to right
console.log(2 + 3 + 4 + '5')

// subtract numbers first, then concatinate to '5'
// left to right
console.log('10' - '4' - '3' - 2 + '5')
