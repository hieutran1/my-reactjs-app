import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import FilterableProductTable from './ThinkInReact';

const ThinkInReactRouter = () => (
  <div>
    <Route path='/product' component={FilterableProductTable} />
  </div>
)
export default ThinkInReactRouter;