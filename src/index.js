import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import TicTacToeGame from './component/tutorial/ticTacToeGame/TicTacToeGame'
import Calculator from './component/tutorial/calculator/Calculator'
import TutorialRouter from './component/tutorial/TutorialRouter'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/calculator">calculator</Link></li>
        <li><Link to="/caro">Caro</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/topics" component={Topics}/>
      {/* <Route path="/caro" component={ TicTacToeGame }/>
      <Route path="/calculator" component={ Calculator }/> */}
      <TutorialRouter />
    </div>
  </Router>
)

export default BasicExample

ReactDOM.render(
  <BasicExample />,
  document.getElementById('root')
);