var Letter = require("./Letter");

var Word = function (string) {
    this.letters = [];

    this.toString = function () {
        var string = ""
        for (var i = 0; i < this.letters.length; i++) {
            // console.log("for:" + this.letters[i].character)
            string += `${this.letters[i].correctlyGuessed()} `;
        }
        // console.log(`toSting: ${string}`)
        return string;
    }

    this.letterGuess = function (guess) {
        var correct = false;
        for (var i = 0; i < this.letters.length; i++) {
            var ret = this.letters[i].checkGuess(guess);
            if(ret) {
                correct = true;
            }
        }
        return correct;
    }


    //Add Letter objects to Word
    var arr = string.split("");
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        // console.log(string[i]);
        var newLetter = new Letter(arr[i]);
        newLetter.correctlyGuessed();
        this.letters.push(newLetter);
    }
}

// var test = new Word("Hello");
// console.log(test.letters);
// console.log(test.toString());
// console.log(check);

module.exports = Word;