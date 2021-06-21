import styled, {keyframes} from 'styled-components';
import {mystery} from "../../utils/information";

const StyledNav = styled.nav`
    top: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    position: fixed;
    justify-content: center;
    text-align: center;
    background-color: ${({currentTheme}) => (currentTheme === 'dark' ? 'black' : 'white')};
    padding-top: 15px;
    z-index: 2;
    
    @media (max-width: 992px) {
        padding-bottom: ${({mobileMenu}) => (mobileMenu ? 0 : '15px')};
    }
`;

const WebsiteHeader = styled.div`
    font-family: 'Open Sans', serif;
    font-size: 16px;
    font-weight: 300;
    color: ${({currentTheme}) => (currentTheme === 'dark' ? 'orange' : '#9932CC')};
    display: inline;
    position: absolute;
    left: 50px;
    cursor: pointer;
    
    &:hover {
        color: ${({currentTheme}) => (currentTheme === 'dark' ? 'white' : 'orange')};
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
    color: ${({currentTheme}) => (currentTheme === 'dark' ? 'white' : 'black')};
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

const mixColors = keyframes`
    0% {
        color: orange;
        border-bottom-color: orange;
    }

    50% {
        color: #9932CC;
        border-bottom-color: #9932CC;
    }

    100% {
        color: orange;
        border-bottom-color: orange;
    }
`

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
`

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
`

const SpecialNavbarLink = styled(NavbarLink)`
    padding-bottom: 15px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: orange;
    color: orange;
    width: 18rem;
    animation: ${mixColors} 5s infinite ease-in-out; 
    font-family: Source Code Pro, serif;
    
    &:after {
        content: "";
        animation: ${changeLetters} 8s infinite ease-in-out;
    }
    
    &:before {
        content: "";
        animation: ${showHide} 8s infinite ease-in-out;
    }
`

export  {
    StyledNav,
    WebsiteHeader,
    NavbarLink,
    SpecialNavbarLink
}
