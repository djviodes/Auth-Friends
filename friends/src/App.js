import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';

import { axiosWithAuth } from './utils/axiosWithAuth';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Router>
      <div className="App">
        <ul>
          { (!isLoggedIn) ? (<li> <Link to='/login'>Login</Link></li>) : (<div></div>) }
          <li>
            <Link to='#'>Logout</Link>
          </li>
          { (isLoggedIn) ? (<li> <Link to='/protected'>Protected Page</Link></li>) : (<div></div>) }
        </ul>

        <Switch>
          <Route path='/login' render={(props) => {
            return <Login {...props} setIsLoggedIn={setIsLoggedIn} />
          }} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
