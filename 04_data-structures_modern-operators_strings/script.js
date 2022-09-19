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

const arr = [2, 5, 6]
// destructure array
const [x, y, z] = arr

console.log(x, y, z)

const [first, second] = restaurant.categories
console.log(first, second)

// skip 2nd element
const [a_c, , c_c] = restaurant.categories
console.log(a_c, c_c)

let [main, secondary] = restaurant.categories
console.log(`before switch: ${main} ${secondary}`)

// switch values (ignore the ;   vscode autoformat bug)
;[main, secondary] = [secondary, main]
console.log(`after switch: ${main} ${secondary}`)

const [starterCourse, mainCourse] = restaurant.order(2, 0)
console.log(`starter course: "${starterCourse}", main course: "${mainCourse}"`)

// nested destructuring
const nested = [1, 2, [3, 4, 5]]
const [firstValue, , secondValue] = nested
console.log(firstValue, secondValue)

// destructuring inside destructuring
const [i, , [j, , l]] = nested
console.log(i, j, l)

// default values
const [p = 1, q = 1, r = 1] = [8, 9] // <- best practice to add on defaults
console.log(p, q, r)
