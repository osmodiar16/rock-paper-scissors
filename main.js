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
        return("It's a tie");
    }else if(winner == 1){
        return(`Computer wins! ${computerSelection} beats ${playerSelection}`);
    }else{
        return(`Player wins! ${playerSelection} beats ${computerSelection}`);
    }
}

let computerPlay = () => {
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
    return randomSelection
}

const playerSelection = "paper";
const computerSelection = computerPlay();
console.log(`Computer selection ${computerSelection} ||| player selection: ${playerSelection}`);
console.log(playRound(playerSelection, computerSelection));