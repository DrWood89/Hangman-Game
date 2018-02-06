

var words = 
   ["LEBRONJAMES",
    "LAKERS",
    "COBY BRYANT",
    "GOLDEN STATES WARRIORS",
    "FINALS 2016",
    "MICHEAL JORDAN",
    "CELTICS",
    "ASSISTS",
    "ROCKETS",
    "CHAMPIONS"];
console.log(words);

var Wins1 = document.getElementById("wins");
wins.textContent = counter;
var counter = 0;
var guessRemaining= document.getElementById("stat");
stat.textContent = guessRemaining ;
var answerArray = [];


// onkeypress= myFunction()

var randWord = words[Math.floor(Math.random() * words.length)];
console.log(randWord);
function startUp(){
    for (var i = 0; i < randWord.length; i++) {
        answerArray.push("_");
        
    }
    console.log(answerArray);
    document.getElementById('Letter').textContent = answerArray;
    }
    startUp();

    function myFunction() {
        onclick
    }

    function ButtonCLick() {
        for (var i =0; i < randWord.length; i++) {
            var userGuess = document.getElementById("guessLetter").value;
            console.log(userGuess);
    
        }
    }
    document.getElementById("guessButton").addEventListener("click", ButtonClick);

    



   



//    s = answerArray.join(" ");
//     document.getElementById("guessForm") .innerHTML = s;


function myFunction() {
    var x = document.getElementById("guessButton").value;
    document.getElementById("Letter").innerHTML = x;
}
    if (guessLetter.length >0);
{

for (var i = 0; i < randWord.length; i++)
{
    if (randWord[i] === guessLetter)
    
    {
        answerArray[i] = Letter;
    }
}

}
counter++;
// .innerHTML = "Guess Remaining " + counter;
guessRemaining.innerHTML = counter;
if (counter > 5)
{
    // document.getElementById("stat").innerHTML = "Come on - you should know by now";
}










