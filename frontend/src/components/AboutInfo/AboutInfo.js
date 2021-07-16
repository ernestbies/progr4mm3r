import {info} from "../../utils/information";
import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {AboutInfoContent, ColoredText, InfoHeader, InfoSection, InfoText} from "./AboutInfo.styles";
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

    let textPosition = 0;

    useEffect(() => {
        typeWriter();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [caretVisible, setCaretVisible] = useState(false);

    const typeWriter = () => {
        let consoleText = document.getElementById('console-info');
        let information = infoPhases.loaded.text;
        let typingSpeed = 200;
        if (textPosition < information.length) {
            consoleText.innerHTML += information.charAt(textPosition);
            textPosition++;
            setTimeout(typeWriter, typingSpeed);
        } else if (textPosition === information.length) {
            setCaretVisible(true);
        }
    }

    return (
        <AboutInfoContent>
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
                <InfoText>
                    <ColoredText fontWeight={'bold'} color={infoPhases.loaded.color}>{infoPhases.loaded.header}</ColoredText>
                    <InfoText id={'console-info'}/> <CustomCaret visible={caretVisible}/>
                </InfoText>
            </InfoSection>
        </AboutInfoContent>
    )
};

export default AboutInfo;
