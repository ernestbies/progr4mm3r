import React from "react";
import NotReleasedProject from "../../components/NotReleasedProject/NotReleasedProject";
import {NOT_RELEASED_PROJECT} from "../../utils/information";
import {CounterSection} from "../../components/CounterSection/CounterSection";

const Other = () => {
    return (
        <div id={'other'}>
            <NotReleasedProject projectName={NOT_RELEASED_PROJECT}/>
            <CounterSection/>
        </div>
    )
}

export default Other;
