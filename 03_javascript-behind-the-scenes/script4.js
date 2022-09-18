'use strict'

// 'this' on global scope = Window Object
console.log(this)

const calcAge = function (birthYear) {
  console.log(2044 - birthYear)
  // 'this' will be 'undefined' because of 'use strict'
  // without 'use strict' it will be the nearest parent scope, therefore the Window Object
  console.log(this)
}

calcAge(2000)

const calcAge2 = (birthYear) => {
  console.log(2044 - birthYear)
  // 'this' will be Window Object because it will find the nearest parent scope (in this case the global scope)
  // lexical 'this' for arrow functions
  console.log(this)
}

calcAge2(2020)

const john = {
  year: 2044,
  calcAge: function (birthYear) {
    // 'this' is the object calling the method
    console.log(this)
    console.log(this.year - birthYear)
  },
}

john.calcAge(2020)

const jane = {
  year: 2020,
}

// copy calcAge method
// also called 'method borrowing'
// 'this' keyword will point to 'jane' if she is the one calling the function
jane.calcAge = john.calcAge

jane.calcAge(2015)

const f = john.calcAge

console.log(f)
// 'this' keyword is 'undefined' because it is just a regular function call
// no object is attached to the function
f(1111)
