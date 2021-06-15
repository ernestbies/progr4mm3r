import React from "react";
import PropTypes from 'prop-types';
import {Caret} from "./CustomCaret.styles";

const CustomCaret = ({width, height}) => {
    return (<Caret width={width} height={height}/>)
}

CustomCaret.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
}

CustomCaret.defaultProps = {
    width: 6,
    height: 8
}

export default CustomCaret;
