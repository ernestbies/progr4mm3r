import React from 'react';
import {FooterText, StyledFooter} from "./Footer.styles";
import {WEBSITE_NAME} from "../../utils/data/information";

const Footer = () => {
    return (
        <StyledFooter>
            <FooterText>
                &copy; {WEBSITE_NAME} 2021. All rights reserved.
            </FooterText>
        </StyledFooter>
    );
}

export default Footer;
