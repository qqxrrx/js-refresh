// exercise2: football betting app (my answer)
'use strict'

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
}

// -- #1
console.log(` -- #1`)
for (const [key, value] of Object.entries(game.scored)) {
  console.log(`Goal ${Number(key) + 1}: ${value}`)
}

// -- #2
console.log(` -- #2`)
let computed = 0
const gameOdds = Object.values(game.odds)
for (const value of gameOdds) {
  computed += Number(value) ?? 0
}
console.log(`Average odds: ${computed / gameOdds.length}`)

// -- #3
console.log(` -- #3`)
for (const [key, value] of Object.entries(game.odds)) {
  console.log(
    `Odd of ${game[key] ? 'victory ' : ''}${game[key] ?? 'draw'}: ${value}`
  )
}

// -- #4
console.log(` -- #4`)
const scorers = {}
for (const value of Object.values(game.scored)) {
  scorers[value] ? (scorers[value] += 1) : (scorers[value] = 1)
}
console.log(scorers)
