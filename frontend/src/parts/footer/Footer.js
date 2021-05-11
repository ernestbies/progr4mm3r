import React from 'react';
import "./Footer.styles.css";
import {WEBSITE_NAME} from "../../utils/information";

const Footer = () => {
    return (
        <footer className={'footer'}>
            <p style={{color: 'white', margin: 0}}>&copy; {WEBSITE_NAME} 2021. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
