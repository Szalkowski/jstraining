const tipCalculator = function(total, tipPercent = .2){
    const percent = tipPercent * 100
    const tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}`
}

const billOne = tipCalculator(100)
const billTwo = tipCalculator(150, .25)
console.log(billOne)
console.log(billTwo)