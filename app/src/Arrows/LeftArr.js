import React from 'react';


const LeftArr = (props) => {
  return (
    <div className="backArrow" onClick={props.prevSlide}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default LeftArr;