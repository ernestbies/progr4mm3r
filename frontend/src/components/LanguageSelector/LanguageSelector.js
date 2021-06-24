import React, {Component} from 'react';
import {languages} from "../../utils/information";
import {withTranslation} from "react-i18next";
import PropTypes from 'prop-types';
import {LanguageButton, LanguageDivider, SelectorSection} from "./LanguageSelector.styles";
import {navbarThemesTypes} from "../../parts/navbar/Navbar.styles";

// Class component - language selector {available languages: PL, EN}
class LanguageSelector extends Component {

    constructor(props) {
        super(props);

        this.state = {
            divider: '/'
        }
    }

    componentDidMount() {
        console.log('Current language:', this.props.i18n.language);
    }

    changeLanguageFunction = (language) => {
        this.props.i18n.changeLanguage(language).then(() => localStorage.setItem('language', language));
    }

    render () {
        const { i18n, mobileMenu, currentTheme, animations } = this.props;

        return (
            <SelectorSection mobileMenu={mobileMenu}>
                <LanguageButton theme={currentTheme} active={i18n.language === languages.pl}
                                onClick={() => this.changeLanguageFunction(languages.pl)}>
                    {languages.pl.toUpperCase()}
                </LanguageButton>
                <LanguageDivider content={this.state.divider} animations={animations} theme={currentTheme}/>
                <LanguageButton theme={currentTheme} active={i18n.language === languages.en}
                                onClick={() => this.changeLanguageFunction(languages.en)}>
                    {languages.en.toUpperCase()}
                </LanguageButton>
            </SelectorSection>
        )
    }
}

LanguageSelector.propTypes = {
    currentTheme: PropTypes.oneOf(Object.keys(navbarThemesTypes)),
    mobileMenu: PropTypes.bool,
    animations: PropTypes.bool
}

LanguageSelector.defaultProps = {
    currentTheme: 'dark',
    animations: false
}

export default withTranslation()(LanguageSelector);
