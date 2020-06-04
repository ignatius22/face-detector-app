import React, { Component } from 'react';
import Navigation from './components/navigation/navigation';
import './App.css';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/ImageLinkForm /ImageLinkForm ';
import Particles from 'react-particles-js';
import Rank from './components/Rank/Rank';




const particlesOption = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 250
      }
    }
  }
}


export class App extends Component {
  render() {
  
    return (
      <div className="App">
        <Particles className="particles" params={particlesOption} />

        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;
