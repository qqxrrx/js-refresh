'use strict '
// exercise1: two gymnastics teams

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

const avgScoreDolphin_td1 = calcAverage(44, 23, 71)
const avgScoreKoala_td1 = calcAverage(65, 54, 49)
const avgScoreDolphin_td2 = calcAverage(85, 54, 41)
const avgScoreKoala_td2 = calcAverage(23, 34, 27)

function checkWinner(avgDolphins, avgKoalas) {
  const compareDolphin = avgDolphins / 2
  const compareKoala = avgKoalas / 2

  if (compareDolphin >= avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas}).`)
  } else if (compareKoala >= avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins}).`)
  } else {
    console.log(`No team wins.`)
  }
}

console.log(`test data 1: -----------------------`)
checkWinner(avgScoreDolphin_td1, avgScoreKoala_td1)

console.log(`test data 2: -----------------------`)
checkWinner(avgScoreDolphin_td2, avgScoreKoala_td2)
