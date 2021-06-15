import React from "react";
import PropTypes from 'prop-types';
import {StyledP, StyledSpan, StyledText} from "./TimelineText.styles";

export const TimelineText = ({type, text}) => {
    return (<StyledP>{type}<StyledSpan>{' // '}</StyledSpan><StyledText>{text}</StyledText></StyledP>)
}

TimelineText.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}
