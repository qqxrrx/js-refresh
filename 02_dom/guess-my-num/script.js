'use strict'

// Math.random() * 20 <-- 0 to 19
const secretNumber = Math.trunc(Math.random() * 20) + 1
document.querySelector('.number').textContent = secretNumber

// state variable, part of state of application
let score = 20
document.querySelector('.score').textContent = score

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess, typeof guess)

  // if falsy value, 0 or NaN is falsy
  if (!guess) {
    document.querySelector('.message').textContent = 'no number!'
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'correct number!'
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'
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
