// exercise3: football betting app (code along answer)
'use strict'

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
])

const events = [...new Set(gameEvents.values())]
console.log(`--- #1`)
console.log(events)

gameEvents.delete(64)
console.log(`--- #2`)
console.log(gameEvents)

console.log(`--- #3`)
// 1. list all keys from gameEvents
// 2. spread it and make an array
// 3. use .pop() array method to return the removed last element
const time = [...gameEvents.keys()].pop()
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
)

console.log(`--- #4`)
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND'
  console.log(`[${half} HALF] ${min}: ${event}`)
}
