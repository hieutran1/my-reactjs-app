import { bindActionCreators, combineReducers } from "redux";
import { Provider } from "react-redux";

/**
 * Step 1: define actions
 */
// action types
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// action 1
var actionAddTodo = {
  type: ADD_TODO,
  text: 'kdkdkd'
}
// action 2
var actionToggleTodo = {
  type: TOGGLE_TODO,
  index: 3
}
// action 3
var actionSetVisibilityFilter = {
  type: SET_VISIBILITY_FILTER,
  filter: VisibilityFilters.SHOW_COMPLETED
}
// actions 4, 5, 6
var VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
/**
 * Step 2: Action creators
 */
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
// Flex
function addTodoWithDispatch(text){
  const action = {
    type: ADD_TODO,
    text
  }

  dispatch(action);
}
// Redux with bound action creator
const boundAddTodo = text => dispatch(addTodo(text));
boundAddTodo(text);
dispatch(bindActionCreators(addTodo(text), addTodoWithDispatch(text)));

/**
 * Step 3: Design State shape 
 */
var state = {
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'ddd',
      completed: true
    },
    {
      text: 'kdkd',
      completed: false
    }
  ]
}

/**
 * Step 4: handle actions
 */
var handleActions = (previousState, action) => newState

// Define Reducer
const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

function todoAppInit(state = initialState, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      })
    case TOGGLE_TODO:
      return object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if(index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            });
          }
          return todo;
        })
      })
    default:
      return state;
  }
}

/**
 * Step 5: splitting Reducers
 * Reducer composition pattern - todos, visibilitiFilter
 */
function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if(index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      })
    default:
      return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch(action.type){
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todoAppSplit(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}
// Redux utility
function reducer(state = {}, action) {
  return {
    a: doSomethingWithA(state.a, action),
    b: processB(state.b, action),
    c: c(state.c, action)
  }
}

export const todoAppWithRedux = combineReducers({
  visibilityFilter,
  todos
})

/**
 * Step 6: Define Store - app state, getState(), dispatch(action), subscribe(listener);
 */
let store = createStore(todoAppSplit);

// Dispatching Actions
const unsubscribe = store.subscribe(() => 
  console.log(store.getState())
);
// Dispatch some actions
store.dispatch(addTodo('ldlld'));
store.dispatch(toggleTodo(2));
store.dispatch(setVisibilityFilter(visibilityFilter.SHOW_COMPLETED));

unsubscribe();

/**
 * Step 7: Integrate React & Redux
 * 
 * 1. Presentational components: 
 *    TodoList(todos, onTodoClick(id: number)), 
 *    Todo(text, completed, onClick()),
 *    Link(onClick), Footer, App
 * 2. Container components:
 *    VisibleTodoList, FilterLink(filter: string)
 * 3. Other components:
 *    AddTodo
 */

/**
 * Presentational components
 */
const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={ {
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
    ))}
  </ul>
)

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a
      href=""
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
)

/**
 * Container components
 * 
 * VisibleTodoList, FilterLink(filter: string)
 */
// VisibleTodoList
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

// FilterLink(filter: string)
const mapStateToLinkProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToLinkProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link)

/**
 * Other components
 * 
 * AddTodo
 */
let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

/**
 * Typing the Containers together within a component
 */
const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

/**
 * Passing the Store
 */
let store = createStore(todoApp)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)