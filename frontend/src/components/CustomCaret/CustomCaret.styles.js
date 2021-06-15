import styled from 'styled-components';

export const Caret = styled.span`
    display: inline-block;
    background-color: white;
    width: ${({width}) => width+'px'};
    height: ${({height}) => height+'px'};
    animation-name: show-hide;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: steps(1);    
`;
