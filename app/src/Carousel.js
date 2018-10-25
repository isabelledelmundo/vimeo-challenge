import React, { Component } from 'react';
import Slide from './Slide.js';
import LeftArr from './Arrows/LeftArr.js';
import RightArr from './Arrows/RightArr.js';


class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {}

    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);

  }

  prevSlide(){

  }

  nextSlide(){

  }

  render() {
    return (
      <div className="carousel">
        <Slide/>
        
        <LeftArr prevSlide = {this.prevSlide}/>
        <RightArr nextSlide = {this.nextSlide}/>	
      </div>
    );
  }
}

export default Carousel;