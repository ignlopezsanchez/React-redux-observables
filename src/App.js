import React, { Component } from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom'
import AppRoutes from './AppRoutes'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>

        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
            <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/home2"}>Opción 2</Link></li>
        <AppRoutes/>
      </div>
        </Router>
    );
  }
}

export default App;
