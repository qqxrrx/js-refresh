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

// you destructure the properties
// the order does not matter as long as the property from the object exists
const { name, openingHours, categories } = restaurant
console.log(`name: `, name)
console.log(`opening hours: `, openingHours)
console.log(`categories: `, categories)

// change variables for destructured property name
// <property name>: <custom variable name>
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant
console.log(restaurantName, hours, tags)

// default values (best practice)
// in this example 'menu' property does not exist, so add default value of empty array
const { menu = [], starterMenu: starters = [] } = restaurant
console.log(menu, starters)

// mutating variables
let a = 1,
  b = 2
const obj = { a: 23, b: 7, c: 14 } // <- object with property containing numeric values

// ignore the ;   vscode autoformat bug
// use () to destructure objects by overwriting the existing variable values defined elsewhere
;({ a, b } = obj)
console.log(a, b)

// nested objects
// in this example, retrieve the property inside an object
// then use a custom variable from  the retrieved properties
const {
  fri: { open: o, close: c },
} = openingHours
console.log(`opening: ${o}, closing: ${c}`)

// pass an object of options
restaurant.orderDelivery({
  time: '22:30',
  address: 'secret, Antartica',
  mainIndex: 2,
  starterIndex: 2,
})

restaurant.orderDelivery({
  address: 'unknown, Africa',
  starterIndex: 1,
})
