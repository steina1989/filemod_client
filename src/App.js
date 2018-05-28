import React, { Component } from 'react';
import logo from './logo.svg';
import { subscribeToFileChanges } from './Api';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    subscribeToFileChanges((err, filecontents) => this.setState({
      filecontents
    }));
    this.state = {
      filecontents: 'nothing yet'
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Minimal file watcher client</h1>
        </header>
        {this.state.filecontents}
      </div>
    );
  }
}

export default App;
