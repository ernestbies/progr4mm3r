import React, {useEffect, useRef, useState} from 'react';
import Scrollspy from 'react-scrollspy'
import "./Navbar.styles.css";
import {WEBSITE_NAME} from "../../utils/information";
import {useTranslation} from "react-i18next";
import LanguageSelector from "../../components/LanguageSelector";
import {NavbarLink, StyledNav, WebsiteName} from "./Navbar.styles";
import PropTypes from 'prop-types';

const Navbar = ({links, languageSelector = true}) => {

    const scrollSpy = useRef();
    const {t} = useTranslation('common');
    const [currentTheme, setCurrentTheme] = useState('dark');
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', changeNavbar, {passive: true});

        return () => {
            window.removeEventListener('scroll', changeNavbar);
        }
    }, []);

    const scrollTo = (id) => window.scrollTo(0, document.getElementById(id).offsetTop);

    const toggleMobileMenu = () => {
        const navMenu = document.getElementsByClassName('navMenu')[0];
        const hamburgerMenu = document.getElementById('hamburger');
        navMenu.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');

        setIsMobileMenuActive(!isMobileMenuActive);
    }

    const changeNavbar = () => {
        setCurrentTheme(scrollSpy?.current.valueOf().state.inViewState[4] ? 'light' : 'dark');
    }

    const renderNavbarLinks = () => {
        let view = [];
        links.map(e => view.push(
            <NavbarLink key={e} currentTheme={currentTheme} onClick={() => scrollTo(e)}>{t(e)}</NavbarLink>
        ))

        return view;
    }

    return (
        <StyledNav currentTheme={currentTheme} mobileMenu={isMobileMenuActive}>
            <WebsiteName currentTheme={currentTheme} onClick={() => window.scrollTo(0, 0)}>{WEBSITE_NAME}</WebsiteName>
            <Scrollspy className={'navMenu'}
                       ref={scrollSpy}
                       offset={-10}
                       items={links}
                       currentClassName={currentTheme === 'dark' ?
                           'navbarLinkCurrent dark-color' : 'navbarLinkCurrent light-color'}
            >
                {
                    renderNavbarLinks()
                }
            </Scrollspy>
            {languageSelector && <LanguageSelector currentTheme={currentTheme} mobileMenu={isMobileMenuActive}/>}
            <div id={'hamburger'} className={'hamburger'} onClick={() => toggleMobileMenu()}>
                <span className={currentTheme === 'dark' ? 'bar dark' : 'bar light'}/>
                <span className={currentTheme === 'dark' ? 'bar dark' : 'bar light'}
                      style={{marginTop: 5, marginBottom: 5}}/>
                <span className={currentTheme === 'dark' ? 'bar dark' : 'bar light'}/>
            </div>
        </StyledNav>
    );
}

Navbar.propTypes = {
    links: PropTypes.array.isRequired,
    languageSelector: PropTypes.bool
}

export default Navbar;
