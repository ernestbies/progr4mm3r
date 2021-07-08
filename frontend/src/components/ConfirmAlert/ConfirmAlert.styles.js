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
    width: 300px;
    bottom: 1px;
    right: 1px;
    animation-name: ${showButton};
    animation-duration: 2s;
    animation-fill-mode: forwards;
    position: fixed;
`

export const AlertText = styled.p`
    font-size: ${({fontSize}) => fontSize};
    font-family: Open Sans, serif;    
`
