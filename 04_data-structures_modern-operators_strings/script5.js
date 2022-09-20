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

  // rest parameter
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient)
    console.log(otherIngredients)
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

// falsy values:
/*
  0 (zero)
  '' (empty string)
  undefined (uninitialized)
  null (null value)
  NaN (not a number)
*/

// short circuiting depends on truthy/falsy values and truth table (&& and ||)
// check "01A_fundamentals (part I)" lecture regarding truth table

// || = return 1st encountered truthy value, otherwise return the last value
console.log('--- (OR = ||) ---')
console.log(3 || 'john')
console.log('' || 'wow')
console.log(true || 0)
console.log(undefined || null)
console.log(undefined || 0 || '' || 'hello' || 23 || null)

// restaurant.numGuests = 23
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10
console.log(guests1)

// shortcut via short circuit
const guests2 = restaurant.numGuests || 10
console.log(guests2)

// && = return 1st encountered falsy value, otherwise return the last value
console.log('--- (AND = &&) ---')
console.log(0 && 'john')
console.log(7 && 'john')
console.log('hello' && 23 && null && 'john')
console.log('first' && 'second' && 'third')

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach')
}

// if .orderPizza() does not exist (falsy), then shortcircuit and not evaluate
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach')

// non existent function is 'undefined' which is falsy
console.log(typeof restaurant.orderPizza22)
