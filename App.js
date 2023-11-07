import React from "react";

const choices = ["rock", "paper", "scissors"];

function App() {
  const [userChoice, setUserChoice] = React.useState(null);
  const [computerChoice, setComputerChoice] = React.useState(null);
  const [result, setResult] = React.useState("");

  const handleUserChoice = (choice) => {
    const randomIndex = Math.floor(Math.random() * 3);
    const randomComputerChoice = choices[randomIndex];

    setUserChoice(choice);
    setComputerChoice(randomComputerChoice);

    if (choice === randomComputerChoice) {
      setResult("It's a tie!");
    } else if (
      (choice === "rock" && randomComputerChoice === "scissors") ||
      (choice === "paper" && randomComputerChoice === "rock") ||
      (choice === "scissors" && randomComputerChoice === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("Computer wins!");
    }
  };

  return (
    <div className="container text-center mt-5">
      <h1>Rock, Paper, Scissors</h1>
      <div className="btn-group">
        <button
          className="btn btn-primary"
          onClick={() => handleUserChoice("rock")}
        >
          Rock
        </button>
        <button
          className="btn btn-primary"
          onClick={() => handleUserChoice("paper")}
        >
          Paper
        </button>
        <button
          className="btn btn-primary"
          onClick={() => handleUserChoice("scissors")}
        >
          Scissors
        </button>
      </div>
      <div className="mt-3">
        <p>Your Choice: {userChoice}</p>
        <p>Computer's Choice: {computerChoice}</p>
        <p className="h3 mt-3">{result}</p>
      </div>
    </div>
  );
}

export default App;
