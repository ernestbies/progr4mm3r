import styled, {keyframes} from 'styled-components';

export const revealText = keyframes`
    0% {
        opacity: 0;
    }
    
    100% {
        opacity: 1;
    }
`;

export const StyledP = styled.p`
    color: gray;
    display: inline;
    font-family: Open Sans, serif;
    font-weight: bold;
    font-size: 14px;
    
    @media (max-width: 480px) {
        font-size: 11px;
    }
    
    &.animated {
        animation: ${revealText} 6s forwards;
    }
`;

export const StyledSpan = styled.span`
    color: orange;
    display: inline;
    font-family: Open Sans, serif;
    font-weight: 300;
`;

export const StyledText = styled.span`
    color: gray;
    font-weight: 300;
`;
