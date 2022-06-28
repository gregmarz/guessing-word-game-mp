//pick random word from array of words (object)
//add keydown function to determine the key pressed
//add if statement to find out if key pressed was equal to a letter in string
//add win condition to keydown event to see if game is completed
//add reset button to clear all counters (win, loss) to zero
//use local storage to save the win/loss counters
//add timer
var guessWord = ["e","x","q","u","i","s","i","t","e"];
var button = document.querySelector("button");
var loss = document.getElementById("loss");
var wins = document.getElementById("wins");
var pWin = 0;
var pLoss = 0;


button.addEventListener("click", function() {
    //timer function
    var pTime = 5;
    var interval = setInterval(function(){
        pTime--
        if(pTime>=0){
            id = document.getElementById("count");
            id.innerHTML = pTime;
        }
        if (pTime <= 0) {
        pLoss++
        loss.innerHTML = pLoss;
        clearInterval(interval);
    } else {
        pWin++
        wins.innerHTML = pWin;
        clearInterval(interval);
    }
    },1000);

    
},1000); 