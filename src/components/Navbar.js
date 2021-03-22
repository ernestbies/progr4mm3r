import React from 'react';

const Navbar = () => {
    const websiteName = 'ernestbies.com';
    const navbarOptions = ['about', 'projects', 'skills', 'hobby', 'contact'];

    const generateNavbar = (navbarOptions) => {
        return navbarOptions.map(el => <a href={'#' + el} className={'navbarText'}>{el.charAt(0).toUpperCase() + el.slice(1)}</a>);
    }

    return (
      <div className={'navbarContent'}>
          <p className={'websiteName'}>{websiteName}</p>
          {generateNavbar(navbarOptions)}
      </div>
    );
}

export default Navbar;
