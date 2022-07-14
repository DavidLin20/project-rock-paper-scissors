/* randomly return rock, paper, scissors*/
function computerPlay() {
    let choice  = ["rock", "paper", "scissors"];
    return choice = choice[Math.floor(Math.random()*choice.length)];
}

/* Compare two results and who is winner*/
function playRound (playerSelection, computerSelection) {
    playerSelection = prompt("you");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();   
    let result;

    if (playerSelection == computerSelection) {
        return result = "Tie!";
    } else if ((playerSelection == "rock" && computerSelection == "scissors")
    || (playerSelection == "scissors" && computerPlay == "paper") || (playerSelection == "paper" && computerSelection == "rock")) {
        return result = "You win!";
    } else {
        return result = "You lose!";
    }
}

function game() {
    for (let i = 0; i < 5; i++){
        console.log(playRound());
    }
}