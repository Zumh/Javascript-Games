var titleImages = [];
var tileArray = [];
var tileFlipOver = [];
var cardFlip = -1;
var playLockout = false;
var timer = '';
var startButton = document.getElementById("start");
var gameBoard = document.getElementById("gameboard");
var message = document.getElementById("message");
var score = document.getElementById("score");
var gamePlay = false;

// Event listeners
startButton.addEventListener('click', startGame);

function startGame(){
    playLockout = false;
    cardFlip = -1;
    startButton.style.display = 'none';
    if(!gamePlay){
        gamePlay = true;
        buildArray();
    }
}

function buildArray(){
    for(; ;){
        
    }
}

function shuffleArray(){

}

function buildBoard(){

}