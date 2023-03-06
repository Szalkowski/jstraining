const convertFahrenheitToCelcius = function(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}

const zeroCelcius = convertFahrenheitToCelcius(32)
const twentyCelcius = convertFahrenheitToCelcius(68)

console.log(zeroCelcius)
console.log(twentyCelcius)