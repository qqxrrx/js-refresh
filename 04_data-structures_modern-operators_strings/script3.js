'use strict'

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address = '',
  }) {
    console.log(
      `Order Received: "${this.starterMenu[starterIndex]}" and "${this.mainMenu[mainIndex]}" will be deliverted to (${address}) at (${time})`
    )
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with "${ing1}", "${ing2}" and "${ing3}"`)
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
}

const arr = [1, 2, 3]
const arr2 = [...arr, 4, 5]

console.log(arr2)

console.log(...arr2)

const newMenu = [...restaurant.mainMenu, 'Gnocci']
console.log(newMenu)

// shallow copy of array
const mainMenuCopy = [...restaurant.mainMenu]

// join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(menu)

const str = 'john'
const letters = [...str, '', 'S']
console.log(letters)
console.log(...str)

// pass arguments to parameters via spread operator from array input
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Let's make pasta! Ingredient 2?"),
  prompt("Let's make pasta! Ingredient 3?"),
]
restaurant.orderPasta(...ingredients)

// create new object
const obj2 = { ...restaurant, foundedIn: 1990, founder: 'JOHN DOE' }
console.log(obj2)

// copy object
const obj2Copy = { ...restaurant }
obj2Copy.name = 'obj2'

console.log(`original: `, obj2.name)
console.log(`copy: `, obj2Copy.name)
