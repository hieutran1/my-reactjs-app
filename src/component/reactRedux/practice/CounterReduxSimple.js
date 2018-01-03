
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

// const { createStore } = Redux;
/** implement createStore */
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  };

  // initial
  dispatch({});

  return { getState, dispatch, subscribe };
}

const store = createStore(counter);

/*Test console app 
console.log(store.getState());
// 0

store.dispatch({ type: 'Increment'});
console.log(store.getState());
// 1
*/

/** update ui */
const render = () => {
  document.body.innerText = store.getState();
};

store.subscribe(render);
render();

document.addEventListener('click', () => {
  store.dispatch({ type: 'Increment'});
});