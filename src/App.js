import React from 'react';
import  { Home } from './components/Home';
import {
  BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
  import  {Recipe } from './components/Recipe';


function App() {
  return (
    <Router className = "router">
      <div className = "navbar">
            <Link to="/"> Home || </Link>
            <Link to="/recipe">   || Recipes </Link>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/recipe">
            <Recipe />
          </Route>
        </Switch>
      </div>
           </Router>
  )
}

export default App;
