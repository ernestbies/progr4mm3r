import styled from 'styled-components';

const StyledNav = styled.nav`
    top: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    position: fixed;
    justify-content: center;
    box-sizing: border-box;
    background-color: ${({currentTheme}) => (currentTheme === 'dark' ? 'black' : 'white')};
    text-align: center;
    padding-top: 15px;
    z-index: 2;
    
    @media (max-width: 992px) {
        padding-bottom: ${({mobileMenu}) => (mobileMenu ? 0 : '15px')};
    }
`;

const WebsiteName = styled.div`
    font-family: 'Open Sans', serif;
    font-size: 16px;
    font-weight: 300;
    color: ${({currentTheme}) => (currentTheme === 'dark' ? 'orange' : '#9932CC')};
    display: inline;
    position: absolute;
    left: 50px;
    
    &:hover {
        color: white;
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
    width: 7rem; 
    
    &:hover {
        color: orange;
        text-decoration: none;
    }   
        
    @media (max-width: 992px) {
        position: static;
        margin-bottom: 0;
    }
`;

export  {
    StyledNav,
    WebsiteName,
    NavbarLink
}
