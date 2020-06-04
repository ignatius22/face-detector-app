import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/navigation/navigation';
import './App.css';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/ImageLinkForm /ImageLinkForm ';
import Particles from 'react-particles-js';
import Rank from './components/Rank/Rank';
import Facerecognition from './components/Facerecognition/Facerecognition';


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
       input:'',
       imageUrl:''
    }
  }
   onInputChange = (event) => {
    this.setState({input:event.target.value})
   }

   onButtonSubmit = () =>{
     this.setState({imageUrl:this.state.input})
     app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
       this.state.input)
       .then(
      function(response) {
      // do something with response
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
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
         <Facerecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
