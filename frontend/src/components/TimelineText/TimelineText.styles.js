import styled from 'styled-components';

export const StyledP = styled.p`
    color: gray;
    display: inline;
    font-family: Open Sans, serif;
    font-weight: bold;
    font-size: 14px;
    
    @media (max-width: 480px) {
        font-size: 10px;
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
