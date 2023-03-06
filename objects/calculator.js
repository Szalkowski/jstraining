const fahrenheitConverter = function(fahrenheit) {
    const celsius = (fahrenheit - 32) * (5/9)
    const kelvin = (fahrenheit + 459.67) * (5/9)
    return {
        fahrenheit,
        celsius,
        kelvin
    }
}

const tempOne = fahrenheitConverter(32)
console.log(tempOne)