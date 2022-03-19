// GAME PLAY
// Computer need randomly return either rock, paper or scissors from an array
// Ask User rock paper or scissors with prompt input
// Check computer choice against player choice
//  5 round game that keeps score and reports a winner or loser at the end.


// - store rock paper scissor in array and randomly return one value in game function
let computerChoice = ['rock', 'scissors', 'paper'];
let computerScore = 0;
let playerScore = 0;

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
  } else if (computerScore > playerScore) {
    console.log(`Computer got ${computerScore} points and Won! player got ${playerScore} points!`);
  } else if (playerScore > computerScore) {
    console.log(`Player got ${playerScore} points and Won! computer got ${computerScore} points!`);
  }
}

// 5 round game that keeps score and reports a winner or loser at the end.
function game() {
    for(let i = 0; i < 5; i++) {
        // Ask user input
        let playerSelection = prompt("Rock, Paper or Scissors?").toLocaleLowerCase();
        //randomly return one value from computerChoice Array
        computerSelection = computerChoice[Math.floor(Math.random()*computerChoice.length)];
        // Call the function playRound and update score variable by winner
        playRound(playerSelection, computerSelection);
        // console.log out the winner of each round
        console.log(`${computerScore} computer`);
        console.log(`${playerScore} player`);
    }
    // call check winner function  and log out the overall winner of 5 rounds!
    checkWinner();
}

game();
