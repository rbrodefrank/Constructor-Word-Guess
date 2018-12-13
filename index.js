var Word = require("./Words");
var inquirer = require("inquirer");
var fs = require("fs");


//Reads the wordlist file and turns it into an array

var wordList = [];
var guessWord;
var guessesLeft;
fs.readFile('./wordList.txt', "utf8", function (err, data) {
    if (err) throw err;
    wordList = data.split("\r\n");
    // console.log("readFile");
    // console.log(wordList);

    //Find and print duplicate words in wordList.txt
    // wordList.sort();
    // for(var i = 0; i < wordList.length-1; i++) {
    //     if(wordList[i] == wordList[i+1]) {
    //         console.log(wordList[i]);
    //     }
    // }
    
    newWord();
});

function newWord() {
    guessesLeft = 8;

    var rand = Math.floor(Math.random() * wordList.length);
    guessWord = new Word(wordList[rand]);
    console.log("New Word\n")
    console.log(`${guessWord.toString()}\n`);
    letterPrompt();
}

function letterPrompt() {
    inquirer.prompt([
        {
            name: "letter",
            type: "input",
            message: "Guess a letter in the word."
        }
    ]).then(function (response) {
        if (response.letter.length == 1) {
            var ascii = response.letter[0].toLowerCase();
            // console.log(`letter: ${ascii}`);
            ascii = ascii.charCodeAt(0);
            if (ascii >= 97 && ascii < 123) {
                var right = guessWord.letterGuess(response.letter[0]);
                if (right) {
                    console.log(`Correct!\n`);
                } else {
                    guessesLeft--;
                    if (guessesLeft > 0) {
                        console.log(`Wrong! Try again.\nGuesses left ${guessesLeft}`);
                    } else {
                        console.log(`Wrong! You're out of guesses!`);
                    }
                }
            } else {
                console.log("Input a letter, 'a' through 'z'.");
            }
        } else if (response.letter.length < 1) {
            console.log("Input empty, enter a letter");
        } else {
            console.log("Too many letters! Just input 1 letter");
        }
        var displayWord = guessWord.toString();
        if(guessesLeft <= 0) {
            console.log(`You Lose!\n`);
            newWord();
        } else if (displayWord.indexOf("_") < 0) {
            console.log(`${displayWord}\nYou Won!\n`);
            newWord();
        } else {
            console.log(`${guessWord.toString()}\n`);
            letterPrompt();
        }
    });
}