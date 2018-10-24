import React, { Component } from 'react';
import Vimeo from 'react-vimeo';
import Carousel from './Carousel.js';
import './Homepage.css';

class Homepage extends Component{
    render(){
        return(
        <div id="homepage">
            <div id="top-container">
            <Vimeo videoId={ 192590516 } autoplay={true} />
            <div className="text1">
            <h2>MONSOON III</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ipsum augue. 
            In faucibus vehicula manga pulvinar aliquam. Cras aliquam feugiat lorem non auctor. 
            Quisque sed lorem egestas mauris venenatis commondo eu id nibh. Ut porta libero sed semper faubicus.
            </p>
            </div>
            </div>
            <div id="bottom-container">
            <div className="text2">
            <h2>BEAMS</h2>
            <br></br>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ipsum augue. 
            In faucibus vehicula manga pulvinar aliquam. Cras aliquam feugiat lorem non auctor. 
            Quisque sed lorem egestas mauris venenatis commondo eu id nibh. Ut porta libero sed semper faubicus.
            </p>
            
            </div>
            <Vimeo videoId={ 191641771 } autoplay={true} />
            <Vimeo videoId={ 146768217 } autoplay={true} />
            <div className="text3">
            
            <h2>Move 2</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ipsum augue. 
            In faucibus vehicula manga pulvinar aliquam. Cras aliquam feugiat lorem non auctor. 
            Quisque sed lorem egestas mauris venenatis commondo eu id nibh. Ut porta libero sed semper faubicus.
            </p>
            </div>
            </div>
            <Carousel/>
        </div>
        );
    }
}

export default Homepage;