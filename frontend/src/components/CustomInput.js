import React from "react";
import PropTypes from 'prop-types';

const CustomInput = ({id, value, placeholder, cursorPointer = false, readOnly = false, onClick, onChange}) => {
    return (
        <input readOnly={readOnly} id={id} onClick={onClick} style={{
            cursor: cursorPointer ? 'pointer' : 'auto',
            backgroundColor: 'transparent',
            borderRadius: 6,
            borderWidth: 1,
            borderColor: 'goldenrod',
            marginTop: 10,
            marginBottom: 20,
            color: 'white',
            fontFamily: 'Source Code Pro',
            fontWeight: 300,
            fontSize: 12,
            padding: 5,
            width: 400,
            textAlign: 'center',
            outline: 'none'
        }} placeholder={placeholder} onChange={onChange} value={value}/>
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

export default CustomInput;
