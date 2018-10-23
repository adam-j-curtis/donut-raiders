import App from './app'
import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import DonutIndex from '../containers/DonutIndex'



const Main = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path='/donuts' component={DonutIndex}/>
    </Router>
  )
}

export default Main;
