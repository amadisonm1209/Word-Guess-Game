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

    if (userGuess.length !== 1) {
        return;
    }

    if (gameOver) {
        resetGame();
        gameOver = false;
    } else {

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
        getAFact();
        //call a reset function to pick a new word
        resetGame();
    }
    if (remainingGuesses === 0) {
        alert("Sorry, better luck next time! The word was: " + currentWord);
        resetGame();
    }
}

//End of Game

function getAFact() {
    coffeeFacts = ["Coffee's origin can be traced back to Ethiopia, where there are still 6,000 - 10,000 varietals that continue to cross-pollinate. ", "The chocolate drink we all know as Mocha is actually named from the Port in Yemen where coffee was mainly exported from in its early days.", "Much like wine, coffee gets its distinct flavors in part from the terrior, or the soil and factors that go into growing it! So if you plant two of the same type, in two different places, they won't taste the same." , "Ever wonder why your coffee says things like natural or washed? These terms refer to what happened to the beans after picking. Natural means they were basically left to dry in the hot sun and washed were processed with water to separate the parts!", "There is no x in the word espresso.", "If you're used to order caramel macchiatos at Starbucks, I'm here to tell you you're going to be disappointed in other countries, where true macchiatos are served. They are a shot with a tiny bit of foam on top and absolutely no caramel."];
    var fact = coffeeFacts[Math.floor(Math.random() * coffeeFacts.length)];
    document.getElementById("coffeeFacts").innerHTML = fact;
}


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
