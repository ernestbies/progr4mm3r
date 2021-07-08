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
import {WEBSITE_NAME, shortInfo} from "../../utils/information";

const Intro = () => {

    const QUOTE = 'DefyTheLimits';

    const renderSubheader = () => {
        return shortInfo.map((e, i) =>
            <IntroSubtitle key={e} color={'white'}>{e}
                {shortInfo[i + 1] ? <IntroSubtitle color={'orange'}> &middot; </IntroSubtitle> : ''}
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
                <Subtitle/>
                <Quote>{QUOTE}</Quote>
            </IntroWrapper>
        </IntroSection>
    );
}

export default Intro;
