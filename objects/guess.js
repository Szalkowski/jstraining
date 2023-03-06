const makeGuess = function(guess) {
    const randomNum = Math.floor(Math.random() * (5 - 1 + 1)) + 1
    console.log(randomNum)
    return randomNum === guess
}

console.log(makeGuess(3))