import styled, {css, keyframes} from "styled-components";

export const SelectorSection = styled.div`
    display: inline;
    position: absolute;
    font-weight: 300;
    right: 50px;
    
    @media (max-width: 992px) {
        display: ${({mobileMenu}) => (mobileMenu ? 'inline' : 'none')};
        position: static;
        padding-bottom: 10px;
    }
`;

export const LanguageButton = styled.button`
    border: none;
    background-color: inherit;
    width: 50px;
    font-family: 'Open Sans', serif;
    font-weight: 300;
    font-size: 16px;
    color: ${({active, theme}) => (active && theme === 'dark' ? 'orange' : !active && theme === 'dark' ? 'white' : active && theme === 'light' ? '#9932CC' : 'black')};
    cursor: pointer;
    display: inline-block;
    
    &:hover {
        color: ${({currentTheme}) => (currentTheme === 'dark' ? 'white' : 'orange')};
    }
`;


const changeDivider = keyframes`
    0% {
        content: '/';
    }
    
    100% {
        content: '\\005C';
    }
`;

export const LanguageDivider = styled.span`
    color: ${({theme}) => (theme === 'dark' ? 'white' : 'black')};
    font-family: Open Sans, serif;
    
    &:after {
        content: "${({content}) => content}";
    }
    
    ${({animations}) => animations && css`
        &:after {
           animation: ${changeDivider} 2s infinite;
        }
    `}
`;