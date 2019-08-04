import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Results from './components/Results';
import Footer from './components/Footer';
import Filter from './components/Filter';
import ScrollToTop from './components/ScrollToTop';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Route path="/:query?" render={(props) => {
            return (
              <div className="App">
                <NavBar {...props} />
                <Filter />
                <Results {...props}/>
              </div>
            )
          }}/>
          <Footer />
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;