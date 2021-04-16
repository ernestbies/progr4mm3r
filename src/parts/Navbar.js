import React from 'react';
import Scrollspy from 'react-scrollspy'

const Navbar = () => {

    const scrollTo = (id) => window.scrollTo(0, document.getElementById(id).offsetTop);

    const toggleMobileMenu = () => {
        const hamburgerMenu = document.getElementById('hamburger');
        const navbarContent = document.getElementsByClassName('navbarContent')[0]
        const navMenu = document.getElementsByClassName('navMenu')[0];
        hamburgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        navbarContent.classList.toggle('active');
    }

    return (
        <nav className={'navbarContent'}>
            <div onClick={() => scrollTo('about')} className={'websiteName'}>{'ernestbies.com'}</div>
            <Scrollspy className={'navMenu'}
                       items={['about', 'projects', 'skills', 'hobby', 'contact']}
                       currentClassName={'navbarLinkCurrent'}
            >
                <div onClick={() => scrollTo('about')} className={'navbarLink'}>{'About'}</div>
                <div onClick={() => scrollTo('projects')} className={'navbarLink'}>{'Projects'}</div>
                <div onClick={() => scrollTo('skills')} className={'navbarLink'}>{'Skills'}</div>
                <div onClick={() => scrollTo('hobby')} className={'navbarLink'}>{'Hobby'}</div>
                <div onClick={() => scrollTo('contact')} className={'navbarLink'}>{'Contact'}</div>
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
