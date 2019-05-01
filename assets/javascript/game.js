//Global variables
const wordBank = ["espresso", "latte", "beans", "roast", "colombian", "ethiopian", "mug", "cappuccino", "barista", "crema", "mocha", "extraction", "americano", "affogato", "cortado"];

var charactersGuessed = [];
var underScore = [];
var remainingGuesses = 9;
document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(currentWord);

function firstWord(){
for (var i = 0; i < currentWord.length; i++) {
    underScore[i] = " _ ";
    document.getElementById("correctWord").innerHTML = underScore;
} return underScore;
}

firstWord();

function newWord() {
    currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(currentWord);
    for (var i = 0; i < currentWord.length; i++) {
    underScore[i] = " _ ";
    document.getElementById("correctWord").innerHTML = underScore;
} return underScore;
}

var remainingLetters = currentWord.length;
console.log(remainingLetters);
var wins = 0;
document.getElementById("wins").innerHTML = wins;

//Here's the actual game
    document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    var l = currentWord.indexOf(userGuess);

    console.log(userGuess);

    if (l > -1) {
        for (var j = 0; j < currentWord.length; j++) {
            if (currentWord[j] === userGuess) {
                underScore[j] = userGuess;
                document.getElementById("correctWord").innerHTML = underScore.join("");
                remainingLetters--;

            } if (remainingLetters === 0) {
                //Need to add to wins if word is guessed
                wins++;
                document.getElementById("wins").innerHTML = wins;
                alert ("Nicely done! The word was: " + currentWord);
                reset();
            }
        }
    } else if (l === -1) {
        remainingGuesses--;
        charactersGuessed.push(userGuess);
        //Need to show guessed letters that aren't correct 
        document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
        document.getElementById("chosenLetters").innerHTML = charactersGuessed;
    }
}

function reset(){
    charactersGuessed = [];
    remainingGuesses = 9;
    underScore = [];
    newWord();
    game();
}



//Bonus: add pictures and facts and songs */
