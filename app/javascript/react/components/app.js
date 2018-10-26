import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import ShopIndex from '../containers/ShopIndex'
import ShopShow from '../containers/ShopShow'
import DonutShow from '../containers/DonutShow'


export const App = (props) => {
  return(
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path='/' component={ShopIndex}/>
      <Route path='/shops/:id' component={ShopShow}/>
      <Route path='/shops/:id/donuts/:id' component={DonutShow}/>
    </Router>
  )
}


export default App
