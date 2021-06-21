import styled, {keyframes, css} from 'styled-components';
import PropTypes from 'prop-types';

const changeContent = keyframes`
    0% {
        content: "> ";
    }
    25% {
        content: "< ";
    }
    50% {
        content: ". ";
    }
    75% {
        content: "# ";
    }
    100% {
        content: "_ ";
    }
`;

const changeNumber = keyframes`
    0% {
        content: "0";
    }
    50% {
        content: "X";  
    }
    100% {
        content: "0";
    }
`;

const rotateAnimation = keyframes`
    0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    50% {
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        transform: rotate(180deg);
    }
    100% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
`

export const StyledPar = styled.p`
    color: orange;
    font-family: Source Code Pro, serif;
    font-weight: 300;
    font-size: 20px;
    display: inline;
    user-select: none;
    
    &:before {
        content: "> ";
        animation: ${changeContent} 6s infinite; 
    }
    
    &:after {
        content: ": ";
    }
`;

export const ColoredSpan = styled.span`
    color: ${({color}) => color};
    font-family: Source Code Pro, serif;
    font-weight: 300;
    font-size: 20px;
    user-select: none;
`;

export const StyledContent = styled.span` 
    &:after {
        content: "${({value}) => value}";
        display: inline-block;
        ${props => props.animation.split(' ').includes('change') && css`
            animation: ${changeNumber} 3s infinite steps(1);
        `}
        ${props => props.animation.split(' ').includes('rotate')  && css`
            animation: ${rotateAnimation} 3s infinite steps(1);
        `}
    }
`;

StyledContent.propTypes = {
    value: PropTypes.string.isRequired,
    animation: PropTypes.string,
}
