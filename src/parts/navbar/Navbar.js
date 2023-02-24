import React, { useEffect, useRef, useState } from 'react';
import Scrollspy from 'react-scrollspy';
import './Navbar.styles.css';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../../components/LanguageSelector/LanguageSelector';
import {
    navbarThemesTypes,
    NavbarLink,
    SpecialNavbarLink,
    StyledNav,
    WebsiteHeader,
} from './Navbar.styles';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Logo } from '../../components/Logo/Logo';
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';
import AnimationsHandler from '../../components/AnimationsHandler/AnimationsHandler';

const Navbar = ({ history, links, languageSelector, defaultTheme }) => {
    const scrollSpy = useRef();
    const navbar = useRef();
    const { t } = useTranslation('common');
    const [viewState, setViewState] = useState({});
    const [currentTheme, setCurrentTheme] = useState(defaultTheme);
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
    const prevThemeRef = useRef('dark');

    useEffect(() => {
        prevThemeRef.current = currentTheme;
    });
    const prevTheme = prevThemeRef.current;

    useEffect(() => {
        typeof window !== 'undefined' &&
            window.addEventListener('scroll', changeNavbar, { passive: true });
        return () => {
            typeof window !== 'undefined' &&
                window.removeEventListener('scroll', changeNavbar);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        navbar.current.style.animation =
            'change-theme-to-' + currentTheme + '-from-' + prevTheme + ' 4s';
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentTheme]);

    const scrollTo = (id) => {
        if (typeof window !== 'undefined') {
            const section = document.getElementById(id);
            section && window.scrollTo(0, section.offsetTop);
        }
    };

    const redirect = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo(0, 0);
        }
    };

    const toggleMobileMenu = () => {
        const navMenu = document.getElementsByClassName('nav-menu')[0];
        const hamburgerMenu = document.getElementById('hamburger');
        navMenu.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
        setIsMobileMenuActive(!isMobileMenuActive);
    };

    const changeNavbar = () => {
        const viewState = scrollSpy?.current?.valueOf().state.inViewState;
        const sections = Object.fromEntries(
            links.map((_, i) => [links[i], viewState[i]])
        );
        setViewState(sections);
        setCurrentTheme(
            sections?.contact
                ? navbarThemesTypes.light
                : sections?.unknown
                ? navbarThemesTypes.special
                : navbarThemesTypes.dark
        );
    };

    const renderNavbarLinks = () => {
        let view = [];

        if (viewState?.unknown) {
            view.push(
                <SpecialNavbarLink
                    key={'unknown'}
                    currentTheme={'special'}
                    onClick={() => scrollTo('unknown')}
                >
                    {'not_found'}
                </SpecialNavbarLink>
            );
        } else {
            links.map((e) =>
                view.push(
                    <NavbarLink
                        key={e}
                        currentTheme={currentTheme}
                        onClick={() => scrollTo(e)}
                    >
                        {e === 'unknown' ? 404 : t(e)}
                    </NavbarLink>
                )
            );
        }

        return view;
    };

    const findActiveSection = (obj) => {
        return Object.keys(obj).find((key) => obj[key] === true);
    };

    return (
        <StyledNav ref={navbar} currentTheme={currentTheme}>
            <AnimationsHandler activeSection={findActiveSection(viewState)} />
            <WebsiteHeader
                title={document.title}
                currentTheme={currentTheme}
                onClick={() => redirect()}
            >
                <Logo
                    style={{ marginRight: 10 }}
                    lightMode={currentTheme === navbarThemesTypes.light}
                />
                {'Programm3r'}
            </WebsiteHeader>
            <Scrollspy
                className={'nav-menu'}
                ref={scrollSpy}
                items={links}
                offset={-10}
                currentClassName={
                    'navbar-link-current ' + currentTheme + '-color'
                }
            >
                {renderNavbarLinks()}
            </Scrollspy>
            {languageSelector && (
                <LanguageSelector
                    mobileDisplayStyle={isMobileMenuActive ? 'inline' : 'none'}
                    currentTheme={currentTheme}
                />
            )}
            <HamburgerMenu
                theme={currentTheme}
                onClick={() => toggleMobileMenu()}
            />
        </StyledNav>
    );
};

Navbar.propTypes = {
    history: PropTypes.object.isRequired,
    links: PropTypes.array,
    languageSelector: PropTypes.bool,
    defaultTheme: PropTypes.string,
};

Navbar.defaultProps = {
    links: [],
    languageSelector: false,
    defaultTheme: 'dark',
};

export default withRouter(Navbar);
