import React, {useEffect, useRef, useState} from 'react';
import Scrollspy from 'react-scrollspy'
import "./Navbar.styles.css";
import {WEBSITE_NAME, WEBSITE_TITLE, WEBSITE_URL} from "../../utils/information";
import {useTranslation} from "react-i18next";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
import {navbarThemesTypes, NavbarLink, SpecialNavbarLink, StyledNav, WebsiteHeader} from "./Navbar.styles";
import PropTypes from 'prop-types';
import {withRouter} from "react-router";
import {Logo} from "../../components/Logo/Logo";
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";
import AnimationsHandler from "../../components/AnimationsHandler/AnimationsHandler";

const Navbar = ({history, links, languageSelector, enableContent}) => {

    const scrollSpy = useRef();
    const navbar = useRef();
    const {t} = useTranslation('common');
    const [viewState, setViewState] = useState({});
    const [currentTheme, setCurrentTheme] = useState('dark');
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
    const prevThemeRef = useRef('dark');

    useEffect(() => {prevThemeRef.current = currentTheme;});
    const prevTheme = prevThemeRef.current;

    useEffect(() => {
        window.addEventListener('scroll', changeNavbar, {passive: true});
        return () => {
            window.removeEventListener('scroll', changeNavbar);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        navbar.current.style.animation = 'change-theme-to-' + currentTheme + '-from-' + prevTheme + ' 4s';
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentTheme]);

    const scrollTo = (id) => {
        const reveal = localStorage.getItem('reveal');
        if(!reveal) {
            enableContent(true);
        }
        const section = document.getElementById(id);
        section && window.scrollTo(0, section.offsetTop);
    }

    const redirect = () => {
        if (history.location.pathname !== '/') {
            window.location.replace(WEBSITE_URL);
        } else {
            window.scrollTo(0, 0);
        }
    };

    const toggleMobileMenu = () => {
        const navMenu = document.getElementsByClassName('nav-menu')[0];
        const hamburgerMenu = document.getElementById('hamburger');
        navMenu.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
        setIsMobileMenuActive(!isMobileMenuActive);
    }

    const changeNavbar = () => {
        const viewState = scrollSpy?.current?.valueOf().state.inViewState;
        const sections = Object.fromEntries(links.map((_, i) => [links[i], viewState[i]]));
        setViewState(sections);
        setCurrentTheme(sections?.contact ? navbarThemesTypes.light :
                sections?.unknown ? navbarThemesTypes.special : navbarThemesTypes.dark);
    }

    const renderNavbarLinks = () => {
        let view = [];

        if (viewState?.unknown) {
            view.push(<SpecialNavbarLink key={'unknown'} currentTheme={navbarThemesTypes.dark}
                                         onClick={() => scrollTo('unknown')}>
                {'UNKNOWN_SECTION_01'}
            </SpecialNavbarLink>)
        } else {
            links.filter(e => e !== 'unknown').map(e => view.push(
                <NavbarLink key={e} currentTheme={currentTheme} onClick={() => scrollTo(e)}>{t(e)}</NavbarLink>
            ))
        }

        return view;
    }

    const findActiveSection = (obj) => {
        return Object.keys(obj).find(key => obj[key] === true);
    }

    return (
        <StyledNav ref={navbar} currentTheme={currentTheme}>
            <AnimationsHandler activeSection={findActiveSection(viewState)}/>
            <WebsiteHeader title={WEBSITE_TITLE} currentTheme={currentTheme} onClick={() => redirect()}>
                <Logo lightMode={currentTheme === navbarThemesTypes.light}/>{WEBSITE_NAME}
            </WebsiteHeader>
            <Scrollspy className={'nav-menu'}
                       ref={scrollSpy}
                       items={links}
                       offset={-10}
                       currentClassName={'navbar-link-current ' + currentTheme + '-color'}
            >
                {
                    renderNavbarLinks()
                }
            </Scrollspy>
            {languageSelector && <LanguageSelector
                mobileDisplayStyle={isMobileMenuActive ? 'inline' : 'none'}
                currentTheme={currentTheme}/>}
            <HamburgerMenu theme={currentTheme} onClick={() => toggleMobileMenu()}/>
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
