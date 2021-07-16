import {StyledCode, StyledSpan, TextBlock, TextWrapper} from "./AchievementsBlock.styles";
import React, {useEffect, useState} from "react";

const AchievementsBlock = ({items}) => {

    const achievementsTypes = {
        it: 'block',
        eSport: 'none'
    };

    const achievementsStatus = {
        it_active: {
            it: 'block',
            eSport: 'none'
        },
        eSport_active: {
            it: 'none',
            eSport: 'block'
        }
    };

    const [achievementDisplayMode, setAchievementDisplayMode] = useState(achievementsTypes);

    useEffect(() => {
        let interval = setInterval(changeAchievements, 10000);

        return () => {
            clearInterval(interval);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [achievementDisplayMode]);

    const changeAchievements = () => {
        if(achievementDisplayMode.it === 'block') {
            setAchievementDisplayMode(achievementsStatus.eSport_active);
        } else {
            setAchievementDisplayMode(achievementsStatus.it_active);
        }
    };

    const generateText = (itemList, id, display) => {
        const items = itemList.map(el =>
            <StyledCode key={el}><StyledSpan>{'// '}</StyledSpan>{el}</StyledCode>
        );

        return <TextWrapper id={id} display={display}>{items}</TextWrapper>
    };

    return (
        <TextBlock>
            {generateText(items.it, 'it', achievementDisplayMode.it)}
            {generateText(items.eSport, 'e-sports', achievementDisplayMode.eSport)}
        </TextBlock>
    );
};

export default AchievementsBlock;
