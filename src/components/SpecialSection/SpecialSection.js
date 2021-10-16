import SectionBadge from "../SectionBadge/SectionBadge";
import GlitchedText from "../GlitchedText/GlitchedText";
import React from "react";
import PropTypes from 'prop-types';
import {useTranslation} from "react-i18next";
import {SpecialSectionDiv, StyledSpecialColor, StyledSpecialText} from "./SpecialSection.styles";

const SpecialSection = ({revealInfo}) => {

    const {t} = useTranslation('common');

    return (
        <SpecialSectionDiv id={'about'}>
            <SectionBadge content={t('reveal_info')} specialNumber={0} onClick={() => revealInfo()}/>
            <StyledSpecialText>
                <StyledSpecialColor>
                    {'/ / '}
                </StyledSpecialColor>
                {t('reveal_info_text') + ' '}
                <StyledSpecialColor onClick={() => revealInfo()}>
                    {t('decrypt')}
                </StyledSpecialColor>
                {' ' + t('information') + '.'}</StyledSpecialText>
            <GlitchedText specialCharacter={'>#'} whiteText={'ENCRYPT3D INFORM4TI0N'}
                          coloredText={'[0x5]'} margin={'70px 0 0 0'}/>
        </SpecialSectionDiv>
    )
}

SpecialSection.propTypes = {
    revealInfo: PropTypes.func
}

export default SpecialSection;
