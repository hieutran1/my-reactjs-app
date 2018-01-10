import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter
} from 'react-router-dom'

import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap'

import TicTacToeGame from './component/tutorial/ticTacToeGame/TicTacToeGame'
import Calculator from './component/tutorial/calculator/Calculator'
import TutorialRouter from './component/tutorial/TutorialRouter'
import ThinkInReactRouter from './component/thinkInReact/ThinkInReactRouter';
import { ReactReduxRouter } from './component/reactRedux/ReactReduxRouter'
import ReactMobxRouter from "./component/reactMobx/ReactMobxRouter";

export const App = () => (
  <Router>
    <div>
      <Navbar inverse fixedTop>
        <Grid>
          <Navbar.Header>
            <Navbar.Brand>
              
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Grid>
      </Navbar>
      <Jumbotron>
          <Grid>
            <div className="list-group">
                <BrowserRouter basename="/" />
                <Link className="list-group-item list-group-item-action active" to="/">Home</Link>
                <Link className="list-group-item list-group-item-action" to="/calculator">calculator</Link>
                <Link className="list-group-item list-group-item-action" to="/caro">Caro</Link>
                <Link className="list-group-item list-group-item-action" to="/product">Products</Link>
                <Link className="list-group-item list-group-item-action" to="/react-redux">React Redux</Link>
                <Link className="list-group-item list-group-item-action" to="/react-mobx-todos">React Mobx Todos</Link>
                <Link className="list-group-item list-group-item-action" to="/react-mobx-timer">React Mobx Timer</Link>
            </div>
            <div>
              <TutorialRouter />
              <ThinkInReactRouter />
              <ReactReduxRouter />
              <ReactMobxRouter />
            </div>
          </Grid>
        </Jumbotron>
    </div>
  </Router>
);