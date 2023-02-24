import React from 'react';
import GlitchedText from '../GlitchedText/GlitchedText';
import {
    BoxElement,
    ClipPathElement,
    StyledBox,
} from './NotReleasedProject.styles';

const NotReleasedProject = () => {
    return (
        <StyledBox>
            <BoxElement>
                <GlitchedText
                    specialCharacter={'~'}
                    whiteText={'click_here_to'}
                    coloredText={'cd ernestbies.com'}
                    href={'https://ernestbies.com'}
                    quote={'my-website'}
                />
            </BoxElement>
            <ClipPathElement>
                <GlitchedText
                    backgroundColor={'#171616'}
                    specialCharacter={'~'}
                    whiteText={'click_here_to'}
                    coloredText={'cd todo'}
                    link={'/not-released-yet'}
                    quote={'quote_not_released_project'}
                />
            </ClipPathElement>
        </StyledBox>
    );
};

export default NotReleasedProject;
