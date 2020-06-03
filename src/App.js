import React, { Component } from 'react';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import ImageLinkForm  from './components/ImageLinkForm /ImageLinkForm '

export class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Logo />
        <ImageLinkForm />
      </div>
    )
  }
}

export default App
