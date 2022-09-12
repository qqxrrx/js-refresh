'use strict'

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
// select multiple elements of same css class, return NodeList which is like an array
const btnsOpenModal = document.querySelectorAll('.show-modal')

console.log(btnsOpenModal)

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   console.log(btnsOpenModal[i].textContent)
// }

const openModal = function () {
  console.log(this.textContent)
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

const closeModal = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

btnsOpenModal.forEach((e) => e.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)
