import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/navigation/navigation';
import './App.css';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/ImageLinkForm /ImageLinkForm ';
import Particles from 'react-particles-js';
import Rank from './components/Rank/Rank';
import Facerecognition from './components/Facerecognition/Facerecognition';
import Signin from './components/signin/signin';
import Register from './components/register/register';


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
       imageUrl:'',
       box:{},
       route:'signin'
    }
  }

  calculateFaceLocation =(data) =>{
   const clarifaiFace =  data.outputs[0].data.regions[0].region_info.bounding_box;
   const image = document.getElementById('input-image');
   const width = Number(image.width);
   const height = Number(image.height);
   console.log(width,height)
   return {
     leftCol: clarifaiFace.left_col * width,
     topRow: clarifaiFace.top_row * height,
     rightCol: width - (clarifaiFace.right_col * width),
     bottomRow: height - (clarifaiFace.bottom_row * height)

   }
  }



  onRouteChange = (route) =>{
    this.setState({route:route})
  }

  displayFaceBox = (box) =>{
    console.log(box)
    this.setState({box: box})
  }


   onInputChange = (event) => {
    this.setState({input:event.target.value})
   }

   onButtonSubmit = () =>{

     this.setState({imageUrl:this.state.input})
     app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
       this.state.input)
       .then(response => this.displayFaceBox(this.calculateFaceLocation(response)) )
       .catch(err => console.log(err))

   }

  render() {
  
    return (
      <div className="App">
        <Particles className="particles" params={particlesOption} />
        
        <Navigation onRouteChange={this.onRouteChange}/>
        { 
          this.state.route === 'home'

        ?<div>
        <Logo />
        <Rank />

         <ImageLinkForm  
         onInputChange={this.onInputChange}
         onButtonSubmit={this.onButtonSubmit}
         />
         <Facerecognition imageUrl={this.state.imageUrl} box={this.state.box}/>
     </div>
        :(
          this.state.route === 'signin' 
          ?<Signin onRouteChange={this.onRouteChange}/> 
          :<Register onRouteChange={this.onRouteChange}/> 
          
        )
        
        
      

      }
      </div>
    );
  }
}

export default App;
