//Global variables
const wordBank = ["espresso", "latte", "beans", "roast", "colombian", "ethiopian", "mug", "cappuccino", "barista", "crema", "mocha", "extraction", "americano", "affogato", "cortado"];
var charactersGuessed = [];
var remainingGuesses = 9;
document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
var wins = 0;
document.getElementById("wins").innerHTML = wins;

var gameOver = false;

var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(currentWord);

var remainingLetters = [];
for (var i = 0; i < currentWord.length; i++) {
    remainingLetters[i] = "_";
}
var charactersLeft = currentWord.length;

//Here's the actual game

//show the word
document.getElementById("correctWord").innerHTML = remainingLetters.join(" ");
//get a guess

document.onkeyup = function (event) {

    var userGuess = event.key.toLowerCase();

    if(userGuess.length !==1) {
        return;
    } 

    if (gameOver) {
        resetGame();
        gameOver = false;
    } else{
        
        //check if letter is in the word 
        var l = currentWord.indexOf(userGuess);

        if (l > -1) {
            for (var j = 0; j < currentWord.length; j++) {
                if (currentWord[j] === userGuess) {
                    remainingLetters[j] = userGuess;
                    document.getElementById("correctWord").innerHTML = remainingLetters.join(" ");
                    charactersLeft--;
                } 
            }
        } else {
            remainingGuesses--;
            charactersGuessed.push(userGuess);
            // Need to show guessed letters that aren't correct 
            document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
            document.getElementById("chosenLetters").innerHTML = charactersGuessed;
        }
    }
    if (remainingLetters.indexOf("_") === -1) {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        alert("Nicely done! The word was: " + currentWord);
        //call a reset function to pick a new word
        resetGame();
    }
    if (remainingGuesses === 0) {
        alert("Sorry, better luck next time! The word was: " + currentWord);
        resetGame();
    }
    }

//End of Game



function resetGame() {
    charactersGuessed = [];
    remainingGuesses = 9;

    currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(currentWord);

    remainingLetters = [];
    for (var i = 0; i < currentWord.length; i++) {
        remainingLetters[i] = "_";
    }
    charactersLeft = currentWord.length;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("correctWord").innerHTML = remainingLetters.join(" ");
    document.getElementById("chosenLetters").innerHTML = charactersGuessed;

}
//Bonus: add pictures and facts and songs */
