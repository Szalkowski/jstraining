class Hangman {
    constructor(word, guesses) {
        this.word = word.toLowerCase().split('')
        this.letters = []
        this.remainingGuesses = guesses
        this.status = 'playing'
    }

    getStatus() {
        const isFailed = this.remainingGuesses === 0
        const isFinished = this.word.every((letter) => this.letters.includes(letter))

        if (isFailed) {
            this.status = 'failed'
        } else if (isFinished) {
            this.status = 'finished'
        }
    }

    guessLetter(letter) {
        letter = letter.toLowerCase()
        const isUnique = !this.letters.includes(letter)
        const isBadGuess = !this.word.includes(letter)
        if (game.status !== "playing") {
            return
        }
        if (isUnique) {
            this.letters.push(letter)
        }
        if (isUnique && isBadGuess) {
            this.remainingGuesses -= 1
        }
        this.getStatus()
    }

    renderStatus() {
        switch (this.status) {
            case 'playing':
                return `Guesses left: ${this.remainingGuesses}`
            case 'failed':
                return `Nice try! The word was "${this.word.join('')}"`
            case 'finished':
                return 'Great work! You guessed the word!'
            default:
                return ''
        }
    }

    getPuzzle() {
        let puzzle = ''
        this.word.forEach((letter) => {
            puzzle += this.letters.includes(letter) || letter === ' ' ? letter : '*'
        })
        return puzzle
    }
}
