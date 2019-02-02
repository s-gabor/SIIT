function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getWinner(computerChoice, userChoice) {
  if (computerChoice === "rock" && userChoice === "paper") {
    return "User";
  } else if (computerChoice === "rock" && userChoice === "scissors") {
    return "Computer";
  } else if (computerChoice === "paper" && userChoice === "rock") {
    return "Computer";
  } else if (computerChoice === "paper" && userChoice === "scissors") {
    return "User";
  } else if (computerChoice === "scissors" && userChoice === "rock") {
    return "User";
  } else if (computerChoice === "scissors" && userChoice === "paper") {
    return "Computer";
  } else {
    return "It's a tie. Nobody";
  }
}

function play() {
  var possibilities = ["rock", "paper", "scissors"];
  var computerChoice = randomChoice(possibilities);
  var userChoice = randomChoice(possibilities);
  var winner = getWinner(computerChoice, userChoice);
  console.log("Computer choice: " + computerChoice);
  console.log("User choice: " + userChoice);
  console.log(winner + " wins!");
}

console.log("Welcome to Rock, Paper, Scissors!");
console.log("");
play();
