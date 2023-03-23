let game
const statusEl = document.querySelector('#game-status')
const wordElement = document.querySelector('#word')

window.addEventListener('keypress', (e) => {
    const guess = e.key
    game.guessLetter(guess)
})

const render = () => {
    wordElement.textContent = game.getPuzzle()
    statusEl.textContent = game.renderStatus()
}

const startGame = async () => {
    const puzzle = await getPuzzle("2")
    game = new Hangman(puzzle, 5)
    render()
}

startGame()
