import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Results from './components/Results';
import data from './data/items.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: ""
    }
  }
  handleSearch = (e, query) => {
    e.preventDefault();
    const result = {
      craftedResults: getCraftedResults(query)
    }
    console.log(result);
    
    this.setState({
      result
    })
  }

  render() {
    return (
      <div className="App">
          <NavBar handleSearch={this.handleSearch}/>
          <Results data={this.state.result}/>
      </div>
    );
  }
}

function getCraftedResults(query) {
  const crafted = data.crafting;
  const results = crafted.filter((item) => {
    return item.result.toLowerCase().includes(query.toLowerCase());
  });
  return results;
}

export default App;
