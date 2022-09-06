//exercise1: BMI comparison

const markMass_td1 = 78
const markHeight_td1 = 1.69
const johnMass_td1 = 92
const johnHeight_td1 = 1.95

const markMass_td2 = 95
const markHeight_td2 = 1.88
const johnMass_td2 = 85
const johnHeight_td2 = 1.76

let markHeigherBMI = false

function bmi(mass, height) {
  return mass / height ** 2
}

const markBMI_td1 = bmi(markMass_td1, markHeight_td1)
const johnBMI_td1 = bmi(johnMass_td1, johnHeight_td1)
console.log(`Test Data 1, Mark BMI: ${markBMI_td1}`)
console.log(`Test Data 1, John BMI: ${johnBMI_td1}`)
markHeigherBMI = markBMI_td1 > johnBMI_td1 ? true : false
console.log(`Test Data 1, Mark has higher BMI?: ${markHeigherBMI}`)

const markBMI_td2 = bmi(markMass_td2, markHeight_td2)
const johnBMI_td2 = bmi(johnMass_td2, johnHeight_td2)
console.log(`Test Data 2, Mark BMI: ${markBMI_td2}`)
console.log(`Test Data 2, John BMI: ${johnBMI_td2}`)
markHeigherBMI = markBMI_td2 > johnBMI_td2 ? true : false
console.log(`Test Data 2, Mark has higher BMI?: ${markHeigherBMI}`)
