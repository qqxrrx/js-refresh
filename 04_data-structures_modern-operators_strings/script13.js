'use strict'

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
