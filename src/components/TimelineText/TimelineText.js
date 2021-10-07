import React from "react";
import PropTypes from 'prop-types';
import {StyledP, StyledSpan, StyledText} from "./TimelineText.styles";
import {useTranslation} from "react-i18next";

const TimelineText = ({type, color}) => {

    const {t} = useTranslation('common');

    return (
        <StyledP name={'timeline-text'}>{type}<StyledSpan color={color}>{'(); '}</StyledSpan>
            <StyledText>{'// ' + t(type + '_text')}</StyledText>
        </StyledP>
    );
}

TimelineText.propTypes = {
    type: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default TimelineText;
