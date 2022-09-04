const legalAge = 18
const currentAge = 15

if (currentAge >= legalAge) {
  console.log(`can start driving license `)
} else {
  const yearsLeft = legalAge - currentAge
  console.log(`too young, wait another ${yearsLeft} years`)
}

const birthYear = 2012

let century

if (birthYear <= 2000) {
  century = 20
} else {
  century = 21
}

console.log(century)
