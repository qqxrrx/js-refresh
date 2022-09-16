'use strict'

function calcAge(birthYear) {
  const age = 2042 - birthYear

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`
    console.log(output)

    if (birthYear >= 1981 && birthYear <= 1996) {
      // 'var' ignores block level scope, just avoid this and always use 'use strict'
      var millenial = true
      // no variable lookup for firstName, because it already exists within this scope
      const firstName = `Sue`
      const str = `you're a millenial, ${firstName}`
      console.log(str)

      function add(a, b) {
        return a + b
      }

      // redefine an existing variable, but if you use 'const' it will be a new variable instead
      output = 'new output'
    }
    console.log(millenial)

    console.log(output)

    add(2, 2)
  }

  printAge()

  return age
}

const firstName = 'john'

calcAge(1996)
