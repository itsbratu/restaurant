import React from 'react'
import Home from './Home/Home.jsx'
import Login from './Login/Login.jsx'
import Register from './Register/Register.js';
import Cart from 'Cart/Cart.jsx';
import ScrollToTop from 'Utils/scrollToTop.jsx';
import './index.css'

import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <CookiesProvider>
        <Router>         
            <Switch>
              <Route exact from = "/" to = "/home" component={Home}/>
              <Route path = "/login" component={Login}/>
              <Route path = "/register" component={Register}/>
              <ScrollToTop>
                <Route path = "/cart" component={Cart}/>
              </ScrollToTop>
            </Switch>
        </Router>
    </CookiesProvider>
  );
}

export default App;
