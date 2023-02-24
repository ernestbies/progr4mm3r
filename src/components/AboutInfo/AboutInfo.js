import { info, infoTypes } from '../../utils/data/information';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    AboutInfoContent,
    ColoredText,
    InfoHeader,
    InfoSection,
    InfoText,
} from './AboutInfo.styles';
import CustomCaret from '../CustomCaret/CustomCaret';

const AboutInfo = () => {
    const { t, i18n } = useTranslation('common');

    const infoPhases = {
        loading: {
            header: ' <info@LOADING> ',
            color: '#4169E1',
            text: t('revealing_info'),
        },
        loaded: {
            header: ' <info@LOADED> ',
            color: '#4682B4',
            text: t('revealing_info_success'),
        },
    };

    let textPosition = 0;
    let timeout;

    useEffect(() => {
        let consoleText = document.getElementById('console-info');
        consoleText.innerHTML = '';
        typeWriter();
        return () => {
            clearInterval(timeout);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [i18n.language]);

    const [caretVisible, setCaretVisible] = useState(false);

    const typeWriter = () => {
        let consoleText = document.getElementById('console-info');
        let information = infoPhases.loaded.text;
        let typingSpeed = 200;
        if (textPosition < information.length) {
            consoleText.innerHTML += information.charAt(textPosition);
            textPosition++;
            timeout = setTimeout(typeWriter, typingSpeed);
        } else if (textPosition === information.length) {
            setCaretVisible(true);
        }
    };

    return (
        <AboutInfoContent>
            <InfoSection consoleText>
                <InfoHeader headerType={infoTypes.sections.sys} />
                <ColoredText
                    fontWeight={'bold'}
                    color={infoPhases.loading.color}
                >
                    {infoPhases.loading.header}
                </ColoredText>
                <InfoText>{infoPhases.loading.text}</InfoText>
            </InfoSection>

            <InfoSection>
                <InfoHeader headerType={infoTypes.sections.info} />
                <InfoText> {info[i18n.language].text}</InfoText>
            </InfoSection>

            <InfoSection>
                <InfoHeader headerType={infoTypes.sections.cv} />
                <InfoText>
                    {' '}
                    {t('web_info_text')}
                    <ColoredText> {t('my_person')}</ColoredText> {t('and2')}{' '}
                    {t('see')}
                    <ColoredText> {t('my_projects')}</ColoredText>
                    {'.'} {t('web_info_text2')}
                </InfoText>
            </InfoSection>

            <InfoSection consoleText>
                <InfoHeader headerType={infoTypes.sections.sys} />
                <InfoText>
                    <ColoredText
                        fontWeight={'bold'}
                        color={infoPhases.loaded.color}
                    >
                        {infoPhases.loaded.header}
                    </ColoredText>
                    <InfoText id={'console-info'} />{' '}
                    <CustomCaret visible={caretVisible} />
                </InfoText>
            </InfoSection>
        </AboutInfoContent>
    );
};

export default AboutInfo;
