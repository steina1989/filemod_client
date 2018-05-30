import React, { Component } from 'react';
import logo from './logo.svg';
import { subscribeToFileChanges } from './Api';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filecontents: {}
    };

    subscribeToFileChanges(this.fileModCb, )

  }

  fileModCb(err, file) {
    this.setState({file});
  }

  render() {
    const { filecontents } = this.state;
    const str = JSON.stringify(filecontents);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Minimal file watcher client</h1>
        </header>
        {str}
      </div>
    );
  }
}

export default App;
