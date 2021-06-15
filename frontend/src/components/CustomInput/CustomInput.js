import React from "react";
import PropTypes from 'prop-types';
import {StyledInput} from "./CustomInput.styles";

const CustomInput = ({id, value, placeholder, cursorPointer, readOnly, onClick, onChange}) => {
    return (
        <StyledInput cursorPointer={cursorPointer}
                     readOnly={readOnly}
                     id={id} onClick={onClick}
                     placeholder={placeholder}
                     onChange={onChange}
                     value={value}/>
    )
}

CustomInput.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    readOnly: PropTypes.bool,
    cursorPointer: PropTypes.bool
}

CustomInput.defaultProps = {
    cursorPointer: false,
    readOnly: false
}

export default CustomInput;
