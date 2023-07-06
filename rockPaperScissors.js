
const compChoice = computerTurn();
const playerChoice = "rock";

function computerTurn() {
  let choiceNum = Math.floor(Math.random() * 3);

  if (choiceNum === 0) {
    choiceNum = "rock";
  } else if (choiceNum === 1) {
    choiceNum = "paper";
  } else if (choiceNum === 2) {
    choiceNum = "scissors";
  }
  return choiceNum;
}

function playRound(compChoice, playerChoice) {
  let startRound = confirm("Press OK to start round or Cancel to cancel round!")

  if (startRound) {
    if (compChoice === playerChoice) {
      alert("you tied!")
    } else if (compChoice === "paper" && playerChoice === "rock") {
      alert("You lose!")
    } else if (compChoice === "paper" && playerChoice === "scissors") {
      alert("you win!")
    } else if (compChoice === "rock" && playerChoice === "paper") {
      alert("you win!")
    } else if (compChoice === "rock" && playerChoice === "scissors") {
      alert("you lose!")
    } else if (compChoice === "scissors" && playerChoice === "paper") {
      alert("you lose!")
    } else if (compChoice === "scissors" && playerChoice === "rock") {
      alert("You win!")
    }
  } else {
    alert("You canceled!")
  }
}

console.log(playRound(compChoice, playerChoice))

// function playRound(compChoice) {
//   let playerChoice = prompt("Pick rock, paper scissors.");

//   if (playerChoice === "rock") {
//     playerChoice = 0;
//   } else if (playerChoice === "paper") {
//     playerChoice = 1;
//   } else if (playerChoice === "scissors") {
//     playerChoice = 2;
//   }

//   if (playerChoice === compChoice) {
//     alert("you tied!");
//   } else if (playerChoice > compChoice) {
//     alert("You won!");
//   } else if (playerChoice < compChoice) {
//     alert("You lost!");
//   }
// }

// console.log(compChoice());
// function playerTurn(playerChoiceInt) {
//   let choice = prompt("Pick rock, paper or scissors").toLowerCase();

//   if (choice === "rock") {
//     playerChoiceInt = 0;
//   } else if (choice === "paper") {
//     playerChoiceInt = 1;
//   } else if (choice === "scissors") {
//     playerChoiceInt = 2;
//   }
//   return playerChoiceInt;
// }

// function playRound(compChoice, playerChoice) {
//   if (playerChoice === compChoice) {
//     alert("you tied!");
//   } else if (playerChoice > compChoice) {
//     alert("You won!");
//   } else if (playerChoice < compChoice) {
//     alert("You lost!");
//   }
// }


// const playRound = (userGuess, compChoice) => {

//   switch (userGuess, compChoice) {
//     case userGuess === "rock" && compChoice === "rock":
//       alert("You tied!")
//       break;
//     case userGuess === "rock" && compChoice === "scissors":
//       alert("You won!")
//       break;
//     case userGuess === "rock" && compChoice === "paper":
//       alert("You lost!")
//       break;
//     case userGuess === "paper" && compChoice === "paper":
//       alert("You tied!")
//       break;
//     case userGuess === "paper" && compChoice === "rock":
//       alert("You won!")
//       break;
//     case userGuess === "paper" && compChoice === "scissors":
//       alert("You lost!")
//       break;
//     case userGuess === "scissors" && compChoice === "scissors":
//       alert("You tied!")
//       break;
//     case userGuess === "scissors" && compChoice === "rock":
//       alert("You lost!")
//       break;
//     case userGuess === "scissors" && compChoice === "paper":
//       alert("You won!")
//       break;
//   }
// }

// console.log(playRound(userGuess, compChoice));

// const playerSelection = "rock";
// const computerSelection = getComputerChoice;

// function getComputerChoice(value) {
//   let compArray = ["rock", "paper", "scissors"];
//   let compChoice = compArray[Math.floor(Math.random() * compArray.length)];

//   if (compChoice === "rock") {
//     compChoice = 0;
//   } else if (compChoice === "paper") {
//     compChoice = 1;
//   } else if (compChoice === "scissors") {
//     compChoice = 2;
//   }
//   return value;
// }

// function playRound(playerSelection, computerSelection) {
  
// }

