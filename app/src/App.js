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

    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.setState({isCarousel: !this.state.isCarousel});
    console.log("im clicking");
  }

  render() {
    if(this.state.isCarousel === false){
      return (
        <div className="App">
        <button className="btn" onClick={this.onClick}>Carousel</button>
          <MainPage/>
        </div>
      );
    }

    else{ 
      return (
        <div className="App">
        <button className="btn" onClick={this.onClick}>Main Page</button>
        <div><p>whats up</p></div>
          {/* <Carousel/> */}
        </div>
      );

    }
    
  }
}

export default App;
