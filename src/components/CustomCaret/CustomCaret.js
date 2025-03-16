import React from 'react';
import PropTypes from 'prop-types';
import { Caret } from './CustomCaret.styles';

const CustomCaret = ({ width, height, visible }) => {
    return <Caret width={width} height={height} visible={visible} />;
};

CustomCaret.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    visible: PropTypes.bool,
};

CustomCaret.defaultProps = {
    width: 6,
    height: 8,
    visible: true,
};

export default CustomCaret;
