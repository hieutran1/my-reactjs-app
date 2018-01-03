
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'Increment':
      return state + 1;
    case 'Decrement':
      return state -1;
      default:
        return state;
  }
}

const Counter = ({ 
  value,
  onIncrement,
  onDecrement
}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

const { createStore } = Redux;
const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <Counter 
      value={store.getState()}
      onIncrement={() => store.dispatch({
        type: 'Increment'
      })}
      onDecrement={() => store.dispatch({
        type: 'Decrement'
      })}
      />,
    document.getElementById('root')
  )
};

store.subscribe(render);
render();

document.addEventListener('click', () => {
  store.dispatch({ type: 'Increment'});
});