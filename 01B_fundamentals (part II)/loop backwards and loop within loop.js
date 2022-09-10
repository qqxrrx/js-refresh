'use strict'

const john = ['john', 'doe', 2044 - 2022, 'professor', ['A', 'B', 'C']]

for (let i = john.length - 1; i >= 0; i--) {
  console.log(i, john[i])
}

for (let e = 1; e < 4; e++) {
  console.log(`------ start routine #${e}`)
  for (let r = 1; r < 6; r++) {
    console.log(`routine #${e}, rep #${r}`)
  }
}
