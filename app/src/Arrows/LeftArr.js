import React from 'react';

const LeftArr = (props) => {
    return (
        <div className='prevArrow' onClick={props.prevSlide}>
            	<h2>&lt;</h2>
        </div>
    );
}

export default LeftArr;