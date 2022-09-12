'use strict'

// Math.random() * 20 <-- 0 to 19
let secretNumber = Math.trunc(Math.random() * 20) + 1

// state variable, part of state of application
let score = 20
document.querySelector('.score').textContent = score

let highscore = 0

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess, typeof guess)

  // if falsy value, 0 or NaN is falsy
  if (!guess) {
    document.querySelector('.message').textContent = 'no number!'
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'correct number!'
    document.querySelector('.number').textContent = secretNumber
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'

    if (score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high!'
      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = 'you lost the game!'
      score--
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low!'
      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = 'you lost the game!'
      score--
    }
  }

  if (score === 0) {
    document.querySelector('.message').textContent = 'you lost the game!'
    document.querySelector('.score').textContent = score
    alert('game over!')
  }
})

document.querySelector('.again').addEventListener('click', function () {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1
  document.querySelector('.score').textContent = score
  document.querySelector('.guess').value = undefined
  document.querySelector('.guess').textContent = ''
  document.querySelector('.number').textContent = '?'
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
})
