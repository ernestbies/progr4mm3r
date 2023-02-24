import React from 'react';
import { useTranslation } from 'react-i18next';
import { FooterText, StyledFooter } from './Footer.styles';

const Footer = () => {
    const { t } = useTranslation('common');
    const MAIN_PAGE_URL = 'ernestbies.com';

    return (
        <StyledFooter>
            <FooterText>
                {`${t('appDevelopedBy')} \u00A9 ${MAIN_PAGE_URL} 2021. ${t(
                    'allRightsReserved'
                )}.`}
            </FooterText>
        </StyledFooter>
    );
};

export default Footer;
