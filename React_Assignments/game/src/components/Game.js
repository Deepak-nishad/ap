import React, { useState } from "react";
import "../styles/Games.css";

const Game = () => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    generateComputerChoice();
    determineWinner(choice, computerChoice);
  };

  const generateComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    setComputerChoice(choices[randomIndex]);
  };

  const determineWinner = (userChoice, computerChoice) => {
    console.log(userChoice);
    console.log(computerChoice);
    if (userChoice === computerChoice) {
      setResult("It's a tie!");
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("Computer wins!");
    }
  };

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <div className="choices">
        <button onClick={() => handleUserChoice("rock")}>Rock</button>
        <button onClick={() => handleUserChoice("paper")}>Paper</button>
        <button onClick={() => handleUserChoice("scissors")}>Scissors</button>
      </div>
      <div className="result">
        {userChoice && (
          <>
            <p>Your choice: {userChoice}</p>
            <p>Computer's choice: {computerChoice}</p>
            <p>Result: {result}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Game;
