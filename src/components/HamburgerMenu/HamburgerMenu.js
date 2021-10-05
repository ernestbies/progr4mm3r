import React from "react";
import {Hamburger, HamburgerPart} from "./HamburgerMenu.styles";

const HamburgerMenu = ({theme, onClick}) => {
    return (
        <Hamburger id={'hamburger'} onClick={onClick}>
            <HamburgerPart theme={theme}/>
            <HamburgerPart theme={theme} withMargin/>
            <HamburgerPart theme={theme}/>
        </Hamburger>
    )
}

export default HamburgerMenu;
