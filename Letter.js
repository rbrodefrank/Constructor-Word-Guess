var Letter = function (character) {
    this.character = character;
    this.guessed = false;

    // console.log(`Letter: ${character}`);

    this.correctlyGuessed = function () {
        if (this.guessed) {
            return this.character;
        } else {
            return "_";
        }
    }

    this.checkGuess = function (guess) {
        if(guess == this.character) {
            this.guessed = true;
            // console.log(`checkGuess: ${guess} is correct!`)
            return true;
        } else {
            return false;
        }
    }
}

// var test = new Letter("a");
// console.log(test.guessed);
// console.log(test.correctlyGuessed());
// test.checkGuess("a");
// console.log(test.guessed);
// console.log(test.correctlyGuessed());

module.exports = Letter;