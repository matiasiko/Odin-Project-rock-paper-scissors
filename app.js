let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll('.button');
const playerScoreDiv = document.getElementById('playerscore');
const computerScoreDiv = document.getElementById('computerscore');
const tie = document.getElementById('tie');
const h1 = document.getElementById('h1');


buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.value);
  });
});

// Computer randomly returns either rock, paper or scissors from an array
function computer() {
  let computerChoice = ['rock', 'scissors', 'paper'];
  computerSelection = computerChoice[Math.floor(Math.random() * computerChoice.length)];
  return computerSelection;
}

//  Check player selection against computer selection and update score variables
function playRound(playerSelection) {
  computerSelection = computer();

  if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {

    playerScore ++;
    playerScoreDiv.innerText = `Player Score: ${playerScore}`;
    h1.innerText = `You win: ${playerSelection} beats ${computerSelection}`;
    if (playerScore == 5) {
      h1.innerText = `Player Wins the Game`;
    }
  } else if (playerSelection == computerSelection) {
    console.log('its tie!')
  } else {
    computerScore ++;
    computerScoreDiv.innerText = `Computer Score: ${computerScore}`;
    h1.innerText = `Computer wins: ${computerSelection} beats ${playerSelection}`;


    if (computerScore == 5) {
      h1.innerText = `Computer Wins the game`;

    }
  }
}

function reset() {
  computerScore = 0;
  playerScore = 0;
}