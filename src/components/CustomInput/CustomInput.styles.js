import styled from 'styled-components';

export const StyledInput = styled.input`
    width: 100%;
    max-width: 400px;
    cursor: ${({cursorPointer}) => (cursorPointer ? 'pointer' : 'auto')};
    background-color: transparent;
    border-radius: 6px;
    border-width: 1px;
    border-color: goldenrod;
    margin-top: 10px;
    margin-bottom: 10px;
    color: white;
    font-family: Source Code Pro, serif;
    font-weight: 300;
    font-size: 12px;
    padding: 5px;
    text-align: center;
    outline: none;
    
    @media (max-width: 480px) {
        max-width: 300px;
        font-size: 9px;
    }
`;
