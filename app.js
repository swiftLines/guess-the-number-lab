const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  // 1) Add prevGuess property to game{} set to empty []
  prevGuess: [],
  // 2) Add getGuess method to game{} that prompts player to enter
  //    a guess which is formatted as `Enter a guess between ${smallestNum} and
  //    ${biggestNum}` !!! use template literal for the prompt message !!!
  //    -  3) Ensure getGuess method returns a value that:
  //         *  is a number, not a string
  //         *  is between smallestNum and biggestNum 
  //         !!! use while loop!!!
  //         !!! parseInt returns Nan if the string cannot be parsed into a number!!!
  getGuess: function() { //may not need param for guess
    //prompt and read in input from user
    const readIn = prompt(`Enter a guess between ${smallestNum} and ${biggestNum}`)
    return readIn
  },
  
  // 5) Add render() to game{} that play() will call after a guess has been made that alerts:
  //      - if secret has been guessed: `Congrats! You guessed the number in ${number of prevGuesses}!`
  //      - otherwise: `Your guess is too ${high}|${low}` `Previous guesses: x,x, x, x`
  //      !!! render() wont be able to access play() local variables e.g. guess,  so pass render() arguments, if built program as such
  //      !!! template literals not only have interpolation,but also honor whitespace, including line breaks!
  //      !!! the LIST of previous guesses can be generated using built-in     join()
  render: function(guess, secretNum, prevGuesses) {
    if (guess === secretNum) {
      console.log `Congrats! You guessed the number in ${prevGuesses.length} guesses!`
    } else {
      if ( guess > secretNum) {
        console.log `Your guess is too high`
      } else {
        console.log `Your guess is too low`
      }
      console.log `Previous guesses: ${prevGuesses.join(', ')}`
    }
  },
  // 4) From within play() method, invoke getGuess() from inside a loop, and    add the new guess to the prevGuesses[]  !!! use for while or do while loop
  // 6) play() should end (return) when the guess matches secretNum
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      //nvoke getGuess() from inside a loop
    do {
      let guess = getGuess()
      prevGuesses.push(guess)
      render(guess, secretNum, prevGuesses)
    } while (guess !== secretNum);
    return `Good Job!`
  }
}//end game