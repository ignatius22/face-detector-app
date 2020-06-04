import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/navigation/navigation';
import './App.css';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/ImageLinkForm /ImageLinkForm ';
import Particles from 'react-particles-js';
import Rank from './components/Rank/Rank';



const app = new Clarifai.App({
  apiKey: 'd38d4a5d1b774017a2d1a38010ca1f60'
 });

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

  constructor(props) {
    super(props)
  
    this.state = {
       input:''
    }
  }
   onInputChange = (event) => {
    console.log(event.target.value)
   }

   onButtonSubmit = () =>{
     console.log('click')
     app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      // do something with response
    },
    function(err) {
      // there was an error
    }
  );
   }

  render() {
  
    return (
      <div className="App">
        <Particles className="particles" params={particlesOption} />

        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm  
         onInputChange={this.onInputChange}
         onButtonSubmit={this.onButtonSubmit}
         />
      </div>
    );
  }
}

export default App;
