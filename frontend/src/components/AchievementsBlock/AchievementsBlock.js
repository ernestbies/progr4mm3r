import {StyledCode, StyledSpan, TextBlock} from "./AchievementsBlock.styles";
import React from "react";

const AchievementsBlock = ({items}) => {

    const generateText = () => {
        return items.map(el =>
            <><StyledCode key={el}><StyledSpan>{'// '}</StyledSpan>{el}</StyledCode><br/></>
        );
    }

    return (
        <TextBlock>{generateText()}</TextBlock>
    );
};

export default AchievementsBlock;
