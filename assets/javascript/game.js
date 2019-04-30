//Global variables
const wordBank = ["espresso", "latte", "beans", "roast", "colombian", "ethiopian", "mug","cappuccino","barista","crema","mocha","extraction","americano","affogato","cortado"];

var winsText = document.getElementById("wins");
var remainingGuessesText = document.getElementById("remainingGuesses");
var chosenLettersText = document.getElementById("chosenLetters");
var correctWordText = document.getElementById("correctWord");
var charactersGuessed = [];
var correctLetters = [];
//Need to randomly pick a word from the array

var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];

//Need to display the underscores of the word and push correct letters
var underScore = [];
console.log(currentWord);
var makeUnderscores = () => {
    for (i = 0; i<currentWord.length; i++){
        underScore.push("_");
        document.getElementById("correctWord").innerHTML = underScore;
    }
}
console.log(makeUnderscores());



//Need to catch the user's keys

document.onkeydown = function(event) {
    var userGuess = event.key.toLowerCase(); 
    console.log(userGuess);
//Check to see if letter is in word

    var l = currentWord.indexOf(userGuess, 0); 

    if ( l > -1 ) {
        correctLetters.push(userGuess);
        underScore[currentWord.indexOf(userGuess)] = userGuess;
        document.getElementById("correctWord").innerHTML = underScore[currentWord.indexOf(userGuess)];
    }else {
        alert ("Try again");
    }
}

//Need to show guessed letters that aren't correct 
//Need to add to wins if word is guessed
//Need to pick a new word once it's guessed or guesses are used up
//Bonus: add pictures and facts and songs
