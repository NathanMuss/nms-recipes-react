import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Results from './components/Results';
import Footer from './components/Footer';
import data from './data/items.json';


class App extends Component {
  constructor() {
    super();
    this.state = {
      result: data
    }
  }

  updateResults = (results) => {
    this.setState({
      result: results
    })
  }

  render() {
    return (
      <Router>
      {/* TODO: Find a way to clean this up, don't like repeating */}
        <Route path="/" exact render={(props) => {
          return (
            <div className="App">
              <NavBar {...props} updateResults={results => this.updateResults(results)}/>
              <Results data={this.state.result} />
            </div>
          )
        }} />
        <Route path="/:query" render={(props) => {
          return (
            <div className="App">
              <NavBar {...props} updateResults={results => this.updateResults(results)}/>
              <Results data={this.state.result} />
            </div>
          )
        }}/>
        <Footer />
      </Router>
    );
  }
}

export default App;