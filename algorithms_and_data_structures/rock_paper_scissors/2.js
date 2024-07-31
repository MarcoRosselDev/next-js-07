function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

/* Step 2
In the game, there will be multiple rounds. The first to reach three points wins the game.

In this step, you will focus on determining if the player has won the round.

Complete the hasPlayerWonTheRound function. This function has two parameters: player and computer. The function should return true if the player has won the round, and false if the player has lost or tied the round.

Here are the criteria for the player to win a round:

If the player chooses "Rock" and the computer chooses "Scissors"
If the player chooses "Scissors" and the computer chooses "Paper"
If the player chooses "Paper" and the computer chooses "Rock"
A few function calls have been provided for you to test your function. */

function hasPlayerWonTheRound(player, computer) {
  if (player === "Rock" && computer === "Scissors") {
    return true
  } else if (player === "Scissors" && computer=== "Paper") {
    return true
  } else if (player === "Paper" && computer === "Rock") {
    return true
  } else {
    return false
  }
}

console.log(hasPlayerWonTheRound("Rock", "Scissors")); // passed
console.log(hasPlayerWonTheRound("Scissors", "Rock")); // passed