import React, { Component } from 'react';
import Navbar from './pages/navbar/Navbar';
import Landing from './pages/landing/Landing';
import About from './pages/about/About';
import Work from './pages/work/Work';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Navbar />
        <Landing />        
        <About />
        <Work />
      </div>
    );
  }
}

export default App;
