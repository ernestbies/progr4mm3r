import React from "react";
import {
    IntroHeader,
    IntroSection,
    IntroSubheader,
    IntroSubtitle,
    IntroTitle,
    IntroWrapper, Quote,
    Subtitle
} from "./Intro.styles";
import {Logo} from "../Logo/Logo";
import {WEBSITE_NAME, shortInfo, introduction} from "../../utils/information";
import {useTranslation} from "react-i18next";

const Intro = () => {

    const QUOTE = 'DefyTheLimits';
    const {i18n} = useTranslation('common');

    const renderSubheader = () => {
        const subheader = shortInfo[i18n.language];
        return subheader.map((e, i) =>
            <IntroSubtitle key={e} color={'white'}>{e}
                {subheader[i + 1] ? <IntroSubtitle color={'orange'}> &middot; </IntroSubtitle> : ''}
            </IntroSubtitle>
        );
    };

    return (
        <IntroSection>
            <IntroWrapper>
                <IntroHeader>
                    <Logo width={60} height={60} style={{marginRight: 20}}/>
                    <IntroTitle>{WEBSITE_NAME}</IntroTitle>
                </IntroHeader>
                <IntroSubheader>
                    {
                        renderSubheader()
                    }
                </IntroSubheader>
                <Subtitle subtitles={introduction[i18n.language]}/>
                <Quote>{QUOTE}</Quote>
            </IntroWrapper>
        </IntroSection>
    );
}

export default Intro;
