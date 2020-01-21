import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import ProtectedPage from './components/ProtectedPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <Link  to = '/friendsPage'> Friends </Link>
          </li>
          <li>
            <Link to = '/login'> Login </Link>
          </li>
        </ul>
        <Route path = '/login' component = {Login}/>
        <PrivateRoute path = '/friendsPage' component = {ProtectedPage} />
      </header>
    </div>
  );
}

export default App;
