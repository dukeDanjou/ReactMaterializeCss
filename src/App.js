import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FixedActionsButton from './components/FixedActionsButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>{process.env.REACT_APP_TITLE}</h2>
        <FixedActionsButton/>
        </div>
    );
  }
}

export default App;
