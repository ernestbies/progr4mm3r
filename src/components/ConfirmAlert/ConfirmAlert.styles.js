import styled, {keyframes} from 'styled-components';
import {Alert} from "react-bootstrap";

const showButton = keyframes`
    from {
        right: 0;
        bottom: 10px;
    }

    to {
        right: 35px;
        bottom: 10px;
    }
`;

export const StyledAlert = styled(Alert)`
    width: 250px;
    height: 100px;
    bottom: 1px;
    right: 1px;
    animation-name: ${showButton};
    background-color: black;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    position: fixed;
    z-index: 10;
    border: 1px solid grey;
    
    @media (max-width: 360px) {
        bottom: 0;
        right: 0;
        transform: scale(0.8);
    }
`;

export const AlertTitle = styled.p`
    font-size: 15px;
    font-family: Roboto Condensed, serif; 
    color: ${({variant}) => variant === 'success' ? 'orange' : 'darkred'};   
`;

export const AlertText = styled.p`
    font-size: 11px;
    font-family: Roboto Condensed, serif; 
    color: white;   
`;
