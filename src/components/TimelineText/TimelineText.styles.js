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
    font-family: Source Code Pro, serif;
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
    color: ${({color}) => color ?? 'orange'};
`;

export const StyledText = styled.span`
    font-family: Open Sans, serif;
    color: gray;
    font-weight: 300;
    margin-top: 2px;
`;
