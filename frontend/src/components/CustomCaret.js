import React from "react";
import PropTypes from 'prop-types';

const CustomCaret = ({width, height}) => {
    return (
        <span style={{
            display: 'inline-block',
            backgroundColor: 'white',
            width: width,
            height: height,
            animationName: 'show-hide',
            animationDuration: '2s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'steps(1)'
        }}/>
    )
}

CustomCaret.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
}

export default CustomCaret;
