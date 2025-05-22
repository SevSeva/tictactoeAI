import React from 'react';

function Square({ value, onClick }) {
  // Add player-specific class for styling 'X' and 'O' differently
  const playerClass = value ? (value === 'X' ? 'player-x' : 'player-o') : '';
  return (
    <button className={`square ${playerClass}`} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
