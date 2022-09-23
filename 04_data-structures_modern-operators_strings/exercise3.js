// exercise3: football betting app (my answer)
'use strict'

// --- #1
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
const tempSet = new Set()
for (const [k, v] of gameEvents) {
  tempSet.add(v)
}
console.log(`--- #1`)
const events = [...tempSet]
console.log(events)

// --- #2
gameEvents.delete(64)
console.log(gameEvents)

// --- #3
const resulting = new Map()
for (let i = 9; i <= 90; i += 9) {
  const startingIndex = i - 9
  const endingIndex = i
  //console.log(startingIndex, endingIndex)

  const found = []
  let count = 0
  let result = ''
  for (const [k, v] of gameEvents) {
    result = k > startingIndex && k < endingIndex ? v : ''
    if (result) {
      count++
      found.push(result)
    }
  }
  //console.log(count, found)
  if (count > 0) {
    resulting.set(count, found)
  }
}
//console.log(resulting)

let currentHighest = 0
for (const [k, v] of resulting) {
  if (currentHighest < k) currentHighest = k
}
const eventHappened = new Set(resulting.get(currentHighest))
let resultOfEvent = ''
for (const i of eventHappened) {
  resultOfEvent = i
}
console.log(`--- #3`)
console.log(`"${resultOfEvent}" happened, on average, every 9 minutes`)

// --- #4
// 1st half = 0 - 45min
// 2nd half = 46 - 90min
console.log(`--- #4`)
for (const [k, v] of gameEvents) {
  console.log((k < 45 ? `[FIRST HALF] ` : `[SECOND HALF] `) + `${v}: ${k}`)
}
