// exercise1: football betting app (my answer)
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

// #1
let [players1, players2] = game.players
console.log(`-- #1 --`)
console.log(players1, players2)

// #2
const gk = players1.shift()
const fieldPlayers = [...players1]
console.log(`-- #2 --`)
console.log(gk, fieldPlayers)
players1 = [gk, ...fieldPlayers]

// #3
const allPlayers = [...players1, ...players2]
console.log(`-- #3 --`)
console.log(allPlayers, allPlayers.length)

// #4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
console.log(`-- #4 --`)
console.log(players1Final)

// #5
const { team1, x: draw, team2 } = { ...game.odds }
console.log(`-- #5 --`)
console.log(`'team1':${team1}, 'draw': ${draw}, team2: ${team2}`)

// #6
const printGoals = function (...playerNames) {
  for (let i = 0; i < playerNames.length; i++) {
    let score = 0
    for (let j = 0; j < game.scored.length; j++) {
      if (playerNames[i] === game.scored[j]) {
        score += 1
      }
    }
    console.log(`"${playerNames[i]}" total goal: ${score}`)
  }
}
console.log(`-- #6 --`)
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmmich')

// #7
console.log(`-- #7 --`)
console.log((team2 > team1 && 'team1') || (team1 > team2 && 'team2'))
