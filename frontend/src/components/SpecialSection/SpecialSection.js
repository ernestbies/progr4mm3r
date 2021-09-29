import SectionBadge from "../SectionBadge/SectionBadge";
import GlitchedText from "../GlitchedText/GlitchedText";
import React from "react";
import PropTypes from 'prop-types';
import {useTranslation} from "react-i18next";

const SpecialSection = ({revealInfo}) => {

    const {t} = useTranslation('common');

    return (
        <div id={'about'} style={{height: 300}}>
            <SectionBadge content={t('reveal_info')} specialNumber={0} onClick={() => revealInfo()}/>
            <GlitchedText specialCharacter={'>#'} whiteText={'ENCRYPT3D INFORM4TI0N'}
                          coloredText={'[0x5]'} margin={'100px 0 0 0'}/>
        </div>
    )
}

SpecialSection.propTypes = {
    revealInfo: PropTypes.func
}

export default SpecialSection;
