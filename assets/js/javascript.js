//pick random word from array of words (object)
//add keydown function to determine the key pressed
//add if statement to find out if key pressed was equal to a letter in string
//add win condition to keydown event to see if game is completed
//add reset button to clear all counters (win, loss) to zero
//use local storage to save the win/loss counters
//add timer
var guessWord = ["e","x","q","u","i","s","i","t","e"];

function timerCount() {
    var pTime = 20;
    setInterval(function(){
        pTime--
        if(pTime>=0){
            id = document.getElementById("count");
            id.innerHTML = pTime;
        }
    },1000);
}