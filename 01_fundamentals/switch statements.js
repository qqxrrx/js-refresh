const day = 'wednesday'

switch (day) {
  case 'monday':
    console.log(`monday`)
    break
  case 'tuesday':
    console.log(`tuesday`)
    break
  case 'wednesday':
  case 'thursday':
    console.log(`wednesday + thursday`)
    break
  case 'friday':
    console.log(`friday`)
    break
  case 'saturday':
  case 'sunday':
    console.log(`sunday`)
    break
  default:
    console.log(`invalid day`)
}

if (day === 'monday') {
} else if (day === 'tuesday') {
} else if (day === 'wednesday' || day === 'thursday') {
} else if (day === 'friday') {
} else if (day === 'saturday' || day === 'sunday') {
} else {
}
