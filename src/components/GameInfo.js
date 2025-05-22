import React from 'react';

// Props:
// - winner: 'X', 'O', 'Draw', or null
// - xIsNext: boolean, true if 'X' is the next player
function GameInfo({ winner, xIsNext }) {
  let status;
  if (winner === 'Draw') {
    status = "It's a Draw!";
  } else if (winner) {
    status = (
      <span>
        Winner: <span className={winner === 'X' ? 'player-x' : 'player-o'}>{winner}</span>
      </span>
    );
  } else {
    status = (
      <span>
        Next player: <span className={xIsNext ? 'player-x' : 'player-o'}>{xIsNext ? 'X' : 'O'}</span>
      </span>
    );
  }

  return (
    <div className="game-info">
      <div>{status}</div>
      {/* Reset button will be integrated here or in App.js later */}
    </div>
  );
}

export default GameInfo;
