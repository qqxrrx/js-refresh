'use strict'

const modal = document.querySelector('modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
// select multiple elements of same css class, return NodeList which is like an array
const btnsOpenModal = document.querySelectorAll('.show-modal')

console.log(btnsOpenModal)

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   console.log(btnsOpenModal[i].textContent)
// }

btnsOpenModal.forEach((e) => {
  console.log(e.textContent)
})
