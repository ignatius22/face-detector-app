import React, { Component } from 'react';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo'

export class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Logo />
      </div>
    )
  }
}

export default App
