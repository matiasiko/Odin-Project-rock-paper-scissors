// GAME PLAY
// Ask User rock paper or scissors with prompt input
// Check computer choice against player choice
//  5 round game that keeps score and reports a winner or loser at the end.



let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll('.button');
const playerScoreDiv = document.getElementById('playerscore');
const computerScoreDiv = document.getElementById('computerscore');


buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.id === 'rock') {
      playerSelection = 'rock';
      computerSelection = computer();
      playRound(playerSelection, computerSelection);
      checkWinner();
    } else if (button.id === 'paper') {
      playerSelection = 'paper';
      computerSelection = computer();
      playRound(playerSelection, computerSelection);
      checkWinner();
    } else if (button.id === 'scissors') {
      playerSelection = 'scissors';
      computerSelection = computer();
      playRound(playerSelection, computerSelection);
      checkWinner();
    }
  });
});

// Computer randomly returns either rock, paper or scissors from an array
function computer() {
  let computerChoice = ['rock', 'scissors', 'paper'];
  computerSelection = computerChoice[Math.floor(Math.random()*computerChoice.length)];
  return computerSelection;
}

//  Check player selection against computer selection and update score variables
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'Tie!';
  } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
    return playerScore++;
  } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
    return playerScore++;
  } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
    return playerScore++;
  } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
    return computerScore++;
  } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
    return computerScore++;
  } else if ((playerSelection == "rock") && (computerSelection == "paper")) {
    return computerScore++;
  }
}

// Check winner and logout the winner with score
function checkWinner() {
  if (computerScore === playerScore) {
    console.log("Its tie!");
  } else if (playerScore > computerScore) {
    playerScoreDiv.innerText = `Player Score:${playerScore}`;
  } else if (computerScore > playerScore) {
    computerScoreDiv.innerText = `Computer Score:${computerScore}`;
  }
}

// 5 round game that keeps score and reports a winner or loser at the end of function.
function game(playerSelection) {
        // let playerSelection = prompt("Rock, Paper or Scissors?").toLocaleLowerCase();
        //randomly return one value from computerChoice Array
        computerSelection = computerChoice[Math.floor(Math.random()*computerChoice.length)];
        playRound(playerSelection, computerSelection);
        // console.log(`${computerScore} computer`);
        // console.log(`${playerScore} player`);
    checkWinner();
}