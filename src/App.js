import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import du footer
import Footer from './Footer/Footer'
//import card
import ImgMediaCard from './ImgMediaCard/ImgMediaCard'
//
//import SvgIcons from './SvgIcons/SvgIcons'

class App extends Component {
  render() {
    return (

      <div className="App">

        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
        </header>

      
        <footer className="App-footer">
        <ImgMediaCard />
        
        <Footer />
        </footer>
      </div>
    );
  }
}

export default App;