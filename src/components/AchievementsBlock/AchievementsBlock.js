import {
    StyledCode,
    StyledSpan,
    TextBlock,
    TextWrapper,
} from './AchievementsBlock.styles';
import React, { useEffect, useState } from 'react';

const AchievementsBlock = ({ items }) => {
    const achievementsTypes = {
        firstSection: 'block',
        secondSection: 'none',
    };

    const achievementsStatus = {
        firstSection_active: {
            firstSection: 'block',
            secondSection: 'none',
        },
        secondSection_active: {
            firstSection: 'none',
            secondSection: 'block',
        },
    };

    const [achievementDisplayMode, setAchievementDisplayMode] =
        useState(achievementsTypes);

    useEffect(() => {
        let interval = setInterval(changeAchievements, 10000);

        return () => {
            clearInterval(interval);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [achievementDisplayMode]);

    const changeAchievements = () => {
        if (achievementDisplayMode.firstSection === 'block') {
            setAchievementDisplayMode(achievementsStatus.secondSection_active);
        } else {
            setAchievementDisplayMode(achievementsStatus.firstSection_active);
        }
    };

    const generateText = (itemList, id, display) => {
        const items = itemList.map((el) => (
            <StyledCode key={el}>
                <StyledSpan>{'// '}</StyledSpan>
                {el}
            </StyledCode>
        ));

        return (
            <TextWrapper id={id} display={display}>
                {items}
            </TextWrapper>
        );
    };

    return (
        <TextBlock>
            {generateText(
                items.firstSection,
                'firstSection',
                achievementDisplayMode.firstSection
            )}
            {generateText(
                items.secondSection,
                'secendSection',
                achievementDisplayMode.secondSection
            )}
        </TextBlock>
    );
};

export default AchievementsBlock;
