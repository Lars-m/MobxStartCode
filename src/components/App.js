import React, { Component } from 'react';
import '../styles/App.css';
import "../data/todoStore";
import TodoList from  "../components/TodoList";
import store from "../data/todoStore";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React/MobX Starter Code</h2>
        </div>
        <div className="App-intro">
          <TodoList store={store} />
        </div>

      </div>
    );
  }
}

export default App;