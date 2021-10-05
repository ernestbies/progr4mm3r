import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import PropTypes from 'prop-types';
import './GlitchedText.styles.css';

const GlitchedText = ({specialCharacter, whiteText, coloredText, link, quote, margin}) => {

    const {t} = useTranslation('common');

    const renderGlitchEffect = (specialCharacter, whiteText, coloredText) => {
        let view = [];
        for (let i = 0; i < 3; i++) {
            view.push(
                <p key={i} className={'colored-text ' + (i % 2 === 0 ? 'glitch-text' : '')}>
                    <span style={{fontWeight: 'bold'}}>{specialCharacter} </span>
                    <span style={{color: 'white'}}>{t(whiteText)} </span>{t(coloredText)}
                </p>
            )
        }

        return view;
    }

    return (
        <div style={{margin: margin, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            {
                link ?
                    <Link style={{textDecoration: 'none'}} to={link}>
                        <div className={'colored-text glitch'}>
                            {renderGlitchEffect(specialCharacter, whiteText, coloredText)}
                        </div>
                    </Link> :
                    <div className={'colored-text glitch'} style={{userSelect: 'none'}}>
                        {renderGlitchEffect(specialCharacter, whiteText, coloredText)}
                    </div>
            }
            {
                quote &&
                <p style={{
                    fontSize: 11,
                    letterSpacing: 1.5,
                    color: 'grey',
                    userSelect: 'none',
                    textAlign: 'center',
                    whiteSpace: 'pre-wrap'
                }}>{t(quote)}</p>
            }
        </div>
    )
};

GlitchedText.propTypes = {
    specialCharacter: PropTypes.string.isRequired,
    whiteText: PropTypes.string.isRequired,
    coloredText: PropTypes.string.isRequired,
    margin: PropTypes.string,
    link: PropTypes.string,
    quote: PropTypes.string
}

export default GlitchedText;
