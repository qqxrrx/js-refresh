//exercise3: calculate average score

const dolphin_td1 = (96 + 108 + 89) / 3
const koala_td1 = (88 + 91 + 110) / 3
const dolphin_td2 = (97 + 112 + 101) / 3
const koala_td2 = (109 + 95 + 123) / 3
const dolphin_td3 = (97 + 112 + 101) / 3
const koala_td3 = (109 + 95 + 106) / 3

const minimumScoreAllowed = 100

console.log(`set 1, dolphin: ${dolphin_td1} koala: ${koala_td1}`)
console.log(`set 2, dolphin: ${dolphin_td2} koala: ${koala_td2}`)
console.log(`set 3, dolphin: ${dolphin_td3} koala: ${koala_td3}`)

function calc(dolphin, koala) {
  if (dolphin >= minimumScoreAllowed && koala < minimumScoreAllowed) {
    console.log(`dolphin won`)
  } else if (koala >= minimumScoreAllowed && dolphin < minimumScoreAllowed) {
    console.log(`koala won`)
  } else if (dolphin >= minimumScoreAllowed && koala >= minimumScoreAllowed) {
    if (dolphin > koala) {
      console.log(`dolphin won`)
    } else if (koala > dolphin) {
      console.log(`koala won`)
    } else {
      console.log(`tie!`)
    }
  } else {
    console.log(`invalid average scores, nobody won`)
  }
}

calc(dolphin_td1, koala_td1)
calc(dolphin_td2, koala_td2)
calc(dolphin_td3, koala_td3)
