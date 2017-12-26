import React from 'react';
import logo from './logo.svg';
import './App.css';
import {RouterRoute, RouterLink} from 'reactjs-router';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <RouterLink title="Calculator" href="/">Calculator</RouterLink>
          <RouterLink title="Caro game" href="/caro">Caro Game</RouterLink>

          <RouterRoute url="/" title="Calculator">
              <div className="calculator">
                <Display value={this.state.next || this.state.total || '0'} />
                <ButtonPanel clickHandler={this.handleClick} />
              </div>
          </RouterRoute>
          <RouterRoute url="/caro" title="Caro Game">
            <div className="caro">
              <TicTacToeGame />
            </div>
          </RouterRoute>
        </div>
      </div>
    );
  }
}

export default App;
