import React from 'react';
import styled from 'styled-components';
import {languages} from "../utils/information";
import {useTranslation} from "react-i18next";
import PropTypes from 'prop-types';

const StyledDiv = styled.div`
    display: inline;
    position: absolute;
    font-weight: 300;
    right: 50px;
    
    @media (max-width: 992px) {
        display: ${({mobileMenu}) => (mobileMenu ? 'inline' : 'none')};
        position: static;
        padding-bottom: 10px;
    }
`;

const LanguageButton = styled.button`
    border: none;
    background-color: inherit;
    width: 50px;
    font-family: 'Open Sans', serif;
    font-weight: 300;
    font-size: 16px;
    color: ${({active, theme}) => (active && theme === 'dark' ? 'orange' : !active && theme === 'dark' ? 'white' : active && theme === 'light' ? '#9932CC' : 'black')};
    cursor: pointer;
    display: inline-block;
`;

const LanguageDivider = styled.span`
    color: ${({theme}) => (theme === 'dark' ? 'white' : 'black')};
    font-family: Open Sans, serif;
`;

const LanguageSelector = ({currentTheme, mobileMenu = false}) => {

    const {i18n} = useTranslation('common');

    return (
        <StyledDiv mobileMenu={mobileMenu}>
            <LanguageButton theme={currentTheme} active={i18n.language === languages.pl}
                            onClick={() => i18n.changeLanguage(languages.pl)}>
                {languages.pl.toUpperCase()}
            </LanguageButton>
            <LanguageDivider theme={currentTheme}>{'/'}</LanguageDivider>
            <LanguageButton theme={currentTheme} active={i18n.language === languages.en}
                            onClick={() => i18n.changeLanguage(languages.en)}>
                {languages.en.toUpperCase()}
            </LanguageButton>
        </StyledDiv>
    )
}

LanguageSelector.propTypes = {
    currentTheme: PropTypes.oneOf(['dark', 'light']),
    mobileMenu: PropTypes.bool
}

LanguageSelector.defaultProps = {
    currentTheme: 'dark'
}

export default LanguageSelector;
