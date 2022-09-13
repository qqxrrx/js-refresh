'use strict'
// this is the code-along answer
// script.js was my answer

// selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')

const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// starting conditions
score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

// best practice = use state variable, persist value of fields instead of just relying on the dom
let currentScore = 0
// hold current active player
// 0 = player 1, 1 = player 2
let activePlayer = 0

const scores = [0, 0]

// rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1
  console.log(dice)

  // 2. display dice
  diceEl.classList.remove('hidden')
  diceEl.src = `dice-${dice}.png`

  // 3. check for rolled 1
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore
  } else {
    // switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    // .toggle() = add class if not there, remove class if exists
    player0El.classList.toggle(`player--active`)
    player1El.classList.toggle(`player--active`)
  }
})
