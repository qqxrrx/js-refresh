'use strict'

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
}

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
}

const rest = new Map()
rest.set('name', 'Classico Italiano')
rest.set(1, 'Firenze, Italy')
rest.set(2, 'Lisbon, Portugal')

console.log(rest)

// .set() returns updated map

console.log(
  rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open')
    .set(false, 'We are closed')
)

console.log(rest.get('name'))
console.log(rest.get(true))
console.log(rest.get('true')) // undefined

// rest.get(<boolean result as key lookup>)
const time = 21 // true
console.log(rest.get(time > rest.get('open') && time < rest.get('close')))
const time2 = 8 // false
console.log(rest.get(time2 > rest.get('open') && time2 < rest.get('close')))

console.log(rest.has('categories'))
rest.delete(2)
console.log(rest)
console.log(rest.size)
rest.clear() // remove all elements

const arr = [1, 2] // warning: you should not hard code key if reference type because of the rules of value access from heap (same value, different memory address therefore regarded as different even though the value is similar)
rest.set(arr, 'test')
rest.set(document.querySelector('h1'), 'heading')
console.log(rest)

console.log(`[1, 2]`, rest.get([1, 2])) // undefined
console.log(`using variable: `, rest.get(arr))

// similar structure from Object.entries(), array of arrays
const question = new Map([
  ['question', 'What is the best ice cream?'],
  [1, 'Chocolate'],
  [2, 'Vanilla'],
  [3, 'Double Dutch'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
])

console.log(question)

// convert object to map
console.log(Object.entries(openingHours))
const hoursMap = new Map(Object.entries(openingHours))
console.log(hoursMap)

// ------ quiz app -------
console.log(question.get('question'))

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`)
}

const answer = Number(prompt('Your answer'))
console.log(answer)
console.log(question.get(answer === question.get('correct')))

// convert map to array
console.log([...question])
console.log([...question.entries()])
