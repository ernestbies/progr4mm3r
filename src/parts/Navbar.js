import React from 'react';

const Navbar = () => {
    const websiteName = 'ernestbies.com';
    const navbarOptions = ['about', 'projects', 'skills', 'hobby', 'contact'];

    const scrollTo = (id) => {
        window.scrollTo(0, document.getElementById(id).offsetTop)
    }

    const generateNavbar = (navbarOptions) => {
        return navbarOptions.map(el => <p key={el} onClick={() => scrollTo(el)} className={'navbarText'}>{el.charAt(0).toUpperCase() + el.slice(1)}</p>);
    }

    return (
      <div className={'navbarContent'}>
          <p key={websiteName} className={'websiteName'}>{websiteName}</p>
          {generateNavbar(navbarOptions)}
      </div>
    );
}

export default Navbar;
