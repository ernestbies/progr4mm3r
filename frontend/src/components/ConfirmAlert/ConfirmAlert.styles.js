import styled from 'styled-components';
import {Alert} from "react-bootstrap";

export const StyledAlert = styled(Alert)`
    width: 300px;
    bottom: 1px;
    right: 1px;
    animation-name: show-button;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    position: fixed;
`

export const AlertText = styled.p`
    font-size: ${({fontSize}) => fontSize};
    font-family: Open Sans, serif;    
`
