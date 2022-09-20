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

restaurant.numGuests = 0
// this will be a logical error if numGuests = 0 is a valid value
const guests = restaurant.numGuests || 10
console.log(guests)

// solution on logical problem above would be using nullish coalescing operator (??)
// only nullish values (null/undefined) will shortcircuit, this makes 0 (zero) as a valid value
const guestCorrect = restaurant.numGuests ?? 10
console.log(guestCorrect)
