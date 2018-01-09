import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Todos from './Todos';
import Timer from './Timer';

const ReactMobxRouter = () => (
  <div>
    <Route path='/react-mobx-todos' component={Todos} /> 
    <Route path='/react-mobx-timer' component={Timer} />
  </div>
)
export default ReactMobxRouter;