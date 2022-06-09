const startGameBtn = document.getElementById('start-game-btn');
const SELECTION_ROCK = 'ROCK';
const SELECTION_PAPER = 'PAPER';
const SELECTION_SCISSOR = 'SCISSOR';
const DEFAULT_USER_CHOICE = SELECTION_ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WIN = 'PLAYER_WIN';
const RESULT_COMPUTER_WIN = 'COMPUTER_WIN';

let gameIsRunning = false;
// function startGame(){
//     console.log("Game is starting");
// }

// const person = {
//     greet : function greet(){
//         console.log('Hello there');
//     }
// };

// const start = function started(){
//     console.log('Game started');
// }

const getPlayerChoice = function(){
    const selection = prompt(`${SELECTION_ROCK}, ${SELECTION_PAPER} or ${SELECTION_SCISSOR}`, '').toUpperCase();
    if(selection != SELECTION_ROCK && selection != SELECTION_PAPER && selection != SELECTION_SCISSOR){
        alert(`Wrong choice! We choose ${DEFAULT_USER_CHOICE} for you`);
    }
}

const getComputerChoice = function(){
    const randomValue = Math.random(); // Returns random value between 0 and 1
    if(randomValue < 0.34){
        return SELECTION_ROCK;
    }else if(randomValue < 0.67){
        return SELECTION_ROCK;
    }else{
        return SELECTION_SCISSOR;
    }
};

// Arrow function 
// const getWinner = (pChoice, cChoice) =>
//     pChoice == cChoice) ? RESULT_DRAW : ((cChoice == SELECTION_PAPER && pChoice == SELECTION_ROCK) || (cChoice == SELECTION_ROCK && pChoice == SELECTION_SCISSOR) || (cChoice == SELECTION_SCISSOR && pChoice == SELECTION_PAPER) ? RESULT_COMPUTER_WIN : RESULT_PLAYER_WIN;

const getWinner = function(pChoice, cChoice){
    if(pChoice == cChoice){
        return RESULT_DRAW;
    }else if((cChoice == SELECTION_PAPER && pChoice == SELECTION_ROCK) || (cChoice == SELECTION_ROCK && pChoice == SELECTION_SCISSOR) || (cChoice == SELECTION_SCISSOR && pChoice == SELECTION_PAPER)){
        return RESULT_COMPUTER_WIN;
    }else{
        return RESULT_PLAYER_WIN;
    }
}

startGameBtn.addEventListener('click', function(){
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerSelection, computerChoice);
    // console.log(winner);
    let message = `You picked ${playerSelection} and computer picked ${computerChoice}, therefore result is `;
    if(winner === RESULT_DRAW){
        messsage =  message + `draw`;
    }else if(winner == RESULT_PLAYER_WIN){
        message = message + `won`;
    }else{
        messsage = message + `lost`;
    }
    alert(messsage);
    gameIsRunning = false;
});