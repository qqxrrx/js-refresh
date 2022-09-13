'use strict'
// this is the code-along answer
// script.js from previous commit (229e2ecf4331ef3a52d8bdfb6287ceda10df0f62) was my answer

// selecting elements
const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1')
const diceEl = document.querySelector('.dice')

score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')
