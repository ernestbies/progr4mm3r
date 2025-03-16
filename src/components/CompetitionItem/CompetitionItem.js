import { faAward } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AiFillWindows } from 'react-icons/ai';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import { FcLinux } from 'react-icons/fc';
import {
    AwardIcon,
    BottomItem,
    CompetitionIcon,
    CompetitionInfo,
    CompetitionSubtitle,
    CompetitionTitle,
    IconTechWrapper,
    IconWrapper,
    Line,
    LinksBlock,
    ProjectDesc,
    ProjectImage,
    ProjectImageWrapper,
    ProjectInfo,
    ProjectTitle,
    StyledCompetitionItem,
    StyledIcon,
} from './CompetitionItem.styles';

const CompetitionItem = ({
    name,
    image,
    description,
    competition,
    links,
    technologies,
    order,
}) => {
    const { i18n } = useTranslation('common');

    const iconStyle = {
        width: 25,
        height: 25,
    };

    const renderLinksBlock = () => {
        return links.map((e, index) => {
            return e.name === 'Github' ? (
                <IconWrapper
                    key={index}
                    href={e.url}
                    target={'_blank'}
                    rel={'noreferrer'}
                    color={e.color}
                >
                    <FaGithub color={'white'} style={iconStyle} />
                </IconWrapper>
            ) : e.name === 'Youtube' ? (
                <IconWrapper
                    key={index}
                    href={e.url}
                    target={'_blank'}
                    rel={'noreferrer'}
                    color={e.color}
                >
                    <FaYoutube color={'red'} style={iconStyle} />
                </IconWrapper>
            ) : (
                <IconWrapper
                    key={index}
                    href={e.url}
                    target={'_blank'}
                    rel={'noreferrer'}
                    color={e.color}
                >
                    <StyledIcon src={e.image} />
                </IconWrapper>
            );
        });
    };

    const renderTechnologiesBlock = () => {
        return technologies.map((e, index) => {
            return e.name.includes('Windows') ? (
                <IconTechWrapper title={e.name} key={index}>
                    <AiFillWindows size={25} />
                </IconTechWrapper>
            ) : e.name.includes('Linux') ? (
                <IconTechWrapper title={e.name} key={index}>
                    <FcLinux size={25} />
                </IconTechWrapper>
            ) : (
                <IconTechWrapper title={e.name} key={index}>
                    <StyledIcon src={e.logo} />
                </IconTechWrapper>
            );
        });
    };

    return (
        <StyledCompetitionItem>
            <ProjectImageWrapper order={order}>
                <ProjectImage image={image} />
            </ProjectImageWrapper>
            <ProjectInfo order={order}>
                <ProjectTitle>{name}</ProjectTitle>
                <CompetitionInfo>
                    <CompetitionIcon src={competition.image} />
                    <CompetitionTitle>{competition.name}</CompetitionTitle>
                </CompetitionInfo>
                <CompetitionInfo>
                    <AwardIcon icon={faAward} />
                    <CompetitionSubtitle>
                        {competition.text[i18n.language]}
                    </CompetitionSubtitle>
                </CompetitionInfo>
                <ProjectDesc>{description[i18n.language]}</ProjectDesc>
                <BottomItem>
                    <LinksBlock>{renderLinksBlock()}</LinksBlock>
                    <Line />
                    <LinksBlock>{renderTechnologiesBlock()}</LinksBlock>
                </BottomItem>
            </ProjectInfo>
        </StyledCompetitionItem>
    );
};

export default CompetitionItem;
