'use strict'

const john = {
  firstName: 'john',
  year: 2044,
  calcAge: function (birthYear) {
    console.log(this)
    console.log(this.year - birthYear)
  },
  greet: () => {
    // arrow function does not have a 'this' keyword
    // parent of the arrow function is the global scope
    // 'object literal' and not a 'code block'

    // calling a property that does not exist will return 'undefined'
    // if you created a 'var' variable, it will have the property (because 'var' always creates in the global scope)
    console.log(`hey ${this.firstName}`)

    // 'this' returns Window Object and not the object
    console.log(this)
  },
}

// best practice: NEVER use an arrow function as a method of objects
// always use a normal function
john.greet()

const jane = {
  firstName: 'jane',
  year: 2044,
  calcAge: function (birthYear) {
    console.log(this)
    console.log(this.year - birthYear)

    // --- solution 1 ---
    // const self = this // <-- workaround, self is defined as 'this'
    // const isMillenial = function () {
    //   // 'this' keyword is 'undefined' (all regular function call is set as 'undefined')
    //   // considered as a regular function call because it was called inside a function of an object
    //   // console.log(this.year >= 1981 && this.year <= 1996)
    //   console.log(self.year >= 1981 && self.year <= 1996)
    // }
    // isMillenial()

    // --- solution 2 (ES6+) ---
    // using arrow function, because it goes up on parent scope
    // arrow functions use the 'this' keyword from it's parent
    const isMillenial = () => {
      console.log(self.year >= 1981 && self.year <= 1996)
    }
    isMillenial()
  },
}

jane.calcAge(2000)

// arguments keyword
const addExpr = function (a, b) {
  // exists in function expression and function declaration
  console.log(arguments)
  return a + b
}

addExpr(1, 1)

// legal to add more arguments
// seen on the 'arguments' object
addExpr(1, 2, 3, 4, 5, 6)

const addArrow = (a, b) => {
  // arguments not defined
  // does not exist on arrow functions
  console.log(arguments)
  return a + b
}

addArrow()
