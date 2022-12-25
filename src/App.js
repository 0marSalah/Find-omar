import React, { Component } from 'react';
import Navbar from './pages/navbar/Navbar.jsx';
import Landing from './pages/landing/Landing.jsx';
import About from './pages/about/About.jsx';
import Work from './pages/work/Work.jsx';
import Contact from './pages/contact/Contact.jsx';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Navbar />
        <Landing />        
        <About />
        <Work />
        <Contact />
      </div>
    );
  }
}

export default App;
