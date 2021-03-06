import React from 'react'
import ReactDOM from 'react-dom'
import { App} from "./App";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

/**
 * Fast import to practice
 */
// import './component/reactDocs/TickClock'
// import './component/reactDocs/Toggle'
// import './component/reactDocs/ConditionalRendering'
// import './component/reactDocs/ControlledComponent'
// import './component/reactDocs/UncontrolledComponent'
// import './component/reactDocs/LiftingStateUp'
// import "./component/ES6(2015)/TailCalls";
// import "./component/PureReactRedux/test";
// import  "./component/reactDocs/componentLifecycle";

import "./component/reactMobx/practices/ObservableObject"
// import "./component/reactMobx/introductionMobxReactIn10Minute/TodoStore"
// import "./component/reactMobx/introductionMobxReactIn10Minute/ObservableTodoStore"
import "./component/reactMobx/introductionMobxReactIn10Minute/TodoList"

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

