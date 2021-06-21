import React, {useEffect, useRef, useState} from 'react';
import Scrollspy from 'react-scrollspy'
import "./Navbar.styles.css";
import {WEBSITE_NAME, WEBSITE_TITLE, WEBSITE_URL} from "../../utils/information";
import {useTranslation} from "react-i18next";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
import {NavbarLink, SpecialNavbarLink, StyledNav, WebsiteHeader} from "./Navbar.styles";
import PropTypes from 'prop-types';
import {withRouter} from "react-router";
import {Logo} from "../../components/Logo/Logo";

const Navbar = ({history, links, languageSelector}) => {

    const scrollSpy = useRef();
    const {t} = useTranslation('common');
    const [currentTheme, setCurrentTheme] = useState('dark');
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
    const [isLastSection, setIsLastSection] = useState(false);

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
        setCurrentTheme(scrollSpy?.current?.valueOf().state.inViewState[4] ? 'light' : 'dark');
        setIsLastSection(scrollSpy?.current?.valueOf().state.inViewState[5]);
    }

    const renderNavbarLinks = () => {
        let view = [];

        if (isLastSection) {
            view.push(<SpecialNavbarLink key={links[5]} currentTheme={'dark'}
                                  onClick={() => scrollTo(links[5])}>
                {'ERR_TRANSMISSION_01'}
            </SpecialNavbarLink>)
        } else {
            links.filter(e => e !== 'other').map(e => view.push(
                <NavbarLink key={e} currentTheme={currentTheme} onClick={() => scrollTo(e)}>{t(e)}</NavbarLink>
            ))
        }

        return view;
    }

    const redirect = () => {
        if (history.location.pathname !== '/') {
            window.location.replace(WEBSITE_URL);
        } else {
            window.scrollTo(0, 0);
        }
    };

    return (
        <StyledNav currentTheme={currentTheme} mobileMenu={isMobileMenuActive}>
            <WebsiteHeader title={WEBSITE_TITLE} currentTheme={currentTheme} onClick={() => redirect()}>
                <Logo lightMode={currentTheme === 'light'}/>{WEBSITE_NAME}
            </WebsiteHeader>
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
            {languageSelector && <LanguageSelector animations={isLastSection} currentTheme={currentTheme} mobileMenu={isMobileMenuActive}/>}
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
    links: PropTypes.array,
    languageSelector: PropTypes.bool
}

Navbar.defaultProps = {
    links: [],
    languageSelector: false
}

export default withRouter(Navbar);
