import SectionBadge from "../SectionBadge/SectionBadge";
import NotReleasedProject from "../NotReleasedProject/NotReleasedProject";
import React from "react";
import PropTypes from 'prop-types';
import {useTranslation} from "react-i18next";

const SpecialSection = ({revealInfo}) => {

    const {t} = useTranslation('common');

    return (
        <div id={'about'}>
            <SectionBadge content={t('reveal_info')} specialNumber={0} onClick={() => revealInfo()}/>
            <NotReleasedProject height={'150px'} backgroundColor={'black'} specialCharacter={'>#'}
                                whiteText={'ENCRYPT3D INFORM4TI0N'} coloredText={'[0x5]'}/>
        </div>
    )
}

SpecialSection.propTypes = {
    revealInfo: PropTypes.func
}

export default SpecialSection;
