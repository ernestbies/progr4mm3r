import React from "react";
import GlitchedText from "../GlitchedText/GlitchedText";
import {NOT_RELEASED_PROJECT} from "../../utils/information";
import {BoxElement, ClipPathElement, StyledBox} from "./NotReleasedProject.styles";

const NotReleasedProject = () => {
    return (<StyledBox>
        <BoxElement>
            <GlitchedText backgroundColor={'#171616'}
                          specialCharacter={'~'}
                          whiteText={'click here to'}
                          coloredText={'cd todo'}
                          link={'/not-released-yet'}
                          quote={'SOMETHING WILL BE HERE SOMEDAY // CURRENTLY 404 PAGE'}
            />
        </BoxElement>
        <ClipPathElement>
            <GlitchedText specialCharacter={'~'}
                          whiteText={'click_here_to'}
                          coloredText={'cd ' + NOT_RELEASED_PROJECT}
                          link={'/hall-of-fame'}
                          quote={'OFFICIAL ERNESTBIES.COM HALL OF FAME SITE'}
            />
        </ClipPathElement>
    </StyledBox>);
};

export default NotReleasedProject;
