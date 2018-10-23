import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import ShopIndex from '../containers/ShopIndex'
import ShopShow from '../containers/ShopShow'
import DonutShow from '../containers/DonutShow'


export const App = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path='/shops' component={ShopIndex}/>
      <Route path='/shop/:id' component={ShopShow}/>
      <Route path='/shop/:id/donuts/:id' component={DonutShow}/>
    </Router>
  )
}


export default App
