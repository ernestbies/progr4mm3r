import React from "react";
import GlitchedText from "../GlitchedText/GlitchedText";
import {NOT_RELEASED_PROJECT} from "../../utils/information";
import {BoxElement, ClipPathElement, StyledBox} from "./NotReleasedProject.styles";

const NotReleasedProject = () => {

    return (<StyledBox>
        <BoxElement>
            <GlitchedText specialCharacter={'~'}
                          whiteText={'click_here_to'}
                          coloredText={'cd ' + NOT_RELEASED_PROJECT}
                          link={'/hall-of-fame'}
                          quote={'quote_hall_of_fame'}
            />
        </BoxElement>
        <ClipPathElement>
            <GlitchedText backgroundColor={'#171616'}
                          specialCharacter={'~'}
                          whiteText={'click_here_to'}
                          coloredText={'cd todo'}
                          link={'/not-released-yet'}
                          quote={'quote_not_released_project'}
            />
        </ClipPathElement>
    </StyledBox>);
};

export default NotReleasedProject;
