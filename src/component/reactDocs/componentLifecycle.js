import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  //1. Mounting
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      name: this.props.name
    }

    // this.buttonHandler = this.buttonHandler.bind(this);
  }
//1. Mounting
  componentWillMount() {
    console.log('componentWillMount')
  }
//1. Mounting
  componentDidMount() {
    console.log('componentDidMount')
  }
  
  buttonHandler() {
    console.log('buttonHandler');
    this.setState({
      name: 'Hieu M'
    });
  }

  //1. Mounting. 2. Updating
  render(){
    console.log('render');
    const name = this.state.name;
    return (
      <div>
        <h1>{this.props.children}</h1>
        <input type="text" value={name} readOnly />
        <button onClick={() => this.buttonHandler()} >Submit</button>
      </div>
    );
  }

  // 2. Updating
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }
  // 2. Updating
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true;
  }

  // 2. Updating
  componentWillUpdate(){
    console.log('componentWillUpdate')
  }
  // 2. Updating
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  // 3. Unmounting
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  // 4. Error handling
  componentDidCatch() {
    console.log('componentDidCatch')
  }
  
}

ReactDOM.render(
  <App name="Hieu Initial">My world</App>,
  document.getElementById('root')
)