import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
    width: 100%;
    max-width: 400px;
    cursor: ${({cursorPointer}) => (cursorPointer ? 'pointer' : 'auto')};
    background-color: transparent;
    border-radius: 6px;
    border-width: 1px;
    border-color: goldenrod;
    margin-top: 10px;
    margin-bottom: 10px;
    color: white;
    font-family: Source Code Pro, serif;
    font-weight: 300;
    font-size: 12px;
    padding: 5px;
    text-align: center;
    outline: none;
    
    @media (max-width: 480px) {
        max-width: 300px;
        font-size: 9px;
    }
`;

const CustomInput = ({id, value, placeholder, cursorPointer, readOnly, onClick, onChange}) => {
    return (
        <StyledInput cursorPointer={cursorPointer} readOnly={readOnly} id={id} onClick={onClick}
                     placeholder={placeholder} onChange={onChange}
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
