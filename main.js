const buttons = document.querySelectorAll("button");
const setPlayerSelection = e => {
    if (e.target.id === "rock")
        playerSelection = "rock";
    else if (e.target.id === "paper")
        playerSelection = "paper";
    else
        playerSelection = "scissors";

    computerPlay();

    if(keepPlaying)
        playRound(playerSelection, computerSelection);

    checkScore();
}

buttons.forEach(button => {
    button.addEventListener('click', setPlayerSelection);
});

const computerScoreTag = document.querySelector("#computer span");
const playerScoreTag = document.querySelector("#player span");
const resultTag = document.querySelector("#round-result");


const updateScore = () => {
    computerScoreTag.textContent = `${computerWins}`;
    playerScoreTag.textContent = `${playerWins}`;
}

function playRound(playerSelection, computerSelection) {
    //Tie-> 0, Computer-> 1, Player->2
    let winner = 0;
    switch (computerSelection) {
        case "rock":
            if(playerSelection == "paper"){
                winner = 2;
            }else if (playerSelection == "scissors"){
                winner = 1;
            }else
                winner = 0;
            break;
        case "paper":
            if(playerSelection == "scissors"){
                winner = 2;
            }else if (playerSelection == "rock"){
                winner = 1;
            }else 
                winner = 0;
            break;
        case "scissors":
            if(playerSelection == "rock"){
                winner = 2;
            }else if (playerSelection == "paper"){
                winner = 1;
            }else
                winner = 0;
            break;    
        default:
            break;
    }
    
    if(winner == 0 ){
        resultTag.textContent = "It's a Tie";
        console.log("It's a tie");
    }else if(winner == 1){
        computerWins++;
        updateScore();
        resultTag.textContent = `Computer wins the round! ${computerSelection} beats ${playerSelection}`;
    }else{
        playerWins++;
        updateScore();
        resultTag.textContent = `Player wins the round! ${playerSelection} beats ${computerSelection}`;
    }
    console.log(`SCORE computer:${computerWins} player:${playerWins}`);
}

const computerPlay = () => {
    const computerRandomSelection = Math.floor(Math.random()*3);
    let randomSelection = "";
    switch (computerRandomSelection) {
        case 0:
            randomSelection = "rock";
            break;
        case 1:
            randomSelection = "paper";
            break;
        case 2:
            randomSelection = "scissors";
            break;
    }
    computerSelection = randomSelection;
}
let playerSelection = "";
// let computerSelection = computerPlay();
let computerSelection = "";
console.log(buttons);

let computerWins = 0;
let playerWins = 0;
let winner;
let keepPlaying = true;

let checkScore = () =>{
    if(computerWins < 5 && playerWins < 5){
        keepPlaying = true;
        console.log("now winner yet");
    }else{
        keepPlaying = false;
        if(computerWins == 5){
            winner = "computer";
            resultTag.textContent = `The winner is computer! Try Again!`;
            console.log("computer won the game");
        }
        else{
            console.log("player won the game");
            resultTag.textContent = `The winner is player!`;
            winner = "player"
        }
    }
}