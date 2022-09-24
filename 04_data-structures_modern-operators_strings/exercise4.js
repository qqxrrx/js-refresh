// exercise4: underscore case to camel case (my answer)
'use strict'

document.body.append(document.createElement('textarea'))
document.body.append(document.createElement('button'))

const button = document.querySelector('button')
const textarea = document.querySelector('textarea')

button.addEventListener('click', function (e) {
  convertSnakeCaseToCamelCase(textarea.value)
})

const convertSnakeCaseToCamelCase = function (stringInput) {
  const names = stringInput.split('\n')
  let longestStringLength = 0
  const nameFixed = []

  for (let i = 0; i < names.length; i++) {
    let skipFirst = true
    let combinedName = ''
    for (const name of names[i].split('_')) {
      let cleanedName = name.toLowerCase().trim()
      if (skipFirst) {
        skipFirst = false
      } else {
        cleanedName = cleanedName[0].toUpperCase() + cleanedName.slice(1)
      }
      combinedName += cleanedName
    }

    longestStringLength =
      combinedName.length > longestStringLength
        ? combinedName.length
        : longestStringLength

    nameFixed.push(combinedName)
  }

  for (let i = 0; i < nameFixed.length; i++) {
    console.log(
      `${nameFixed[i].padEnd(longestStringLength + 5, ' ')}${'✅'.repeat(
        i + 1
      )}`
    )
  }
}
