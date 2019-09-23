//start
var doubleWord = ["a","b","c",
"d","e","f",
"g","h","i",
"j","k","l",
"m","n","o",
"p","q","r",
"s","t","u",
"v","w","x",
"y","z"]








var movieBank = ["cars", "aladdin", "walle", "up", "ratatouille", "frozen", "hercules", "bambi", "lionking", "brave", "cinderella", "atlantis", "zootopia", "abugslife", "atlantis", "pinocchio", "pocahontas", "holes", "avengers", "brotherbear"];
var chosenWord = "";
var lettersInWord = "";
var numBlanks = 0;
var blankAndSuccesses = [];
var wrongLetters = [];
var winCount = 0;
var loseCount = 0;
var guessesLeft = 10 ;
var rightGuessCounter = 0;
/////
function reset(){
    choesenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    lettersInWord = chosenWord.split("");
    numBlanks = lettersInWord.length;

    letterGuessed = 0;
    rightGuessCounter = 0;
    guessesLeft = 10;
    wrongLetters =[];
    blankAndSuccesses=[];
    doubleWord = ["a","b","c",
    "d","e","f",
    "g","h","i",
    "j","k","l",
    "m","n","o",
    "p","q","r",
    "s","t","u",
    "v","w","x",
    "y","z"];

    test=false
    startGame();
}
function startGame(){
    choesenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    lettersInWord = chosenWord.split("");
    numBlanks = lettersInWord.length;

    rightGuessCounter = 0;
    guessesLeft = 10;
    wrongLetters =[];
    blankAndSuccesses=[];
    doubleWord = ["a","b","c",
    "d","e","f",
    "g","h","i",
    "j","k","l",
    "m","n","o",
    "p","q","r",
    "s","t","u",
    "v","w","x",
    "y","z"];

        for(var i = 0; i< numBlanks; i++){
            blankAndSuccesses.push("_");
            document.getElementById("wordToGuess").innerHTML = blankAndSuccesses;
        }
    document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById('numGuesses').innerHTML = guessesLeft;
    document.getElementById('winCounter').innerHTML = winCount;
    document.getElementById('lossCounter').innerHTML = loseCount;
    document.getElementById('wrongGuesses').innerHTML = wrongLetters;

////////
    console.log(chosenWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blankAndSuccesses);
}





function compareLetters(userKey){
        console.log("is it working");
        if(chosenWord.indexOf(userKey) > -1){
            for(var i = 0; i < numBlanks; i++){
                if(lettersInWord[i] === userKey){
                    rightGuessCounter++;
                    blankAndSuccesses[i] = userKey
                }
            }
        }
}

    
   