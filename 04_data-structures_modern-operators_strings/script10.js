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

// only if '.mon' exist, then read '.open' otherwise return 'undefined'
// avoids TypeError
console.log(restaurant.openingHours.mon?.open)

// optional chaining with multiple properties
console.log(restaurant.openingHours?.mon?.open)

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

for (const day of days) {
  // '.day' property is dynamically determined
  // nullish coalescing, if value of .open is 0 (zero) then include it as a valid value instead of type coercion to false (falsy)
  const open = restaurant.openingHours[day]?.open ?? 'closed'
  console.log(`On ${day}, we open at ${open}`)
}

// -- methods
// check if order() exist via optional chaining, if it does not then use nullish coalescing to return the string
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist')

console.log(restaurant.orderRRRRR?.(0, 1) ?? 'Method does not exist')

// -- arrays
const users = [{ name: 'john', email: 'hey@john.io' }]

// check left hand side of ?. then if it does not exist it returns 'undefined'
// 'undefined' in nullish coalescing will be skipped and returns the 2nd part (in this case, the string message)
console.log(users[0]?.name ?? 'user array empty')

console.log(users[1]?.name ?? 'user array empty')
