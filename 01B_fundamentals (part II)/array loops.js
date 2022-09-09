'use strict'

const john = ['John', 'Doe', 2044 - 2020, 'professor', ['A', 'B', 'C']]

const types = []

console.log(`---array for loop---`)
for (let i = 0; i < john.length; i++) {
  console.log(john[i], `(${typeof john[i]})`)
  //types[i] = typeof john[i]
  types.push(typeof john[i])
}

console.log(types)

const years = [1991, 2007, 1969, 2020]

const ages = []
for (let i = 0; i < years.length; i++) {
  ages.push(2044 - years[i])
}

console.log(ages)

console.log(`--continue = continue execution and skip following code--`)
// continue = continue execution and skip following code
for (let i = 1; i <= 10; i++) {
  if (i === 8) continue
  if (i % 2 === 0) console.log(`not odd: ${i} and not 8`)
}

console.log(`--only strings and ignore other types using 'continue--'`)
// only strings and ignore other types using 'continue'
for (let i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue
  console.log(john[i], typeof john[i])
}

console.log(`--break = exit loop--`)
// break = exit loop
for (let i = 1; i <= 10000; i++) {
  if (i === 10) break
  console.log(`current count: ${i}`)
}

console.log(`--execute 'break' when number encountered--`)
// execute 'break' when number encountered
for (let i = 0; i < john.length; i++) {
  if (typeof john[i] === 'number') break
  console.log(john[i], typeof john[i])
}

console.log(`---array foreach loop---`)
john.forEach((e) => console.log(e, `(${typeof e})`))
