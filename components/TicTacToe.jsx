'use client'
import React, { useState } from 'react';
import'./TicTacToe.module.css'

const initialState = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const TicTacToe = () => {
  const [board, setBoard] = useState(initialState);
  const [player, setPlayer] = useState('X');

  const handleClick = (row, col) => {
    if (board[row][col] !== null) {
      return;
    }

    setBoard(
      board.map((rowArr, r) =>
        rowArr.map((colVal, c) => {
          if (r === row && c === col) {
            return player;
          }
          return colVal;
        }),
      ),
    );

    setPlayer(player === 'X' ? 'O' : 'X');
  };

  const renderRow = (row, rowIndex) => (
    <div key={rowIndex}>
      {row.map((col, colIndex) => (
        <div
          key={colIndex}
          onClick={() => handleClick(rowIndex, colIndex)}
          style={{
            width: '30px',
            height: '30px',
            border: '1px solid black',
            display: 'inline-block',
            textAlign: 'center',
            verticalAlign: 'middle',
            lineHeight: '30px',
          }}
        >
          {col}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      {board.map(renderRow)}
    </div>
  );
};

export default TicTacToe;
