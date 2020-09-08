import React, {Component} from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import ImageForm from './components/ImageForm/ImageForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import 'tachyons';
import './App.css';

const app = new Clarifai.App({
  apiKey: '4167d68b7c9047cea4efe9b0c85809bd'
 });

const particlesOptions = {
    particles: {
      number:{
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
}

class App extends Component {

  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin'
    }
  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value});
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col*width,
      topRow: clarifaiFace.top_row*height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height) 
    }
  }

  displayFaceBox = (box) =>{

    this.setState({box: box});
  }

  onSubmit = () =>{
    this.setState({imageUrl : this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
  }

  onRouteChange = (route) =>{
    this.setState({route: route});
  }
  
  render(){
    return (    
      <div className="App">
        <Particles className='particles' params = {particlesOptions}/>
        { this.state.route === 'home' 
          ?<>
            <Navigation onRouteChange ={this.onRouteChange}/>
            <Logo />
            <Rank />
            <ImageForm onInputChange={this.onInputChange} onButtonSubmit={this.onSubmit}/>
            <FaceRecognition box={this.state.box} imageUrl = {this.state.imageUrl}/>
          </> 
          
          :(this.state.route === 'signin'
            ?<SignIn onRouteChange ={this.onRouteChange}/>
            :<Register onRouteChange = {this.onRouteChange} />
          )
        }
      </div>
    );
  }
  
}

export default App;
