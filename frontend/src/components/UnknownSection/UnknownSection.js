import React from "react";
import NotReleasedProject from "../NotReleasedProject/NotReleasedProject";
import {CounterSection} from "../CounterSection/CounterSection";

const UnknownSection = () => {
    return (
        <div id={'unknown'}>
            <NotReleasedProject height={'200px'} specialCharacter={'~'} whiteText={'powered by'} coloredText={'tsl1337'}/>
            <CounterSection/>
        </div>
    )
}

export default UnknownSection;
