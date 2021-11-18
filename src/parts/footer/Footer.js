import React from 'react';
import {FooterText, StyledFooter} from "./Footer.styles";

const Footer = () => {
    return (
        <StyledFooter>
            <FooterText>
                App developed by &copy; ernestbies.netlify.app 2021. All rights reserved.
            </FooterText>
        </StyledFooter>
    );
}

export default Footer;
