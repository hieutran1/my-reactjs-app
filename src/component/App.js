import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import TicTacToeGame from './tutorial/ticTacToeGame/TicTacToeGame';

import './tutorial/ticTacToeGame/ticTacToeGame.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  }

  render() {
    return (
      <div className="component-app">
        <div className="calculator">
          <Display
            value={this.state.next || this.state.total || '0'}
          />
          <ButtonPanel
            clickHandler={this.handleClick}
          />
        </div>
        <div className="caro">
          <TicTacToeGame />
        </div>
      </div>
    );
  }
}
export default App;
