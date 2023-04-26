
const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return choices[~~(Math.random() * choices.length)];
}

var playerScore = 0;
var computerScore = 0;

const playerChoiceBtn = document.querySelectorAll('button');

playerChoiceBtn.forEach((button) => {
    button.addEventListener('click', function (e){
        playRound(e.target.textContent, getComputerChoice())
    });

    // THIS IS THE SHORT FORM
    /*
    button.addEventListener('click', (e) => {
        playRound(e.target.textContent, getComputerChoice())
    });
    */ 
});

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();
 
    if (playerChoice == computerChoice) {
        playerScore++;
        computerScore++;
        const tie = `It's a tie! You both chose ${playerSelection.toUpperCase()}. Your Score: ${playerScore}, Computer Score: ${computerScore}`;
        showResult(tie);
    } else if (
        (playerChoice == "rock" && computerChoice == "scissors") || 
        (playerChoice == "paper" && computerChoice == "rock") || 
        (playerChoice == "scissors" && computerChoice == "paper")
        ) {
        playerScore++;
        const win = `You win! ${playerSelection[0].toUpperCase() + playerSelection.substring(1)} beats ${computerSelection}. Your Score: ${playerScore}, Computer Score: ${computerScore}`;
        showResult(win);
    } else {
        computerScore++;
        const lose = `You lose! ${playerSelection[0].toUpperCase() + playerSelection.substring(1)} is weak against ${computerSelection}. Your Score: ${playerScore}, Computer Score: ${computerScore}`;
        showResult(lose);
    }

}

function showResult(message) {
    const result = document.getElementById('result');
    result.textContent = message;
}


// THIS IS NOT YET WORKING! SHOULD BE SHOWING THE WINNER THAT SCORES 5 FIRST
function showWinner(playerScore, computerScore) {
    const playerWins = "ALL HAIL! YOU WIN! Hit F5 to play one more round!";
    const computerWins = "AW, SNAP! COMPUTER WINS. Hit F5 to play one more round!";

    if (playerScore = 5) {
        winnerResult.textContent = playerWins;
    } else if (computerScore == 5) {
        winnerResult.textContent = computerWins;
    }
}

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
*/ 