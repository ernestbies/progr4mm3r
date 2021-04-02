import React from 'react';
import Scrollspy from 'react-scrollspy'

const Navbar = () => {

    const WEBSITE_NAME = 'ernestbies.com';

    const scrollTo = (id) => {
        window.scrollTo(0, document.getElementById(id).offsetTop)
    }

    return (
        <div className={'navbarContent'}>
            <p key={WEBSITE_NAME} className={'websiteName'}>{WEBSITE_NAME}</p>
            <Scrollspy style={{display: 'inline', marginLeft: -55}} offset={-1}
                       items={['about', 'projects', 'skills', 'hobby', 'contact']} currentClassName="is-current">
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
            </Scrollspy>
        </div>
    );
}

export default Navbar;
