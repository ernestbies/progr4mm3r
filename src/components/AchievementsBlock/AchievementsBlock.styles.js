import styled, { keyframes } from 'styled-components';

const showHideAnimation = keyframes`
    0% {
        opacity: 0;
    }
    
    80% {
        opacity: 100%;
    } 
    
    100% {
        opacity: 0;
    }  
`;

export const TextWrapper = styled.div`
    display: ${({ display }) => display};
    animation: ${showHideAnimation} 10s ease-in-out;
    margin-top: 5px;
`;

export const TextBlock = styled.div`
    font-size: 13px;
    user-select: none;
`;

export const StyledSpan = styled.span`
    color: orange;
    line-height: 12px;
`;

export const StyledCode = styled.code`
    display: block;
    margin-bottom: 5px;
`;
