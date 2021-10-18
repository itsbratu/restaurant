import React from 'react'
import Home from './Components/Home.js'
import Login from './Components/Login.js'
import Register from './Components/Register.js';

import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/home" component={Home}/>
        <Route path = "/login" component={Login}/>
        <Route path = "/register" component={Register}/>
      </Switch>
    </Router>
  );
}

export default App;
