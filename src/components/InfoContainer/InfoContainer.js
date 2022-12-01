import { useTranslation } from 'react-i18next';
import { MAIN_PAGE_URL } from '../../utils/data/constants';
import {
    InfoText,
    InfoTextBold,
    StyledInfoContainer,
} from './InfoContainer.styles';

const InfoContainer = () => {
    const { t } = useTranslation('common');

    return (
        <StyledInfoContainer>
            <InfoText>
                <InfoTextBold>{t('important')}</InfoTextBold>
                {t('pageInfo')}
                <InfoTextBold>{MAIN_PAGE_URL}</InfoTextBold>
            </InfoText>
        </StyledInfoContainer>
    );
};

export default InfoContainer;
