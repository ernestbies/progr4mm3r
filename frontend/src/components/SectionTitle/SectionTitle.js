import React from "react";
import {Sign, StyledDiv, StyledText, Subtitle, TextWrapper} from "./SectionTitle.styles";
import PropTypes from 'prop-types';
import {Logo} from "../Logo/Logo";

const SectionTitle = ({content, subtitle, specialNumber, backgroundColor, fontColor, signFontColor, signColor, position, lightMode}) => {
    return (
        <TextWrapper position={position}>
            <StyledDiv position={position} backgroundColor={backgroundColor} width={content.length}>
                <Logo lightMode={lightMode} style={{position: 'absolute', left: 8, top: 8}}
                      width={25} height={25}/>
                <Sign signColor={signColor} height={0} width={0} position={{left: 0, bottom: 0}}
                style={{borderTop: '12px solid ' + backgroundColor, borderLeft: '12px solid transparent'}}/>
                <StyledText fontColor={fontColor}>{content}</StyledText>
                <Sign signColor={signColor}
                      signFontColor={signFontColor}
                      width={28}
                      position={{right: 12, bottom: -2}}
                >
                    {'EB_0' + specialNumber}
                </Sign>
                <Subtitle subtitle={subtitle}>{subtitle}</Subtitle>
            </StyledDiv>
        </TextWrapper>
    );
}

SectionTitle.propTypes = {
    content: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    specialNumber: PropTypes.number,
    backgroundColor: PropTypes.string,
    fontColor: PropTypes.string,
    signFontColor: PropTypes.string,
    signColor: PropTypes.string,
    position: PropTypes.oneOf(['start', 'center', 'end']),
    lightMode: PropTypes.bool
}

SectionTitle.defaultProps = {
    specialNumber: 1,
    backgroundColor: 'orange'
}

export default SectionTitle;
