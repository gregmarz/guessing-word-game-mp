//pick random word from array of words (object)
//add keydown function to determine the key pressed
//add if statement to find out if key pressed was equal to a letter in string
//add win condition to keydown event to see if game is completed
//add reset button to clear all counters (win, loss) to zero
//use local storage to save the win/loss counters
//add timer
var startButtom = document.getElementById("#gameStart");
var tallyContainer = document.querySelector("#tally");
var gameContainer = document.querySelector("#game");
var guessWord = ["e","x","q","u","i","s","i","t","e"];
// var winCount = localStorage.getItem()
// var lossCount = localStorage.getItem()

function load() {
    tallyContainer.addEventListener("click",startButton);
    //timer
        var time = 10;
        var timeLeft = setInterval(function(){
            if (time <=0) {
                clearInterval(timeLeft);
            }
            time -=1;
        } ,1000);
        console.log(time);
    }
