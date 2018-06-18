import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div>
        <img className = "app-logo" src="https://cdn.dribbble.com/users/565384/screenshots/3812947/sp-logo-mark.jpg" alt="My logo" />
        </div>
        <div>
          <h1 className="App-title">Welcome!</h1>
        </div>
        </header>
        <p className="App-intro">
          I'm excited to learn more about React!
        </p>
      </div>
    );
  }
}

export default App;
