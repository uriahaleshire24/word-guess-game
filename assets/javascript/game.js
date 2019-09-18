//start
var word = ["cars", "aladdin", "walle", "up", "ratatouille", 
"frozen", "hercules", "bambi", "lionking", "brave",  
"cinderella", "atlantis", "zootopia", "abugslife", "atlantis",
"pinocchio", "pocahontas", "holes", "avengers", "brotherbear"];
console.log(word)

var chosenWord = "";

var rightWord = [];
var wrongWord = [];
var underScore =[];
/////
var docUnderScore = document.getElementById("underscore");
var docRightGuess = document.getElementById("rightGuess");
var docWrongGuess = document.getElementById("wrongGuess");

////////

findWord();

console.log(chosenWord);

function generateUnderscore() {
    if(underScore.length === 0){
        for(var i = 0; i < chosenWord.length; i++) {
            underScore.push(' _ ');
            console.log("pushed: " + i);
        }
    }

    
    docUnderScore.textContent = underScore.join("");

    // return underScore
}
//console.log(generateUnderscore());

// generateUnderscore();
// generateUnderscore();

//This function finds a new word
function findWord(){
    var randNum = Math.floor(Math.random() * word.length);
    chosenWord = word[randNum];

    generateUnderscore();
}

document.addEventListener("keypress", (event) => {
    console.log(event.key)
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
//docUnderScore.textContent = generateUnderscore();
