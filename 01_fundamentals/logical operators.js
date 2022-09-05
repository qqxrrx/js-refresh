const hasDriversLicense = true
const hasGoodVision = true

console.log(hasDriversLicense && hasGoodVision)
console.log(hasDriversLicense || hasGoodVision)
console.log(!hasDriversLicense)

if (hasDriversLicense && hasGoodVision) {
  console.log(`able to drive`)
} else {
  console.log(`others should drive`)
}

const isTired = false

console.log(hasDriversLicense && hasGoodVision && isTired)

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`able to drive`)
} else {
  console.log(`others should drive`)
}
