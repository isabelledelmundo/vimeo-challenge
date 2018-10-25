import React, { Component } from 'react';


import './Carousel.css';

const data =  [
  {
    videoId: 'monsooniii',
    title: 'MONSOON III',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ipsum augue. In faucibus vehicula magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta libero sed semper faucibus.',
    image: 'https://i.vimeocdn.com/video/595198868_505x160.jpg'
  },
  {
    keyword: 'beams',
    title: 'BEAMS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ipsum augue. In faucibus vehicula magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta libero sed semper faucibus.',
    image: 'https://i.vimeocdn.com/video/589972810_530x315.jpg'
  },
  {
    keyword: 'move2',
    title: 'Move 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ipsum augue. In faucibus vehicula magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta libero sed semper faucibus.',
    image: 'https://i.vimeocdn.com/video/590587169_530x315.jpg'
  }]

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

      </div>
    );
  }
}

export default Carousel;