import React from 'react';
import Board from './Board';

import './TicTacToeGame.css'

class TicTacToeGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        id: 0,
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
      sortHistory: 'Ascending'
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    // slice to copy instead of mutate
    const squares = current.squares.slice();
    if(calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X': 'O';
    this.setState({
      history: history.concat([{
        id: this.state.stepNumber + 1,
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  sortHistory() {
    this.setState({
      sortHistory: (this.state.sortHistory === 'Ascending' ? 'Descending': 'Ascending')
    });
  }

  jumpTo(step){
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }

  render() {
    const currentSort = this.state.sortHistory;
    const currentHistory = this.state.history.slice();
    const current = currentHistory[this.state.stepNumber];
    const history = currentHistory.sort(function(item1, item2){
      return currentSort === 'Ascending' ? item1.id - item2.id : item2.id - item1.id;
    });
    const winner = calculateWinner(current.squares);

    // showing the moves
    const moves = history.map((step) => {
      const desc = step.id ?
        'Go to move #' + step.id :
        'Go to game start';
      return (
        <li key={step.id}>
          <button className={this.state.stepNumber === step.id ? 'selected':''} onClick={() => this.jumpTo(step.id)}>{desc}</button>
        </li>
      );
    });

    let status;
    if(winner) {
      status = 'winner: ' + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? 'X': 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            winner={winner}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <div>
            <a href="#" onClick={() => this.sortHistory()}>{this.state.sortHistory}</a>
            <ol className="history">{moves}</ol>
          </div>
        </div>
      </div>
      
    )
  }
}
export default TicTacToeGame

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for(let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [a, b, c];
    }    
  }
  return null;
}