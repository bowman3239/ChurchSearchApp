import React, { Component } from 'react';
// Removed logo since we don't need it anymore
import './App.css';
class App extends Component {
  render() {
    return (
      <div classname="container">
        <h1>Welcome to Church Search!</h1>
        <img src = "church.jpeg" className ="App-logo" />
        <p>I just created my first React App</p>
      </div>
    );
  }
}

export default App;
