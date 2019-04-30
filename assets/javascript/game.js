//Global variables
const wordBank = ["espresso", "latte", "beans", "roast", "colombian", "ethiopian", "mug", "cappuccino", "barista", "crema", "mocha", "extraction", "americano", "affogato", "cortado"];

var charactersGuessed = [];
var remainingGuesses = 9;
var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];

console.log(currentWord);

var underScore = [];
for (var i = 0; i < currentWord.length; i++) {
    underScore[i] = "_";
} 

var remainingLetters = currentWord.length;


//Here's the actual game
    document.onkeyup = function (event) {
        var userGuess = event.key.toLowerCase();

        var l = currentWord.indexOf(userGuess, 0);
        console.log(userGuess);

        if (l > -1) {
            for (var j = 0; j < currentWord.length; j++) {
                if (currentWord[j] === userGuess) {
                    underScore[j] = userGuess;
                    document.getElementById("correctWord").innerHTML = underScore.join(" ");
                    remainingLetters--;
                }
            }
        } else {
            remainingGuesses--;
        }
    }

//Need to show guessed letters that aren't correct 
//Need to add to wins if word is guessed
//Need to pick a new word once it's guessed or guesses are used up
//Bonus: add pictures and facts and songs */
