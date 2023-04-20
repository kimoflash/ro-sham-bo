
const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return choices[~~(Math.random() * choices.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    let getPlayerChoice = prompt("Which weapon would you choose? Rock, Paper, or Scissors?");
    playerSelection = getPlayerChoice.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();
    
    if (playerSelection == computerSelection) {
        playerScore++;
        computerScore++;
        return `It's a tie! You both chose ${playerSelection.toUpperCase()}. Your Score: ${playerScore}, Computer Score: ${computerScore}`;
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "paper" && computerSelection == "rock") || 
        (playerSelection == "scissors" && computerSelection == "paper")
        ) {
        playerScore++;
        return `You win! ${playerSelection[0].toUpperCase() + playerSelection.substring(1)} beats ${computerSelection}. Your Score: ${playerScore}, Computer Score: ${computerScore}`;
    } else {
        computerScore++;
        return `You lose! ${playerSelection[0].toUpperCase() + playerSelection.substring(1)} is weak against ${computerSelection}. Your Score: ${playerScore}, Computer Score: ${computerScore}`;    
    }
}

console.log(playRound());

/*
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
        if (i === 4) {
            if (playerScore > computerScore) {
                console.log("Game Over. ALL HAIL! YOU WIN!");
            } else if (playerScore < computerScore) {
                console.log("Game Over. AW, SNAP! COMPUTER WINS.")
            } else if (playerScore === computerScore) {
                console.log("Game Over. IT'S A TIE! HIT F5 AND PLAY ONE MORE ROUND!")
            }
        }
     }
}

game();
*/

