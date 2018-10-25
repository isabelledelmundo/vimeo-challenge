import React, { Component } from 'react';
import Vimeo from 'react-vimeo';
import './MainPage.css';

class MainPage extends Component{
    render(){
        return(
            <div id="mainpage">
                <div className="wrapper">
                    <div className="top-wrapper">
                    <div className="vid"><Vimeo videoId={"192590516"} autoplay={true} /></div>
                    <div className="text1">
                    <h2>MONSOON III</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ipsum augue. 
                    In faucibus vehicula manga pulvinar aliquam. Cras aliquam feugiat lorem non auctor. 
                    Quisque sed lorem egestas mauris venenatis commondo eu id nibh. Ut porta libero sed semper faubicus.
                    </p>
                    </div>
                    </div>
                    <div className="bottom-wrapper">
                    <div className="left1">
                    <h2>BEAMS</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ipsum augue. 
                    In faucibus vehicula manga pulvinar aliquam. Cras aliquam feugiat lorem non auctor. 
                    Quisque sed lorem egestas mauris venenatis commondo eu id nibh. Ut porta libero sed semper faubicus.
                    </p>
                    </div>
                    <div className="right1"><Vimeo videoId={ "191641771" } autoplay={true} /></div>
                    <div className="left2"><Vimeo videoId={ "146768217" } autoplay={true} /></div>
                    <div className="right2">
                    <h2>Move 2</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ipsum augue. 
                    In faucibus vehicula manga pulvinar aliquam. Cras aliquam feugiat lorem non auctor. 
                    Quisque sed lorem egestas mauris venenatis commondo eu id nibh. Ut porta libero sed semper faubicus.
                    </p>
                    </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default MainPage;