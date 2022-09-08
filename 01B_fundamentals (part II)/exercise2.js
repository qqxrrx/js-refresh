'use strict '
// exercise2: tip calculator

const calctip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2)

const bills = [125, 555, 44]
console.log(`bills: `, bills)

const tips = [calctip(bills[0]), calctip(bills[1]), calctip(bills[2])]
console.log(`tips: `, tips)

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(`total:`, total)
