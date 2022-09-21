'use strict'

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'

// compute/calculate property names
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

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address = '',
  }) {
    console.log(
      `Order Received: "${this.starterMenu[starterIndex]}" and "${this.mainMenu[mainIndex]}" will be deliverted to (${address}) at (${time})`
    )
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with "${ing1}", "${ing2}" and "${ing3}"`)
  },

  // rest parameter
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient)
    console.log(otherIngredients)
  },

  // ES6 enhanced object literal
  openingHours,
}

// property names = Object.keys()
const properties = Object.keys(openingHours)
console.log(properties)

let openStr = `We are open on ${properties.length} days: `

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `
}
console.log(openStr)

// property values = Object.values()
const values = Object.values(openingHours)
console.log(values)

// property names+values = Object.entries()
//    returns array of ['index/key' and 'object value']
// <Array>.entries() returns array of ['index/key' and 'element value']
const entries = Object.entries(openingHours)
console.log(entries)

// destructure array and destructure the object inside
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`)
}
