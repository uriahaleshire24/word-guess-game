//start
const word = ["lionking", "aladdin", "perterpan", 
"frozen", "liloandstitch", "bambi", 
"robinhood", "atlantis", "theemperorsnewgroove",
"treasureplanet", "therescuedownunder", "holes"];
console.log(word)

var randNum = Math.floor(Math.random() * word.length);
var chosenWord = word[randNum];
var rightWord = [];
var wrongWord = [];
var underScore =[];
/////
var docUnderScore = document.getElementsByClassName("underscore");
var docRightGuess = document.getElementsByClassName("rightGuess");
var docWrongGuess = document.getElementsByClassName("wrongGuess");

////////

console.log(chosenWord);

var generateUnderscore = () => {
    for(var i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}
console.log(generateUnderscore());

document.addEventListener("keypress", (event) => {
    var keyword = String.fromCharCode(event.keyCode);
    
        if(chosenWord.indexOf(keyword) > -1) {
            rightWord.push(keyword);
            

            underScore[chosenWord.indexOf(keyword)] = keyword;
            docUnderScore[0].innerHTML = underScore.join(' ');
            // docRightGuess[0].innerHTML = rightWord;
            if(underScore.join('') == chosenWord) {
                alert("you win")
            }
        }
        else{
            wrongWord.push(keyword);
            // docWrongGuess[0].innerHTML = wrongWord;
        } 

}); 
docUnderScore[0].innerHTML = generateUnderscore().join(' ');
