import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter  as Router, Route, Link} from 'react-router-dom';
import Fib from './Fib';

function App() {
  return (
    <Router>
          <div className="App">
            <header className="">
              <h1 className="App-title">Welcome to React nu</h1>
            </header>
            <div>
              <Route exact path='/' component={Fib} />
            </div>
          </div>
    </Router>
  
  );
}

export default App;
