import React, { Component } from 'react';
import Carousel from './Carousel.js';
import './Homepage.css';

class Homepage extends Component{
    render(){
        return(
        <div id="homepage">
            <div id="top-container">
            <img src="https://i.vimeocdn.com/video/590587169_530x315.jpg" className="img1" width="275" height="150"></img>
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
            <img src="https://i.vimeocdn.com/video/590587169_530x315.jpg" className="img2" width="275" height="150"></img>
            <img src="https://i.vimeocdn.com/video/590587169_530x315.jpg" className="img3" width="275" height="150"></img>
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