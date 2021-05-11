import React, {useEffect} from 'react';
import Scrollspy from 'react-scrollspy'
import "./Navbar.styles.css";
import {WEBSITE_NAME} from "../../utils/information";

const Navbar = () => {

    const scrollSpy = React.useRef();

    useEffect(() => {
        window.addEventListener('scroll', changeNavbar);
    }, []);

    const scrollTo = (id) => window.scrollTo(0, document.getElementById(id).offsetTop);

    const toggleMobileMenu = () => {
        const hamburgerMenu = document.getElementById('hamburger');
        const navMenu = document.getElementsByClassName('navMenu')[0];
        const navbarContent = document.getElementsByClassName('navbarContent')[0];
        hamburgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        navbarContent.classList.toggle('active');
    }

    const changeNavbar = () => {
        const navbarContent = document.getElementsByClassName('navbarContent')[0];
        const websiteName = document.getElementById('websiteName');
        const bars = document.getElementsByClassName('bar');

        if (scrollSpy.current.valueOf().state.inViewState[4]) {
            websiteName.style.color = '#9932CC'
            navbarContent.style.backgroundColor = 'white';
            const navbarLinks = document.getElementsByClassName('navbarLink');
            Array.prototype.slice.call(navbarLinks).slice(0, 4).map(navLink => navLink.className = 'navbarLinkSecondTheme');
            Array.prototype.slice.call(bars).map(bar => bar.style.backgroundColor = '#9932CC');
        } else {
            if(navbarContent.style.backgroundColor !== 'black') {
                websiteName.style.color = 'orange'
                navbarContent.style.backgroundColor = 'black';
                const navbarLinks = document.getElementsByClassName('navbarLinkSecondTheme');
                Array.prototype.slice.call(navbarLinks).map(navLink => navLink.className = 'navbarLink');
                Array.prototype.slice.call(bars).map(bar => bar.style.backgroundColor = 'orange');
            }
        }
    }

    return (
        <nav className={'navbarContent'}>
            <div id={'websiteName'} onClick={() => window.scrollTo(0, 0)} className={'websiteName'}>{WEBSITE_NAME}</div>
            <Scrollspy className={'navMenu'}
                       ref={scrollSpy}
                       offset={-10}
                       items={['about', 'projects', 'skills', 'hobby', 'contact']}
                       currentClassName={'navbarLinkCurrent'}
            >
                <div onClick={() => scrollTo('about')} className={'navbarLink'}>{'About'}</div>
                <div onClick={() => scrollTo('projects')} className={'navbarLink'}>{'Projects'}</div>
                <div onClick={() => scrollTo('skills')} className={'navbarLink'}>{'Skills'}</div>
                <div onClick={() => scrollTo('hobby')} className={'navbarLink'}>{'Hobby'}</div>
                <div onClick={() => scrollTo('contact')} id={'contactLink'} className={'navbarLink'}>{'Contact'}</div>
            </Scrollspy>
            <div id={'hamburger'} className={'hamburger'} onClick={() => toggleMobileMenu()}>
                <span className={'bar'}/>
                <span className={'bar'} style={{marginTop: 5, marginBottom: 5}}/>
                <span className={'bar'}/>
            </div>
        </nav>
    );
}

export default Navbar;
