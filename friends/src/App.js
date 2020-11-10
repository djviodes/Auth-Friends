import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import Friends from './components/Friends';

import PrivateRoute from './components/PrivateRoute';

import { axiosWithAuth } from './utils/axiosWithAuth';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const logout = () => {
    axiosWithAuth()
      .post('/logout')
      .then(req => {
        localStorage.removeItem('token');
        setIsLoggedIn(false)
      })
      .catch(err => {
        console.log(err);
      })
  };

  return (
    <Router>
      <div className="App">
        <ul>
          { (!isLoggedIn) ? (<li> <Link to='/login'>Login</Link></li>) : (<div></div>) }
          <li>
            <Link to='#' onClick={logout}>Logout</Link>
          </li>
          { (isLoggedIn) ? (<li> <Link to='/protected'>Protected Page</Link></li>) : (<div></div>) }
        </ul>

        <Switch>
          <PrivateRoute exact path='/protected' component={Friends} />
          <Route path='/login' render={(props) => {
            return <Login {...props} setIsLoggedIn={setIsLoggedIn} />
          }} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
