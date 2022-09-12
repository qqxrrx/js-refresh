'use strict'

// Math.random() * 20 <-- 0 to 19
let secretNumber = Math.trunc(Math.random() * 20) + 1

// state variable, part of state of application
let score = 20
document.querySelector('.score').textContent = score

let highscore = 0

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}

const updateScore = function (scoreValue) {
  document.querySelector('.score').textContent = scoreValue
}

const setBackgroundColor = function (colorHex) {
  document.querySelector('body').style.backgroundColor = colorHex
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess, typeof guess)

  // if falsy value, 0 or NaN is falsy
  if (!guess) {
    displayMessage('no number!')
  } else if (guess === secretNumber) {
    displayMessage('correct number!')

    document.querySelector('.number').textContent = secretNumber
    setBackgroundColor('#60b347')
    document.querySelector('.number').style.width = '30rem'

    if (score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'too high!' : 'too low!')
      score--
      updateScore(score)
    } else {
      displayMessage('you lost the game!')
      score--
    }
  }

  if (score === 0) {
    displayMessage('you lost the game!')
    updateScore(score)
    alert('game over!')
  }
})

document.querySelector('.again').addEventListener('click', function () {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1
  updateScore(score)
  document.querySelector('.guess').value = undefined
  document.querySelector('.guess').textContent = ''
  document.querySelector('.number').textContent = '?'
  displayMessage('Start guessing...')
  setBackgroundColor('#222')
  document.querySelector('.number').style.width = '15rem'
})
