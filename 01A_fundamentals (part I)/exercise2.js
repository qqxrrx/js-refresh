//exercise2: BMI comparison (improved)

const markMass_td1 = 78
const markHeight_td1 = 1.69
const johnMass_td1 = 92
const johnHeight_td1 = 1.95

const markMass_td2 = 95
const markHeight_td2 = 1.88
const johnMass_td2 = 85
const johnHeight_td2 = 1.76

function bmi(mass, height) {
  return mass / height ** 2
}

const markBMI_td1 = bmi(markMass_td1, markHeight_td1)
const johnBMI_td1 = bmi(johnMass_td1, johnHeight_td1)

const markBMI_td2 = bmi(markMass_td2, markHeight_td2)
const johnBMI_td2 = bmi(johnMass_td2, johnHeight_td2)

function comparison(markBMI, johnBMI) {
  if (markBMI > johnBMI) {
    console.log(`Mark's BMI is higher than John's`)
  } else if (markBMI < johnBMI) {
    console.log(`John's BMI is higher than Mark's`)
  } else {
    console.log(`They have the same BMI`)
  }
}

comparison(markBMI_td1, johnBMI_td1)
comparison(markBMI_td2, johnBMI_td2)
