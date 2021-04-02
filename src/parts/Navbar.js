import React from 'react';

const Navbar = () => {
    const websiteName = 'ernestbies.com';

    const scrollTo = (id) => {
        window.scrollTo(0, document.getElementById(id).offsetTop)
    }

    return (
        <div className={'navbarContent'}>
            <p key={websiteName} className={'websiteName'}>{websiteName}</p>
            <div key={'about'} onClick={() => scrollTo('about')} className={'navbarText'}>
                {'About'}</div>
            <div key={'projects'} onClick={() => scrollTo('projects')} className={'navbarText'}>
                {'Projects'}
            </div>
            <div key={'skills'} onClick={() => scrollTo('skills')} className={'navbarText'}>
                {'Skills'}
            </div>
            <div key={'hobby'} onClick={() => scrollTo('hobby')} className={'navbarText'}>
                {'Hobby'}
            </div>
            <div key={'contact'} onClick={() => scrollTo('contact')} className={'navbarText'}>
                {'Contact'}
            </div>
        </div>
    );
}

export default Navbar;
