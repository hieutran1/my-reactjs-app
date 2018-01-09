import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

class App extends React.Component {
  constructor(props){
    super(props);
    console.log('Constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUnMount() {
    console.log('componentDidMount');
  }

  render() {
    console.log('render');
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App