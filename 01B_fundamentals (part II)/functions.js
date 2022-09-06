'use strict'

function loggr() {
  console.log(`name is john`)
}

// envoking/running/calling function
loggr()
loggr()
loggr()

function fruitProcess(apples, oranges) {
  return `(juice with ${apples} apples & ${oranges} oranges)`
}

console.log(`Apple Juice: ${fruitProcess(5, 0)}`)

console.log(`Apple Orange Juice: ${fruitProcess(2, 4)}`)

console.log(typeof Number('42'))
