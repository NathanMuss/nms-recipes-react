import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Results from './components/Results';

class App extends Component {
  handleSearch(e, query) {
    e.preventDefault();
    console.log("Searching: " + query);
  }

  render() {
    return (
      <div className="App">
          <NavBar handleSearch={this.handleSearch}/>
          <Results />
      </div>
    );
  }
}

export default App;
