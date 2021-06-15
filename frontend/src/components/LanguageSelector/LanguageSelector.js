import React, {Component} from 'react';
import {languages} from "../../utils/information";
import {withTranslation} from "react-i18next";
import PropTypes from 'prop-types';
import {LanguageButton, LanguageDivider, SelectorSection} from "./LanguageSelector.styles";

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
        const { i18n, mobileMenu, currentTheme } = this.props;

        return (
            <SelectorSection mobileMenu={mobileMenu}>
                <LanguageButton theme={currentTheme} active={i18n.language === languages.pl}
                                onClick={() => this.changeLanguageFunction(languages.pl)}>
                    {languages.pl.toUpperCase()}
                </LanguageButton>
                <LanguageDivider theme={currentTheme}>{this.state.divider}</LanguageDivider>
                <LanguageButton theme={currentTheme} active={i18n.language === languages.en}
                                onClick={() => this.changeLanguageFunction(languages.en)}>
                    {languages.en.toUpperCase()}
                </LanguageButton>
            </SelectorSection>
        )
    }
}

LanguageSelector.propTypes = {
    currentTheme: PropTypes.oneOf(['dark', 'light']),
    mobileMenu: PropTypes.bool
}

LanguageSelector.defaultProps = {
    currentTheme: 'dark'
}

export default withTranslation()(LanguageSelector);
