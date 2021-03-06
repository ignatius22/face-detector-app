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
       route:'signin',
       isSignedIn:false,
       user:{
        id:'',
        name:'',
        email:'',
        entries:0,
        joined:''
       }
    }
  }

loadUser =(data) =>{
this.setState(
  {user:{
        id:data.id,
        name:data.name,
        email:data.email,
        entries:data.entries,
        joined:data.joined
      }
    }
  )
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
    if(route === 'signout'){
      this.setState({isSignedIn:false})
    }
    else if(route === 'home'){
      this.setState({isSignedIn:true})
    }
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
       .then(response => {
         if(response){
           fetch('http://localhost:3000/image',{
            method:'put',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
              id:this.state.user.id
            })
           })
           .then(response => response.json())
           .then(count => {
             this.setState(Object.assign(this.state.user, { entries:count }))
            })
         }
        this.displayFaceBox(this.calculateFaceLocation(response))
      
      } )
       .catch(err => console.log(err))

   }

  render() {
       const  {isSignedIn, imageUrl,route,box} = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOption} />
        
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { 
          route === 'home'

        ?<div>
        <Logo />
        <Rank name={this.state.user.name} entries={this.state.user.entries}/> 

         <ImageLinkForm  
         onInputChange={this.onInputChange}
         onButtonSubmit={this.onButtonSubmit}
         />
         <Facerecognition imageUrl={imageUrl} box={box}/>
     </div>
        :(
          route === 'signin' 
          ?<Signin  loadUser={this.loadUser}  onRouteChange={this.onRouteChange}/> 
          :<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/> 
          
        )
        
        
      

      }
      </div>
    );
  }
}

export default App;
