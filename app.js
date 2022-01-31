const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],

  getGuess: function() { 
    const readIn = prompt(`Enter a guess between ${ game.smallestNum} and ${game.biggestNum}`)
    const number = parseInt(readIn)
    console.log(number)
    return number
  },
  
  render: function(guess) {
    if (guess === game.secretNum) {
      window.alert(`Congrats! You guessed the number in ${game.prevGuesses.length} guesses!`)
    } else if ( guess > game.secretNum) {
        window.alert(`Your guess is too high`)
    } else {
        window.alert(`Your guess is too low`)
    }
        window.alert(`Previous guesses: ${game.prevGuesses.join(',')}`)  
  },

  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    
    do {
      let guess = game.getGuess()
      this.prevGuesses.push(guess)
      game.render(guess)
     } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum);
    return `Good Job!`
  }
}//end game

console.log(game.play())