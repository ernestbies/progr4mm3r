import styled from 'styled-components';

export const MessageDiv = styled.div`
    font-family: Source Code Pro, serif;
    color: white; 
    word-break: break-all;
    font-size: 11px;
    margin-left: 5px;     
`;

export const MessageLine = styled.span`
    font-weight: ${({fontWeight}) => fontWeight};    
    color: ${({color, isAdmin}) => isAdmin ? 'red' : color};   
`;
