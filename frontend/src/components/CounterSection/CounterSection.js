import React from "react";
import {BackgroundWrapper, CounterSectionDiv, SingleCharacter} from "./CounterSection.styles";
import CounterComponent from "../CounterComponent/CounterComponent";
import {mystery} from "../../utils/information";

export const CounterSection = () => {

    return (
        <CounterSectionDiv>
            <BackgroundWrapper>
                <SingleCharacter character={mystery[0]} pos={0}/>
                <SingleCharacter character={mystery[1]} pos={1}/>
                <CounterComponent/>
                <SingleCharacter character={[mystery[2]]} pos={2}/>
                <SingleCharacter character={[mystery[3]]} pos={3}/>
            </BackgroundWrapper>
        </CounterSectionDiv>
    )
}
