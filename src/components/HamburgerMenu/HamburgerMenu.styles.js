import styled, {css} from 'styled-components';
import {navbarThemes} from "../../parts/navbar/Navbar.styles";

export const Hamburger = styled.div`
    display: none;
    position: absolute;
    right: 20px;
    top: 18px;
   
    @media (max-width: 992px) {
        display: block;
        cursor: pointer;
    }
`;

export const HamburgerPart = styled.span`
    display: block;
    width: 25px;
    height: 3px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: ${({theme}) => navbarThemes[theme].color};
    
    ${({withMargin}) => withMargin && css`
        margin: 5px 0 5px 0;
    `};
    
    @media (max-width: 992px) {
        ${Hamburger}.active &:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }
    
        ${Hamburger}.active &:nth-child(2) {
            opacity: 0;
        }
    
        ${Hamburger}.active &:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    }
`;
