'use strict'
// exercise4: improved tip calculator

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

const calctip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2)

for (let i = 0; i < bills.length; i++) {
  const tip = calctip(bills[i])
  tips.push(tip)
  totals.push(tip + bills[i])
}

console.log(`bills: `, bills)
console.log(`tips: `, tips)
console.log(`totals: `, totals)

const calcAverage = (arr) => {
  // arr.reduce((total, num) => sum + num, 0) / arr.length

  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum / arr.length
}

console.log(`average of all bills: `, calcAverage(bills))
console.log(`average of all tips: `, calcAverage(tips))
console.log(`average of all totals: `, calcAverage(totals))
