import React, {useEffect, useRef, useState} from 'react';
import Scrollspy from 'react-scrollspy'
import "./Navbar.styles.css";
import {WEBSITE_NAME, WEBSITE_TITLE, WEBSITE_URL} from "../../utils/information";
import {useTranslation} from "react-i18next";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
import {NavbarLink, navbarThemesTypes, SpecialNavbarLink, StyledNav, WebsiteHeader} from "./Navbar.styles";
import PropTypes from 'prop-types';
import {withRouter} from "react-router";
import {Logo} from "../../components/Logo/Logo";

const Navbar = ({history, links, languageSelector}) => {

    const scrollSpy = useRef();
    const navbar = useRef();
    const {t} = useTranslation('common');
    const [currentTheme, setCurrentTheme] = useState('dark');
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
    const [isLastSection, setIsLastSection] = useState(false);
    const prevThemeRef = useRef('dark');
    useEffect(() => {
        prevThemeRef.current = currentTheme;
    });
    const prevTheme = prevThemeRef.current;

    useEffect(() => {
        window.addEventListener('scroll', changeNavbar, {passive: true});

        return () => {
            window.removeEventListener('scroll', changeNavbar);
        }
    }, []);

    const scrollTo = (id) => window.scrollTo(0, document.getElementById(id).offsetTop);

    const toggleMobileMenu = () => {
        const navMenu = document.getElementsByClassName('nav-menu')[0];
        const hamburgerMenu = document.getElementById('hamburger');
        navMenu.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');

        setIsMobileMenuActive(!isMobileMenuActive);
    }

    const changeNavbar = () => {
        const viewState = scrollSpy?.current?.valueOf().state.inViewState;
        setCurrentTheme(viewState[4] ? navbarThemesTypes.light :
            viewState[5] ? navbarThemesTypes.special: navbarThemesTypes.dark);
        setIsLastSection(viewState[5]);
    }

    useEffect(() => {
        navbar.current.style.animation = 'change-theme-to-' + currentTheme + '-from-' + prevTheme + ' 4s';
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentTheme])

    const renderNavbarLinks = () => {
        let view = [];

        if (isLastSection) {
            view.push(<SpecialNavbarLink key={links[5]} currentTheme={navbarThemesTypes.dark}
                                  onClick={() => scrollTo(links[5])}>
                {'UNKNOWN_SECTION_01'}
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
        <StyledNav ref={navbar} currentTheme={currentTheme} mobileMenu={isMobileMenuActive}>
            <WebsiteHeader title={WEBSITE_TITLE} currentTheme={currentTheme} onClick={() => redirect()}>
                <Logo lightMode={currentTheme === navbarThemesTypes.light}/>{WEBSITE_NAME}
            </WebsiteHeader>
            <Scrollspy className={'nav-menu'}
                       ref={scrollSpy}
                       offset={-10}
                       items={links}
                       currentClassName={'navbar-link-current ' + currentTheme + '-color'}
            >
                {
                    renderNavbarLinks()
                }
            </Scrollspy>
            {languageSelector && <LanguageSelector animations={isLastSection} currentTheme={currentTheme} mobileMenu={isMobileMenuActive}/>}
            <div id={'hamburger'} className={'hamburger'} onClick={() => toggleMobileMenu()}>
                <span className={currentTheme === navbarThemesTypes.dark ? 'bar dark' : 'bar light'}/>
                <span className={currentTheme === navbarThemesTypes.dark ? 'bar dark' : 'bar light'}
                      style={{marginTop: 5, marginBottom: 5}}/>
                <span className={currentTheme === navbarThemesTypes.dark ? 'bar dark' : 'bar light'}/>
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
