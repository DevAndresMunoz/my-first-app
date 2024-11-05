import React, { Component } from 'react';
import './App.css';
import Post from './components/Post/post'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Post />
        {/* <header className="App-header">
          <p>
            Testing my React app.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
