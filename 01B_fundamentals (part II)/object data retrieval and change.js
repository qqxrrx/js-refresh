'use strict'

const john = {
  firstName: 'john',
  lastName: 'doe',
  age: 2044 - 2002,
  job: 'professor',
  friends: ['A', 'B', 'C'],
}

console.log(john)

// dot notation
console.log(john.firstName)

// bracket notation
// can use expressions to retrieve class property
console.log(john['job'])

const nameKey = 'Name'
console.log(john[`first${nameKey}`])
console.log(john[`last${nameKey}`])

// use case for bracket notation
const ans = prompt(`What info you need? firstName, lastName, age, job, friends`)

// automatically returns undefined if property does not exist
if (!john[ans]) {
  console.log(`object property '${ans}' does not exist`)
} else {
  console.log(john[ans])
}

// add new property
john.location = 'jupiter'
console.log(`location: ${john.location}`)

john['github'] = '@johngit'
console.log(`github: ${john['github']}`)

console.log(
  `${john.firstName} has ${john.friends.length} friends, his best friend is called ${john.friends[0]}`
)
