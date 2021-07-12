import styled from 'styled-components';

export const FabButton = styled.a`
    text-decoration: none !important;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 40px;
    background-color: #FFA500;
    text-align: center;
    font-size: 14px;
    color: black;
    position: fixed;
    font-family: Roboto Condensed;
    font-size: 13px;
    bottom: 15px;
    right: 15px;
    border: 1px solid #000;
    border-radius: 30px;
    transition: background-color 3s ease-in-out, color 3s ease-in-out, border 3s ease-in-out;
    
    &:hover {
        color: white;
        background-color: #FFA50099;
        border: 2px solid #FFF;
    }
`;
