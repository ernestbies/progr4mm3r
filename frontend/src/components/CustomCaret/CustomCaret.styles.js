import styled, {keyframes} from 'styled-components';

const showHide = keyframes`
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`;

export const Caret = styled.span`
    display: inline-block;
    background-color: white;
    width: ${({width}) => width+'px'};
    height: ${({height}) => height+'px'};
    animation-name: ${showHide};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: steps(1);    
`;
