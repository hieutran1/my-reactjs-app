import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp)
const ReactRedux = () => (
  <Provider store={store} >
    <App /> 
  </Provider>
)

export const ReactReduxRouter = () => (
  <Route path='/react-redux' component={ReactRedux} /> 
);