//exercise4: tip calculator

function compute(bill) {
  const minTip15 = 50
  const maxTip15 = 300
  const tip15Percent = 0.15
  const tipOtherPercent = 0.2

  const tip =
    bill >= minTip15 && bill <= maxTip15
      ? bill * tip15Percent
      : bill * tipOtherPercent
  const totalValue = bill + tip

  console.log(
    `The bill was ${bill}, the tip was ${tip}, and total value ${totalValue}`
  )
}

compute(275)
compute(40)
compute(430)
