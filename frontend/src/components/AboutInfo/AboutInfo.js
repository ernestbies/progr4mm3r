import {info} from "../../utils/information";
import React from "react";
import {useTranslation} from "react-i18next";
import {ColoredText, InfoHeader, InfoSection, InfoText, StyledParagraph} from "./AboutInfo.styles";
import CustomCaret from "../CustomCaret/CustomCaret";

export const infoTypes = {
    header: 'ernest',
    connector: '@',
    sections: {
        info: 'info',
        cv: 'cv',
        sys: 'sys'
    }
};

const AboutInfo = () => {

    const {t, i18n} = useTranslation('common');
    const infoPhases = {
        loading: {
            header: ' [LOADING INFO] ',
            color: '#4169E1',
            text: 'Revealing information...'
        },
        loaded: {
            header: ' [INFO LOADED] ',
            color: '#32CD32',
            text: 'Information successfully revealed. '
        }
    }

    return (
        <StyledParagraph>
            <InfoSection consoleText>
                <InfoHeader headerType={infoTypes.sections.sys}/>
                <ColoredText fontWeight={'bold'} color={infoPhases.loading.color}>{infoPhases.loading.header}</ColoredText>
                <InfoText>{infoPhases.loading.text}</InfoText>
            </InfoSection>

            <InfoSection>
                <InfoHeader headerType={infoTypes.sections.info}/>
                <InfoText> {info[i18n.language].text}</InfoText>
            </InfoSection>

            <InfoSection>
                <InfoHeader headerType={infoTypes.sections.cv}/>
                <InfoText> {t('web_info_text')}
                    <ColoredText> {t('my_person')}</ColoredText> {t('and2')} {t('see')}
                    <ColoredText> {t('my_projects')}</ColoredText>{'.'} {t('web_info_text2')}
                </InfoText>
            </InfoSection>

            <InfoSection consoleText>
                <InfoHeader headerType={infoTypes.sections.sys}/>
                <InfoText typingAnimation>
                    <ColoredText fontWeight={'bold'} color={infoPhases.loaded.color}>{infoPhases.loaded.header}</ColoredText>
                    {infoPhases.loaded.text} <CustomCaret/>
                </InfoText>
            </InfoSection>
        </StyledParagraph>
    )
};

export default AboutInfo;
