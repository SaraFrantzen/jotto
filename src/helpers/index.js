
export function getLetterMatchCount(guessedWord, secretWord) {
    const secretLetters = secretWord.split('') // split the secret word into an array
    const guessedLetterSet = new Set(guessedWord) //make a set of the letters in the guessed word, more efficient to iterate over a set than array
    return secretLetters.filter(letter => guessedLetterSet.has(letter)).length //filter for any letter that is contained in the guessedLetter-Set. Which is returning an array and we want the length of that array
}

