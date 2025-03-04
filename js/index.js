const comp = document.getElementById("comp-turn");
const player = document.getElementById("player-turn");
const results = document.getElementById("result");
const choices = document.querySelectorAll("button");
let playerSelection;
let compSelection;
let resultsDisplay;

choices.forEach(button => {
  button.addEventListener("click", (e) => {
    playerSelection = e.target.id;
    player.innerHTML = playerSelection;
    generateCompSelection();
    finalResults();
  })
});

function generateCompSelection() {
  const randomSelect = Math.floor(Math.random() * choices.length);
  if (randomSelect === 0) {
    compSelection = "Rock";
  }
  if (randomSelect === 1) {
    compSelection = "Paper";
  }
  if (randomSelect === 2) {
    compSelection = "Scissors";
  }
  comp.innerHTML = compSelection;
}

function finalResults() {
  if (
    (playerSelection === "Rock" && compSelection === "Scissors") ||
    (playerSelection === "Paper" && compSelection === "Rock") ||
    (playerSelection === "Scissors" && compSelection === "Paper")
  ) {
    resultsDisplay = "Yay! You Won!";
  }
  if (
    (playerSelection === "Paper" && compSelection === "Scissors") ||
    (playerSelection === "Rock" && compSelection === "Paper") ||
    (playerSelection === "Scissors" && compSelection === "Rock")
  ) {
    resultsDisplay = "Oof. You loose.";
  }
  if (playerSelection === compSelection) {
    resultsDisplay = "It's a tie. Go again.";
  }
  results.innerHTML = resultsDisplay;
}
