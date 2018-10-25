import React, { Component } from 'react';

class Slide extends Component{
    
  render(){
    return (
      <div className="slide">
        <div className="wrapper"> 
          <div className="text">
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
          </div>
          <div className = "img"> 
          <img src={this.props.image}/>
          </div>
        </div>
      </div>
  );
  }
    
}

export default Slide;