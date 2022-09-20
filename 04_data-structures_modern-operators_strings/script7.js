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

const rest1 = {
  name: 'resto 1',
  numGuests: 0,
}

const rest2 = {
  name: 'resto 2',
  owner: 'Giovanni Giorgio',
}

// rest1.numGuests = rest1.numGuests || 10
// rest2.numGuests = rest2.numGuests || 10

// rest1.numGuests ||= 10
// rest2.numGuests ||= 10

// logical nullish assignment operator
rest1.numGuests ??= 10
rest2.numGuests ??= 10

// rest1.owner = rest1.owner && '<ANONYMOUS>'
// rest2.owner = rest2.owner && '<ANONYMOUS>'

rest1.owner &&= '<ANONYMOUS>'
rest2.owner &&= '<ANONYMOUS>'

console.log(rest1)
console.log(rest2)
