import React from 'react';
import {
    Sign,
    StyledDiv,
    StyledText,
    Subtitle,
    BadgeWrapper,
} from './SectionBadge.styles';
import PropTypes from 'prop-types';
import { Logo } from '../Logo/Logo';

const SectionBadge = ({
    content,
    subtitle,
    specialNumber,
    backgroundColor,
    fontColor,
    signFontColor,
    signColor,
    position,
    lightMode,
    style,
    absolute,
    onClick,
}) => {
    const SPECIAL_SIGN_TEXT = 'EB_0';

    return (
        <BadgeWrapper style={style} absolute={absolute} position={position}>
            <StyledDiv
                onClick={onClick}
                position={position}
                backgroundColor={backgroundColor}
                width={content.length}
            >
                <Logo
                    lightMode={lightMode}
                    style={{ position: 'absolute', left: 8, top: 8 }}
                    width={25}
                    height={25}
                />
                <StyledText fontColor={fontColor}>{content}</StyledText>
                <Sign
                    signColor={signColor}
                    signFontColor={signFontColor}
                    width={28}
                    position={{ right: 12, bottom: -2 }}
                >
                    {SPECIAL_SIGN_TEXT + specialNumber}
                </Sign>
                <Subtitle subtitle={subtitle}>{subtitle}</Subtitle>
            </StyledDiv>
        </BadgeWrapper>
    );
};

SectionBadge.propTypes = {
    content: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    specialNumber: PropTypes.number,
    backgroundColor: PropTypes.string,
    fontColor: PropTypes.string,
    signFontColor: PropTypes.string,
    signColor: PropTypes.string,
    position: PropTypes.oneOf(['start', 'center', 'end']),
    lightMode: PropTypes.bool,
    style: PropTypes.object,
    absolute: PropTypes.bool,
    onClick: PropTypes.func,
};

SectionBadge.defaultProps = {
    specialNumber: 1,
    backgroundColor: 'orange',
};

export default SectionBadge;
