'use strict '
// exercise3: BMI calculator

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    // .toFixed() returns string, so need to do an Type Conversion back to Number
    this.BMI = Number((this.mass / this.height ** 2).toFixed(2))
    return this.BMI
  },
}

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    // .toFixed() returns string, so need to do an Type Conversion back to Number
    this.BMI = Number((this.mass / this.height ** 2).toFixed(2))
    return this.BMI
  },
}

mark.calcBMI()
john.calcBMI()

if (mark.BMI > john.BMI) {
  console.log(
    `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!`
  )
} else if (john.BMI > mark.BMI) {
  console.log(
    `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!`
  )
}

console.log(`recalc for ${john.fullName}`)
john.mass = 1000
john.calcBMI()

if (mark.BMI > john.BMI) {
  console.log(
    `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!`
  )
} else if (john.BMI > mark.BMI) {
  console.log(
    `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!`
  )
}
