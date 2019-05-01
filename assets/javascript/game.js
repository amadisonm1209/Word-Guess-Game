//Global variables
const wordBank = ["espresso", "latte", "beans", "roast", "colombian", "ethiopian", "mug", "cappuccino", "barista", "crema", "mocha", "extraction", "americano", "affogato", "cortado"];

var charactersGuessed = [];
var remainingGuesses = 9;
document.getElementById("remainingGuesses").innerHTML = remainingGuesses;

var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];

console.log(currentWord);

var underScore = [];
for (var i = 0; i < currentWord.length; i++) {
    underScore[i] = " _ ";
    document.getElementById("correctWord").innerHTML = underScore;
}

var remainingLetters = currentWord.length;

var wins = 0;
document.getElementById("wins").innerHTML = wins;

//Here's the actual game
document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    var l = currentWord.indexOf(userGuess);

console.log(userGuess);
    if (l > -1) {
        for (var j = 0; j < currentWord.length; j++) {
            if (currentWord[j] === userGuess) {
                underScore[j] = userGuess;
                document.getElementById("correctWord").innerHTML = underScore.join(" ");
                remainingLetters--;    
                } if (remainingLetters === 0) {
                    wins++;
                    document.getElementById("wins").innerHTML = wins;
                }
            }
        } else if (l === -1) {
        remainingGuesses--;
        charactersGuessed.push(userGuess);
        document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
        document.getElementById("chosenLetters").innerHTML = charactersGuessed;
    
}
}



//Need to show guessed letters that aren't correct 
//Need to add to wins if word is guessed
//Need to pick a new word once it's guessed or guesses are used up
//Bonus: add pictures and facts and songs */
