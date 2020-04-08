var P1Button = document.getElementById("P1")
var P2Button = document.getElementById("P2")
var p1Display = document.getElementById("p1Display")
var p2Display = document.getElementById("p2Display")

var p1score = 0;
var p2score = 0;

var resetButton = document.getElementById("reset")

//Game Logic for termination
var gameOver = false;
var winningScore = 5;

//New winning score by user
var numInput = document.querySelector("input")

//Platying to Label from New Winning Score entered
var WinningScoreDisplay = document.getElementById("WinningScoreDisplay")


P1Button.addEventListener("click", function(){
   if (!gameOver){
    p1score++;
    if (p1score === winningScore){
        p1Display.classList.add("winner");
        gameOver = true;
        
    }
    p1Display.textContent = p1score;

   }
});


P2Button.addEventListener("click", function(){
    if (!gameOver){
        p2score++;
        if (p2score === winningScore){
            p2Display.classList.add("winner");
            gameOver= true;
            
        }
        p2Display.textContent = p2score;
    
       }

});

//Global reset Function
function reset(){
    p1score = 0;
    p1Display.textContent = p1score

    p2score = 0;
    p2Display.textContent = p2score;

    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;


}

//event listener which on click call the reset()
resetButton.addEventListener("click", function(){
    reset();
    
});



//set new winning score
//On change listener in the textbox which on change calls reset()
numInput.addEventListener("change", function(){

    WinningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});

