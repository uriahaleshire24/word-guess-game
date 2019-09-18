//start
const word = ["Lion King", "Aladdin", "Perter Pan", 
"Frozen", "lilo & Stitch", "Bambi", 
"Robin Hood", "Atlantis", "The Emperors New Groove",
"Treasure Planet", "The Rescue Down Under", "Holes"];

var randNum = Math.floor(Math.random() * word.length);
var chosenWord = word[randNum];
var rightWord = [];
var wrongWord = [];
var underScore =[];




console.log(chosenWord);

var generateUnderscore = () => {
    for(var i = 0; i < chosenWord.length; 1++) {
        underScore.push("_");
    }
    return underScore;
}
console.log(generateUnderscore());

document.addEventListener("keypress", (event) => {
    var keyword = String.fromCharCode(event.keyCode);
    
        if(chosenWord.indexOf(keyword) > -1) {
            rightWord.push(keyword);
            underScore[chosenWord.indexOf(keyword)] =keyword;
        }
        else(wrongWord.push(keyword);


}); 
