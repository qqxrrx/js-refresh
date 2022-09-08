'use strict'

const john = {
  firstName: 'john',
  lastName: 'doe',
  birthYear: 2000,
  job: 'professor',
  friends: ['A', 'B', 'C'],
  hasDriversLicense: true,
  // calcAge: function () {
  //   console.log(this)
  //   return 2044 - this.birthYear
  // },
  calcAge: function () {
    // create new property named 'age'
    this.age = 2044 - this.birthYear
    return this.age
  },
  getSummary: function () {
    return `${this.firstName} is a ${
      this.age
    }-year old ${this.calcAge()}, and he has ${
      this.hasDriversLicense ? 'a' : 'no'
    } driver's license.`
  },
}

console.log(john.calcAge())
// console.log(john['calcAge']())
console.log(john.age)
console.log(john.age)
console.log(john.age)
console.log(john.getSummary())
john.hasDriversLicense = false
console.log(john.getSummary())
