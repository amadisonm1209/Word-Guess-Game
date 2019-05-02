//Global variables
const wordBank = ["espresso", "latte", "beans", "roast", "colombian", "ethiopian", "mug", "cappuccino", "barista", "crema", "mocha", "extraction", "americano", "affogato", "cortado"];

var charactersGuessed = [];
var remainingGuesses = 9;
document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(currentWord);
gameOver = false;

// function firstWord(){
// for (var i = 0; i < currentWord.length; i++) {
//     underScore[i] = " _ ";
//     document.getElementById("correctWord").innerHTML = underScore;
// } return underScore;
// } underScore.push("_");

// firstWord();

// function newWord() {
//     currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
//     console.log(currentWord);
//     for (var i = 0; i < currentWord.length; i++) {
//     underScore[i] = " _ ";
//     document.getElementById("correctWord").innerHTML = underScore;
// } return underScore;
// } underScore.push("");


var remainingLetters = [];
for (var i = 0; i < currentWord.length; i++) {
    remainingLetters[i] = "_";
}

var charactersLeft = currentWord.length;


var wins = 0;
document.getElementById("wins").innerHTML = wins;

//Here's the actual game

     //show the word
    document.getElementById ("correctWord").innerHTML = remainingLetters.join(" ");
    //get a guess
    document.onkeyup = function(event) {

    if (gameOver) {
        resetGame();
        gameOver = false;
    } else {

    var userGuess = event.key.toLowerCase();
    //check if letter is in the word 
    var l = currentWord.indexOf(userGuess);

    if (l > -1) {
        for (var j = 0; j < currentWord.length; j++) {
        if (currentWord[j] === userGuess) {
                remainingLetters[j] = userGuess;
                charactersLeft--;
                document.getElementById("correctWord").innerHTML = remainingLetters.join(" ");
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
    if (charactersLeft === 0){
        wins++;
        document.getElementById("wins").innerHTML = wins;
        alert ("Nicely done! The word was: " + currentWord);
        //call a reset function to pick a new word
        resetGame();
    } 
  
}
 //End of Game


function resetGame() {
    charactersGuessed = [];
    remainingGuesses = 9;
    
    var currentWord =  wordBank[Math.floor(Math.random() * wordBank.length)];

    remainingLetters = [];
    for (var i = 0; i < currentWord.length; i++) {
        remainingLetters[i] = "_";
    }
    charactersLeft = currentWord.length;
    updateDisplay();
}

function updateDisplay(){
    document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById ("correctWord").innerHTML = remainingLetters.join(" ");
}
//Bonus: add pictures and facts and songs */
