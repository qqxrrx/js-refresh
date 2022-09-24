'use strict'

console.log('a+very+nice+string'.split('+'))
console.log('john doe'.split(' '))

const [firstName, lastName] = 'John Doe'.split(' ')

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ')
console.log(newName)

const capitalizeName = function (name) {
  const arrName = []
  for (const n of name.split(' ')) {
    // common solution:
    //arrName.push(n[0].toUpperCase() + n.slice(1))

    // alt solution:
    arrName.push(n.replace(n[0], n[0].toUpperCase()))
  }
  console.log(arrName.join(' '))
}

capitalizeName('jessica ann smith davis')
capitalizeName('john doe')

const message = 'Go to gate 23!'
// 25 = pad string with '+' on start until it reaches a total of 25 characters
// 35 = pad string with '+' on end until it reaches a total of 35 characters
console.log(message.padStart(25, '+').padEnd(35, '+'))

// use-case of .padStart() for credit card number masking
const maskCreditCard = function (number) {
  // concatinating will type coerce it to 'string'
  const str = number + ''
  console.log(str.slice(-4).padStart(str.length, '*'))
}

maskCreditCard(4337898971634787)
maskCreditCard(6897924547881587)

const message2 = 'Bad weather... All Departures Delayed... '
console.log(message2.repeat(5))

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'<>'.repeat(n)}`)
}
planesInLine(5)
planesInLine(3)
planesInLine(12)
