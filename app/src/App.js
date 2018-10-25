import React, { Component } from 'react';
import MainPage from './MainPage.js';
import Carousel from './Carousel.js';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      isCarousel: false
    }
  }

  render() {
    if(this.state.isCarousel === false){
      return (
        <div className="App">
          <MainPage/>
        </div>
      );
    }

    else{ 
      return (
        <div className="App">
          <Carousel/>
        </div>
      );

    }
    
  }
}

export default App;
