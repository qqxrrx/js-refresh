'use strict'

// roll 1 and lose all accumulated score and switch over to next player
// [hold] = take all current accumulated score and add it to player
// 1st player to accumulate 100 points wins
// [new game] = reset (all back to zero)

const playerOneHoldScore = document.querySelector('#score--0')
const playerOneCurrentScore = document.querySelector('#current--0')
const playerOneSection = document.querySelector('.player--0')
const playerOneName = document.querySelector('#name--0')

const playerTwoHoldScore = document.querySelector('#score--1')
const playerTwoCurrentScore = document.querySelector('#current--1')
const playerTwoSection = document.querySelector('.player--1')
const playerTwoName = document.querySelector('#name--1')

const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

const dice = document.querySelector('.dice')
let firstPlayerTurn = true

const clearCurrentScorePlayerOne = function () {
  playerOneCurrentScore.textContent = '0'
}

const clearCurrentScorePlayerTwo = function () {
  playerTwoCurrentScore.textContent = '0'
}

const switchStyleActive = function (
  toAddStyle,
  toRemoveStyle,
  styleToAddAndRemove
) {
  toAddStyle.classList.add(styleToAddAndRemove)
  toRemoveStyle.classList.remove(styleToAddAndRemove)
}

const toggleButtonActivity = function (isActive) {
  btnRoll.disabled = !isActive
  btnHold.disabled = !isActive
}

const winConditionValue = 100

const winConditionCheck = function (holdScoreElement, playerSectionElement) {
  if (Number(holdScoreElement.textContent) >= winConditionValue) {
    playerSectionElement.classList.add('player--winner')
    toggleButtonActivity(false)
    return true
  }
  return false
}

const updateHoldScore = function (holdScoreElement, currentScoreElement) {
  holdScoreElement.textContent =
    Number(holdScoreElement.textContent) +
    Number(currentScoreElement.textContent)
  currentScoreElement.textContent = '0'
}

const updateCurrentScore = function (currentScoreElement, diceRoll) {
  let score = Number(currentScoreElement.textContent)
  score += diceRoll
  console.log(`p1 : ${score}`)
  currentScoreElement.textContent = score
}

btnNew.addEventListener('click', function () {
  playerOneHoldScore.textContent = '0'
  playerTwoHoldScore.textContent = '0'
  clearCurrentScorePlayerOne()
  clearCurrentScorePlayerTwo()
  playerOneName.textContent = 'PLAYER 1'
  playerTwoName.textContent = 'PLAYER 2'
  firstPlayerTurn = true
  playerOneSection.classList.add('player--active')
  playerOneSection.classList.remove('player--winner')
  playerTwoSection.classList.remove('player--active')
  playerTwoSection.classList.remove('player--winner')
  toggleButtonActivity(true)
})

btnRoll.addEventListener('click', function () {
  const diceRoll = Math.trunc(Math.random() * 6) + 1
  console.log(`dice roll: ${diceRoll}`)

  dice.src = `./dice-${diceRoll}.png`

  if (diceRoll === 1) {
    if (firstPlayerTurn) {
      clearCurrentScorePlayerOne()
      switchStyleActive(playerTwoSection, playerOneSection, 'player--active')
    } else {
      clearCurrentScorePlayerTwo()
      switchStyleActive(playerOneSection, playerTwoSection, 'player--active')
    }
    firstPlayerTurn = !firstPlayerTurn
  } else {
    if (firstPlayerTurn) {
      updateCurrentScore(playerOneCurrentScore, diceRoll)
    } else {
      updateCurrentScore(playerTwoCurrentScore, diceRoll)
    }
  }
})

btnHold.addEventListener('click', function () {
  if (firstPlayerTurn) {
    updateHoldScore(playerOneHoldScore, playerOneCurrentScore)
    switchStyleActive(playerTwoSection, playerOneSection, 'player--active')
    if (winConditionCheck(playerOneHoldScore, playerOneSection)) {
      playerOneName.textContent = 'PLAYER 1 WON!!!'
    }
  } else {
    updateHoldScore(playerTwoHoldScore, playerTwoCurrentScore)
    switchStyleActive(playerOneSection, playerTwoSection, 'player--active')
    if (winConditionCheck(playerTwoHoldScore, playerTwoSection)) {
      playerTwoName.textContent = 'PLAYER 2 WON!!!'
    }
  }
  firstPlayerTurn = !firstPlayerTurn
})
