import styled from 'styled-components';

export const StyledPar = styled.p`
    color: orange;
    font-family: Source Code Pro, serif;
    font-weight: 300;
    font-size: 20px;
    display: inline;
    user-select: none;
    
    &:before {
        content: "> "
    }
    
    &:after {
        content: ": "
    }
`;

export const ColoredSpan = styled.span`
    color: ${({color}) => color};
    font-family: Source Code Pro, serif;
    font-weight: 300;
    font-size: 20px;
    user-select: none;
`;
