import React from 'react';
import {
    IntroHeader,
    IntroSection,
    IntroSubheader,
    IntroSubtitle,
    IntroTitle,
    IntroWrapper,
    Quote,
    StyledSource,
    StyledVideo,
    Subtitle,
} from './Intro.styles';
import { Logo } from '../Logo/Logo';
import {
    shortInfo,
    introduction,
    quoteHashtag,
} from '../../utils/data/information';
import { useTranslation } from 'react-i18next';

const Intro = () => {
    const { i18n } = useTranslation('common');

    const renderSubheader = () => {
        const subheader = shortInfo[i18n?.language];
        return subheader?.map((e, i) => (
            <IntroSubtitle key={e} color={'white'}>
                {e}
                {subheader[i + 1] ? (
                    <IntroSubtitle color={'orange'}> &middot; </IntroSubtitle>
                ) : (
                    ''
                )}
            </IntroSubtitle>
        ));
    };

    return (
        <IntroSection id={'about'}>
            <StyledVideo autoPlay muted loop>
                <StyledSource src={'/videos/intro.mp4'} type={'video/mp4'} />
            </StyledVideo>
            <IntroWrapper>
                <IntroHeader>
                    <Logo width={60} height={60} style={{ marginRight: 20 }} />
                    <IntroTitle>{'Progr4mm3r'}</IntroTitle>
                </IntroHeader>
                <IntroSubheader>{renderSubheader()}</IntroSubheader>
                <Subtitle subtitles={introduction[i18n?.language]} />
                <Quote>{quoteHashtag}</Quote>
            </IntroWrapper>
        </IntroSection>
    );
};

export default Intro;
