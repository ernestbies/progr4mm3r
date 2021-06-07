import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledP = styled.p`
    color: gray;
    display: inline;
    font-family: Open Sans, serif;
    font-weight: bold;
    font-size: 14px;
    
    @media (max-width: 480px) {
        font-size: 10px;
    }
`;

export const TimelineText = ({type, text}) => {
    return (
        <StyledP>
            {type}
            <span style={{
                color: 'orange',
                display: 'inline',
                fontFamily: 'Open Sans',
                fontWeight: 300
            }}>
                {' // '}
            </span>
            <span style={{color: 'gray', fontWeight: 300}}>
                {text}
            </span>
        </StyledP>
    )
}

TimelineText.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}
