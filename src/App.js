import React, { Component } from 'react';
import Navigation from './components/navigation/navigation';
import './App.css'
import Logo from './components/logo/logo';
import ImageLinkForm  from './components/ImageLinkForm /ImageLinkForm '
import Rank from './components/Rank/Rank'

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
      </div>
    )
  }
}

export default App
