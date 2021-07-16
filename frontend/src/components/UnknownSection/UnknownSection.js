import React from "react";
import NotReleasedProject from "../NotReleasedProject/NotReleasedProject";
import {CounterSection} from "../CounterSection/CounterSection";
import {mysteryName} from "../../utils/information";

const UnknownSection = () => {
    return (
        <div id={'unknown'}>
            <NotReleasedProject
                height={'200px'}
                specialCharacter={'~'}
                whiteText={mysteryName.slice(0, 3).join(" ")}
                coloredText={mysteryName.slice(3, mysteryName.length).join(" ")}/>
            <CounterSection/>
        </div>
    )
}

export default UnknownSection;
