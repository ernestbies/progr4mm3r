import styled, {keyframes} from 'styled-components';
import {mystery} from "../../utils/information";

// Available themes (navigation bar)
export const navbarThemesTypes = {
    dark: 'dark',
    light: 'light',
    special: 'special'
}

// Available themes - properties (navigation bar)
export const navbarThemes = {
    dark: {
        background: 'black',
        color: 'orange',
        fontColor: 'white',
        additionalColor: 'white'
    },
    light: {
        background: 'white',
        color: '#9932CC',
        fontColor: 'black',
        additionalColor: 'black'
    },
    special: {
        background: '#000015',
        color: '#9932CC',
        fontColor: 'black',
        additionalColor: 'orange'
    }
};

const changeLetters = keyframes`
    0% {
        content: ""
    }

    25% {
        content: "_${mystery[0]}"
    }
    
    50% {
        content: "_${mystery[0] + mystery[1]}"
    }
    
    75% {
        content: "_${mystery[0] + mystery[1] + mystery[2]}"
    }

    100% {
        content: "_${mystery[0] + mystery[1] + mystery[2] + mystery[3]}"
    }
`;

const showHide = keyframes`
    0% {
        content: "> "
    }

    25% {
        content: ""
    }
    
    50% {
        content: "< "
    }
    
    75% {
        content: ""
    }

    100% {
        content: "> "
    }
`;

const StyledNav = styled.nav`
    top: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    position: fixed;
    justify-content: center;
    text-align: center;
    background-color: ${({currentTheme}) => navbarThemes[currentTheme].background};
    padding-top: 15px;
    z-index: 2;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #FFFFFF99;
    
    @media (max-width: 992px) {
        padding-bottom: ${({mobileMenu}) => (mobileMenu ? 0 : '15px')};
    }
`;

const WebsiteHeader = styled.div`
    font-family: 'Open Sans', serif;
    font-size: 16px;
    font-weight: 300;
    color: ${({currentTheme}) => navbarThemes[currentTheme].color};
    display: inline;
    position: absolute;
    left: 50px;
    cursor: pointer;
    
    &:hover {
        color: ${({currentTheme}) => navbarThemes[currentTheme].color};
    }
    
    @media (max-width: 992px) {
        position: static;
    }
`;

const NavbarLink = styled.div`
    cursor: pointer;
    font-family: 'Open Sans', serif;
    font-weight: 300;
    font-size: 16px;
    margin-bottom: -15px;
    color: ${({currentTheme}) => navbarThemes[currentTheme].fontColor};
    width: 7.5rem; 
    
    &:hover {
        color: orange;
        text-decoration: none;
    }   
        
    @media (max-width: 992px) {
        position: static;
        margin-bottom: 0;
    }
`;

const SpecialNavbarLink = styled(NavbarLink)`
    padding-bottom: 15px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: orange;
    color: orange;
    width: 18rem;
    font-family: Source Code Pro, serif;
    text-transform: uppercase;
    animation: orange-to-purple-with-border 5s infinite;
    
    &:after {
        content: "";
        animation: ${changeLetters} 8s infinite ease-in-out;
    }
    
    &:before {
        content: "";
        animation: ${showHide} 8s infinite ease-in-out;
    }
`;

export {
    StyledNav,
    WebsiteHeader,
    NavbarLink,
    SpecialNavbarLink
}
