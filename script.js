
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
        const tie = `It's a tie! You both chose ${playerSelection.toUpperCase()}.`; 
        showResult(tie);
    } else if (
        (playerChoice == "rock" && computerChoice == "scissors") || 
        (playerChoice == "paper" && computerChoice == "rock") || 
        (playerChoice == "scissors" && computerChoice == "paper")
        ) {
        playerScore++;
        const win = `You win! ${playerSelection[0].toUpperCase() + playerSelection.substring(1)} beats ${computerSelection}.`
        showResult(win  );
    } else {
        computerScore++;
        const lose = `You lose! ${playerSelection[0].toUpperCase() + playerSelection.substring(1)} is weak against ${computerSelection}.`;
        showResult(lose);
    }
    const runningScore = `Your Score: ${playerScore} Computer Score: ${computerScore}`;
    showScore(runningScore);
    showWinner(playerScore, computerScore);
}

function showResult(message, count) {
    const result = document.getElementById('result');
    result.textContent = message;
    
}

function showScore(currentScore) {
    const score = document.getElementById('score');
    score.textContent = currentScore;
}

function showWinner(playerScore, computerScore) {
    const playerWins = "ALL HAIL! YOU WIN! Hit F5 to play one more round!";
    const computerWins = "AW, SNAP! COMPUTER WINS. Hit F5 to play one more round!";

    if (playerScore == 5) {
        prompt(playerWins);
    } else if (computerScore == 5) {
        prompt(computerWins);
    }
}

