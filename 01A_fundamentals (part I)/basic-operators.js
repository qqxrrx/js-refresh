const now = 2042
const agePerson = now - 1945
const agePersonX = now - 2022
console.log(agePerson, agePersonX)

console.log(agePerson * 2, agePerson / 10, 2 ** 3)
// 2 ** 3 = 2 to the power of 3...2*2*2

const fName = 'abra'
const lName = 'kadabra'

console.log(fName + ' ' + lName)

let y = 5 + 2
y += 5
console.log(y)

let z = 1
z **= 2
console.log(z)

let a = 5
console.log(a++)
console.log(a--)

console.log(agePerson > agePersonX)

console.log(agePersonX >= 14)

let g
let p = 2
let q
// nullish coalescing: return null/undefined, otherwise a valid value
console.log(`nullish ${g ?? p}`)
console.log(`nullish ${p ?? g}`)
console.log(`nullish ${q ?? g}`)
