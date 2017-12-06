import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Zones from './components/Zones'
import Comments from './components/Comments'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Zones />
        <Comments />
      </div>
    );
  }
}

export default App;
