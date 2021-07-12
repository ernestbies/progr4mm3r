import React from "react";
import {FabButton} from "./FAB.styles";
import {GrContact} from "react-icons/all";
import {useTranslation} from "react-i18next";

const FAB = () => {

    const {t} = useTranslation('common');

    return (
        <FabButton href={'#dm'}>
            <GrContact size={14} style={{marginRight: 5}}/>
            {t('contact_with_me')}
        </FabButton>
    );
};

export default FAB;
