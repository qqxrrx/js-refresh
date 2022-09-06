const age = 18

if (age === 18) {
  console.log(`just became an adult`)
}

// BUG PRONE, AVOID
console.log(`loose equality operator: ${0 == false} (has type coercion)`)

console.log(`strict equality operator: ${0 === false} (no type coercion)`)

// value from prompt is string by default
const favorite = Number(prompt(`what is your favorite number?:`, 0))

console.log(typeof favorite)

if (favorite === 23) {
  console.log(`23 is nice`)
} else if (favorite === 7) {
  console.log(`lucky 7`)
} else {
  console.log(`number was: ${favorite}`)
}

if (favorite !== 42) {
  console.log(`guess again`)
} else {
  console.log(`answer of universe number`)
}
