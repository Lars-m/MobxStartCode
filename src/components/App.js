import React, { Component } from 'react';
import '../styles/App.css';
import "../data/todoStore";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React/MobX Starter Code</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;