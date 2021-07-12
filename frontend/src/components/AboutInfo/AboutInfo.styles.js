import styled, {keyframes, css} from 'styled-components';
import {infoTypes} from "./AboutInfo";
import PropTypes from 'prop-types';

const typing = keyframes`
    0% {
        width: 0;
    }
    
    100% {
        width: 100%;
    }
`;

export const StyledParagraph = styled.p`
    display: inline-block;
    word-break: break-word;
    margin-left: 20px;
    margin-right: 20px;
    max-width: 570px;
    margin-top: 10px;
    font-size: 12px;
    font-weight: 300;
    height: 300px;
           
    @media (max-width: 600px) {
        height: auto;
        min-height: 300px;
    }
`;

export const InfoSection = styled.p`
    color: white;
    font-family: ${({consoleText}) => consoleText ? 'Source Code Pro' : 'Open Sans'}, serif;
    margin-bottom: 10px;
`;

InfoSection.propTypes = {
    consoleText: PropTypes.string
};

export const InfoText = styled.span`
    margin: 0 auto;
    overflow: hidden;
    ${({typingAnimation}) => typingAnimation && css`
        display: inline-block;
        white-space: nowrap;
        animation: ${typing} 10s forwards;
        float: left;
    `};
`;

export const ColoredText = styled.span`
    color: ${({color}) => color ?? 'orange'};
    font-weight: ${({fontWeight}) => fontWeight ?? '300'};
`;

ColoredText.propTypes = {
    color: PropTypes.string,
    fontWeight: PropTypes.string
};

export const InfoHeader = styled.span`
    color: orange;
    font-family: Roboto Condensed, serif;
    font-weight: bold;
    
    &:before {
        content: "> ${({headerType}) => infoTypes.header + infoTypes.connector + headerType}";
    }
    
    &:after {
        content: ":";
    }
`;

InfoHeader.propTypes = {
    headerType: PropTypes.oneOf([])
};
