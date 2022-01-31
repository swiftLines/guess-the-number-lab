console.log `Guess the Number Party!`
console.log('Guess the Number Party!')
const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],

  getGuess: function() { 
    const readIn = prompt(`Enter a guess between ${ game.smallestNum} and ${game.biggestNum}`)
    const number = readIn
    console.log(number)
    return number
  },
  
  render: function(guess) {
    if (guess === game.secretNum) {
      console.log `Congrats! You guessed the number in ${game.prevGuesses.length} guesses!`
    } else if ( guess > game.secretNum) {
        console.log `Your guess is too high`
    } else {
        console.log `Your guess is too low`
    }
    console.log `Previous guesses: ${game.prevGuesses.join(',')}`
    
  },

  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    
    do {
      let guess = game.getGuess()
      game.prevGuesses.push(guess)
      game.render(this.guess)
    } while (this.guess !== this.secretNum);
    return `Good Job!`
  }
}//end game

console.log(game.play())