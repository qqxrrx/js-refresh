'use strict'

const airline = 'TAP Air Portugal'

console.log(airline.toLowerCase())
console.log(airline.toUpperCase())
console.log('john doe'.toLowerCase())
console.log('john doe'.toUpperCase())

const passenger = 'jOhN'
const passengerLower = passenger.toLowerCase()
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1)
console.log(passengerCorrect)

const email = 'hello@john.io'
const loginEmail = '   Hello@JoHn.Io  \n'
const lowerEmail = loginEmail.toLowerCase()
const trimmedEmail = lowerEmail.trim()
console.log(trimmedEmail)

const normalizedEmail = loginEmail.toLowerCase().trim()
console.log(normalizedEmail)
console.log(email === normalizedEmail)

const priceJP = '¥12488.97'
const priceUS = priceJP.replace('¥', '$')
const priceConvert = Number(priceUS.replace('$', '')) * 0.007
console.log(`${priceUS[0]}${priceConvert.toFixed(2)} (${priceJP})`)

const announcement = `All passengers come to boarding door 23. Boarding door 23.`
console.log(announcement.replace('door', 'gate'))

// regular expression
console.log(announcement.replace(/door/g, 'gate'))

const plane = 'Airbus A320neo'
console.log(plane.includes('A320'))
console.log(plane.includes('Boeing'))
console.log(plane.startsWith('Air'))

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new airbus family')
}

const checkBaggage = function (items) {
  // best practice = always use lowercase before comparing strings because .includes() is case-sensitive
  const baggage = items.toLowerCase()
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`You are not allowed on board`)
  } else {
    console.log(`Welcome aboard`)
  }
}
checkBaggage('I have a laptop, some Food and a pocket Knife')
checkBaggage('Socks and camera')
checkBaggage('Got some snacks and a gun for protection')
