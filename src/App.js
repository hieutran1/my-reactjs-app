import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter
} from 'react-router-dom'
import TicTacToeGame from './component/tutorial/ticTacToeGame/TicTacToeGame'
import Calculator from './component/tutorial/calculator/Calculator'
import TutorialRouter from './component/tutorial/TutorialRouter'
import ThinkInReactRouter from './component/thinkInReact/ThinkInReactRouter';
import { ReactReduxRouter } from './component/reactRedux/ReactReduxRouter'
import ReactMobxRouter from "./component/reactMobx/ReactMobxRouter";

export const App = () => (
  <Router>
    <div>
      <ul>
        <BrowserRouter basename="/" />
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calculator">calculator</Link></li>
        <li><Link to="/caro">Caro</Link></li>
        <li><Link to="/product">Products</Link></li>
        <li><Link to="/react-redux">React Redux</Link></li>
        <li><Link to="/react-mobx-todos">React Mobx Todos</Link></li>
        <li><Link to="/react-mobx-timer">React Mobx Timer</Link></li>
      </ul>
      <hr/>

      <TutorialRouter />
      <ThinkInReactRouter />
      <ReactReduxRouter />
      <ReactMobxRouter />
    </div>
  </Router>
);