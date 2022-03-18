// Computer need randomly return either rock, paper or scissors
// - store rock paper scissor in array and randomly return one value
let computerChoice = ['rock', 'scissors', 'paper'];
let randomItem = computerChoice[Math.floor(Math.random()*computerChoice.length)];


const computerSelection = randomItem; // from computerChoice array

// #2 Check input against computer selection
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'TIE';
      } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
        return `Player won! ${playerSelection} beats ${computerSelection}`;
      } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
        return `Player won! ${playerSelection} beats ${computerSelection}`;
      } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        return `Player won! ${playerSelection} beats ${computerSelection}`;
      } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        return `Computer won! ${computerSelection} beats ${playerSelection}`;
      } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        return `Computer won! ${computerSelection} beats ${playerSelection}`;
      } else if ((playerSelection == "rock") && (computerSelection == "paper")) {
        return `Computer won! ${computerSelection} beats ${playerSelection}`;
      }
}

function game() {
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?").toLocaleLowerCase();
        let winner = playRound(playerSelection, computerSelection);
        console.log(winner);
    }
}
game();