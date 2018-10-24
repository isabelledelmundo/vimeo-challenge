import React, { Component } from 'react';
import Slides from './Slides.js';
import Arrows from './Arrows.js';

import './Carousel.css';


class Carousel extends Component {
    constructor (props) {
        super(props);
    
        this.state = {
          currentImageIndex: 0,
          imgUrls: 
          ['https://i.vimeocdn.com/video/590587169_530x315.jpg',
          'https://i.vimeocdn.com/video/589972810_530x315.jpg',
          'https://i.vimeocdn.com/video/595198868_505x160.jpg']
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
      }

      prevSlide () {
        const lastIndex = this.state.imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
        this.setState({
          currentImageIndex: index
        });
      }
    
      nextSlide () {
        const lastIndex = this.state.imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
    
        this.setState({
          currentImageIndex: index
        });
      }


  render() {
    return (
      <div className="carousel">

      <Arrows
          direction="left"
          clickFunction={ this.prevSlide }
          glyph="&#9664;" />

        <Slides url={this.state.imgUrls[this.state.currentImageIndex]} />

        <Arrows
          direction="right"
          clickFunction={ this.nextSlide}
          glyph="&#9654;" />
				
      </div>
    );
  }
}

export default Carousel;