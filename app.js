const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  // test to ensure it only takes in numbers within the range
  // ensure no letters or symbols can be taken in
  getGuess: function() { 
    const numChk = 1
    let readIn = prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}`)
    let number = parseInt(readIn)
    
    if (number > game.biggestNum || number < game.smallestNum || isNaN(number)) {
      if (number > game.biggestNum){
      window.alert(`Your guess is out of bounds! Guess a number below ${game.biggestNum}!`) 
      game.play()
      } else if (number < game.smallestNum) {
      window.alert(`Your guess is out of bounds! Guess a number above ${game.smallestNum}!`) 
      game.play()
      } else {
        window.alert(`Your guess is not a number! Enter a number!`)
        game.play()
      }
    }//end outer if
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