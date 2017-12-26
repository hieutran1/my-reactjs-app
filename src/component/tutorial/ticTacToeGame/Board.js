import React from 'react';
import Square from './Square';

class Board extends React.Component {
  renderSquare(i) {
    const winner = this.props.winner;
    return (
    <Square 
      key={i}
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
      classWin = { winner && winner.indexOf(i) >= 0 ? 'win' : '' }
    />
    );
  };

  render() {
    
    const boardGrid = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    const board = boardGrid.map((row, step) => {
      const rowSquare = row.map((square) => {
        return this.renderSquare(square);
      });
      return <div key={step} className="board-row">{rowSquare}</div>
    });

    return (
      <div>
        {/* <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div> */}
        {board}
      </div>
    )
  };
}
export default Board

