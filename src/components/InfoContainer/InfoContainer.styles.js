import styled from 'styled-components';

export const StyledInfoContainer = styled.div`
    background-color: black;
    border-bottom: 1px solid orange;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const InfoText = styled.p`
    font-family: Roboto Condensed, serif;
    color: white;
    width: '90%';
    padding-top: 2.5rem;
    padding-bottom: 2rem;
`;

export const InfoTextBold = styled.span`
    font-weight: bold;
    color: orange;
`;
