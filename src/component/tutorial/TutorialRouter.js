import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import TicTacToeGame from './ticTacToeGame/TicTacToeGame'
import Calculator from './calculator/Calculator'

const TutorialRouter = () => (
    <div>
      <Route path="/caro" component={ TicTacToeGame }/>
      <Route path="/calculator" component={ Calculator }/>
    </div>
)
export default TutorialRouter
