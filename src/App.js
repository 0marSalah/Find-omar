import React, { Component, useState } from 'react';
import Navbar from './pages/navbar/Navbar';
import Landing from './pages/landing/Landing';
import About from './pages/about/About';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Navbar />
        <Landing />        
        <About />
      </div>
    );
  }
}

export default App;
