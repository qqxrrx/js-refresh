'use strict'

console.log(me)
console.log(job)
console.log(year)

// 'var' is hoisted to value undefined (source of most errors
// just avoid 'var'
var me = 'john'

// can't access 'let', temporal dead zone is above
let job = 'prof'

// can't access 'const', temporal dead zone is above
const year = 1991
