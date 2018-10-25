import React, { Component } from 'react';
import Slide from './Slide.js';
import LeftArr from './Arrows/LeftArr.js';
import RightArr from './Arrows/RightArr.js';
import './Carousel.css';


export default class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slides: [{
              title: 'MONSOON III',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ipsum augue. In faucibus vehicula manga pulvinar aliquam. Cras aliquam feugiat lorem non auctor. ',
              image: 'https://i.vimeocdn.com/video/595198868_505x160.jpg'
            },
            {
              title: 'BEAMS',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ipsum augue. In faucibus vehicula manga pulvinar aliquam. Cras aliquam feugiat lorem non auctor. ',
              image: 'https://i.vimeocdn.com/video/589972810_530x315.jpg'
            },
            {
              title: 'Move 2',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ipsum augue. In faucibus vehicula manga pulvinar aliquam. Cras aliquam feugiat lorem non auctor. ',
              image: 'https://i.vimeocdn.com/video/590587169_530x315.jpg'
            }],
            currentIndex: 0,
            translateValue: 0
        }

        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.slideWidth = this.slideWidth.bind(this);
    }

    prevSlide(){
      if(this.state.currentIndex === 0) {
        return this.setState({
            currentIndex: this.state.slides.length - 1,
            translateValue: 0
        })
    }

      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1 ,
        translateValue: prevState.translateValue + -(this.slideWidth())

    }));

    }

    nextSlide(){
        if(this.state.currentIndex === this.state.slides.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())

        }));
    }

    slideWidth(){
        return document.querySelector('.slide').clientWidth;
    }

    render() {
      let currSlide = this.state.slides[this.state.currentIndex];

        return (
            <div className = "carousel">
               <Slide 
               image = { currSlide.image }
               title={ currSlide.title }
               text={ currSlide.description }/>
              
              <div className = "arrows">
              <div className="prevArrow" onClick={this.prevSlide}><h2>&lt;</h2></div>
              <div className="nextArrow" onClick={this.nextSlide}><h2>&gt;</h2></div>
              </div>
              
             
                

            </div>
        );
    }
}