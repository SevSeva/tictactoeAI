import React, { useState, useEffect, useCallback } from 'react'; // Import useCallback
import './App.css';
import Board from './components/Board';
import GameInfo from './components/GameInfo';

// Helper function calculateWinner (remains unchanged)
export function calculateWinner(squares) { // Added export
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  if (squares.every(square => square !== null)) {
    return 'Draw';
  }
  return null;
}

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true); // Player X starts
  const humanPlayer = 'X';
  const aiPlayer = 'O';

  // AI Move Logic using useCallback to stabilize its reference if needed in useEffect
  const makeAIMove = useCallback((currentSquares) => {
    // 1. Check if AI can win
    for (let i = 0; i < 9; i++) {
      if (!currentSquares[i]) {
        const tempSquares = currentSquares.slice();
        tempSquares[i] = aiPlayer;
        if (calculateWinner(tempSquares) === aiPlayer) {
          return i;
        }
      }
    }

    // 2. Check if Player can win (and block)
    for (let i = 0; i < 9; i++) {
      if (!currentSquares[i]) {
        const tempSquares = currentSquares.slice();
        tempSquares[i] = humanPlayer;
        if (calculateWinner(tempSquares) === humanPlayer) {
          return i;
        }
      }
    }

    // 3. Pick a random available square
    const availableSquares = [];
    currentSquares.forEach((square, index) => {
      if (!square) {
        availableSquares.push(index);
      }
    });
    if (availableSquares.length > 0) {
      return availableSquares[Math.floor(Math.random() * availableSquares.length)];
    }
    return null;
  }, [aiPlayer, humanPlayer]); // Dependencies for useCallback

  // Effect for AI's turn
  useEffect(() => {
    const winner = calculateWinner(squares);
    if (!xIsNext && !winner) { // If it's O's turn and game is not over
      const aiMove = makeAIMove(squares);
      if (aiMove !== null) {
        setTimeout(() => {
          const newSquares = squares.slice();
          // Double check square is still empty and game not over before AI moves
          if (!newSquares[aiMove] && !calculateWinner(newSquares)) { 
            newSquares[aiMove] = aiPlayer;
            setSquares(newSquares);
            setXIsNext(true);
          }
        }, 500);
      }
    }
  }, [xIsNext, squares, aiPlayer, makeAIMove]);

  const handleClick = (i) => {
    // Allow click only if it's human's turn, square is empty, and game is not over
    if (!xIsNext || squares[i] || calculateWinner(squares)) {
      return;
    }

    const currentSquares = squares.slice();
    currentSquares[i] = humanPlayer;
    setSquares(currentSquares);
    setXIsNext(false); // Set turn to AI (O)
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true); // Player X starts the new game
  };

  const winner = calculateWinner(squares);

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Board squares={squares} onClick={handleClick} />
      <GameInfo winner={winner} xIsNext={xIsNext} />
      <button className="reset-button" onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
}

export default App;
