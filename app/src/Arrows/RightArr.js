import React from 'react';
import './RightArr.css'

const RightArr = (props) => {
    return (
      <div className='nextArrow' onClick={props.nextSlide}>
            <h2>&gt;</h2>
      </div>
    );
}

export default RightArr;