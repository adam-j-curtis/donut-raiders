import App from './app'
import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import DonutIndex from '../containers/DonutIndex'
import DonutShow from '../containers/DonutShow'


const Main = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path='/donuts' component={DonutIndex}/>
      <Route path='/donut/:id' component={DonutShow}/>
    </Router>
  )
}

export default Main;
