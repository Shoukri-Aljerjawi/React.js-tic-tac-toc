import React, { useState } from 'react';
import logo from '../img/logo.png';
function Game() {
  let [begin, setBegin] = useState(false);
  let [board, setBoard] = useState(Array(9).fill(null));
  let [turn, setTurn] = useState('X');
  let [gameEnded, setGameEnded] = useState(false);
  let [totalMoves, setTotalMoves] = useState(0);
  let [player1, setPlayer1] = useState('');
  let [player2, setPlayer2] = useState('');
  let [player1Score, setPlayer1Score] = useState(0);
  let [player2Score, setPlayer2Score] = useState(0);

  const clicked = (event) => {
    if (board[event.target.dataset.square] == null && gameEnded == false) {
      board[event.target.dataset.square] = turn;
      if (turn == 'X') {
        setTurn('O');
      } else {
        setTurn('X');
      }

      setTotalMoves(totalMoves + 1);
      checkWinner();
    } else {
      console.log('You cannot override the value of that block!');
    }
  };

  const newGame = () => {
    setBoard(Array(9).fill(null));
    setTotalMoves(0);
    setTurn('X');
    setGameEnded(false);
  };

  const resetResult = () => {
    setBoard(Array(9).fill(null));
    setTotalMoves(0);
    setTurn('X');
    setGameEnded(false);
    setPlayer1Score(0);
    setPlayer2Score(0);
  };
  const checkWinner = () => {
    var resultSet = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8],
    ];
    for (var i = 0; i < resultSet.length; i++) {
      if (
        board[resultSet[i][0]] == board[resultSet[i][1]] &&
        board[resultSet[i][0]] == board[resultSet[i][2]]
      ) {
        if (board[resultSet[i][0]] == 'X') {
          setGameEnded(true);
          alert('x winner');
          setPlayer1Score(player1Score + 1);
        } else if (board[resultSet[i][0]] == 'O') {
          setGameEnded(true);
          alert('O winner');
          setPlayer2Score(player2Score + 1);
        } else if (totalMoves === 9) {
          alert('Its a draw');
        }
      }
    }
  };

  const handlePlayer1Change = (event) => {
    setPlayer1(event.target.value);
  };

  const handlePlayer2Change = (event) => {
    setPlayer2(event.target.value);
  };
  const startGame = () => {
    if (player1 === player2) {
      alert('Both players cannot have same names');
    } else if (player1.length > 0 && player2.length > 0) {
      setBegin(true);
    } else alert('Please enter both player names');
  };
  if (begin === true) {
    return (
      <div>
        <div id='game'>
          <div id='head'>
            <img className='logo' src={logo} alt='Logo' />
            <div className='players'>{player1} </div>
            <div className='players'>{player2} </div>
            <div className='players'>{player1Score}</div>
            <div className='players'>{player2Score}</div>
          </div>
          <div id='board' onClick={(e) => clicked(e)}>
            <div className='square' data-square='0'>
              {board[0]}
            </div>
            <div className='square' data-square='1'>
              {board[1]}
            </div>
            <div className='square' data-square='2'>
              {board[2]}
            </div>
            <div className='square' data-square='3'>
              {board[3]}
            </div>
            <div className='square' data-square='4'>
              {board[4]}
            </div>
            <div className='square' data-square='5'>
              {board[5]}
            </div>
            <div className='square' data-square='6'>
              {board[6]}
            </div>
            <div className='square' data-square='7'>
              {board[7]}
            </div>
            <div className='square' data-square='8'>
              {board[8]}
            </div>
          </div>
          <div className='gameBtn'>
            <button className='btn playBtn' onClick={newGame}>
              Play Again
            </button>
            <button className='btn resetBtn' onClick={resetResult}>
              Reset Result
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <form className='startname'>
        <h1>Welcome To Tic Tac toe Game</h1>
        <h2>Please Enter Your Names</h2>
        <div>
          <input
            className='form-row'
            type='text'
            placeholder='Player 1 Name'
            onChange={handlePlayer1Change}
            value={player1}
          ></input>
          <input
            className='form-row'
            type='text'
            placeholder='Player 2 Name'
            onChange={handlePlayer2Change}
            value={player2}
          ></input>
        </div>
        <button className='btn' onClick={startGame}>
          Start Game
        </button>
      </form>
    );
  }
}

export default Game;
