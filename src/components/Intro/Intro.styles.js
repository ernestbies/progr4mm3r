import styled, { keyframes } from 'styled-components';

const reveal = keyframes`
    0% {
        opacity: 0.1;
    }
    
    100% {
        opacity: 1;
    }
`;

const showSubtitles = (subtitles) => keyframes`
    0% {
        content: "${subtitles?.about}";
        opacity: 0;
    }

    7% {
        content: "${subtitles?.about}";
        opacity: 1;
    }

    14% {
        content: "${subtitles?.about}";
        opacity: 0;
    }

    21% {
        content: "${subtitles?.projects}";
        opacity: 0;
    }

    28% {
        content: "${subtitles?.projects}";
        opacity: 1;
    }

    35% {
        content: "${subtitles?.projects}";
        opacity: 0;
    }

    42% {
        content: "${subtitles?.skills}";
        opacity: 0;
    }

    49% {
        content: "${subtitles?.skills}";
        opacity: 1;
    }

    56% {
        content: "${subtitles?.skills}";
        opacity: 0;
    }

    63% {
        content: "${subtitles?.hobby}";
        opacity: 0;
    }

    70% {
        content: "${subtitles?.hobby}";
        opacity: 1;
    }

    77% {
        content: "${subtitles?.hobby}";
        opacity: 0;
    }

    84% {
        content: "${subtitles?.contact}";
        opacity: 0;
    }

    91% {
        content: "${subtitles?.contact}";
        opacity: 1;
    }

    100% {
        content: "${subtitles?.contact}";
        opacity: 0;
    }
`;

const changeColor = keyframes`
    0% {
        color: silver;
        transform: scale(1);
    }
    
    50% {
        color: #4169E1;
        transform: scale(1.05);
    }
    
    100% {
        color: silver;
        transform: scale(1);
    }
`;

export const IntroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 0;
    top: 80px;
    width: 100%;
    height: 100%;

    @media (max-width: 480px) {
        transform: scale(0.6);
    }
`;

export const IntroSection = styled.div`
    height: 650px;
    display: flex;
    justify-content: center;
    background-color: #000;
    border-bottom-color: orange;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    position: relative;
`;

export const StyledVideo = styled.video`
    height: 100%;
    width: 100%;
    filter: brightness(40%);

    @media (max-width: 720px) {
        width: inherit;
        height: 500px;
    }
`;

export const StyledSource = styled.source``;

export const IntroHeader = styled.div`
    display: flex;
    flex-direction: row;
    opacity: 0.1;
    animation: ${reveal} 5s forwards;
    margin-top: 100px;
    justify-content: center;
    align-items: center;
`;

export const IntroSubheader = styled.div`
    display: flex;
    flex-direction: row;
    animation-delay: 2s;
    opacity: 0.1;
    animation: ${reveal} 5s forwards;
    animation-delay: 2s;
    margin-top: 16px;
`;

export const IntroTitle = styled.p`
    font-size: 60px;
    font-family: 'Blender Pro Bold', serif;
    color: white;
    margin-bottom: 0px;

    @media (max-width: 360px) {
        font-size: 50px;
    }
`;

export const IntroSubtitle = styled.span`
    font-size: 20px;
    font-family: 'Blender Pro Bold', serif;
    color: ${({ color }) => color};
    white-space: pre;
    margin-bottom: 80px;
`;

export const Subtitle = styled.p`
    font-size: 18px;
    font-family: 'Blender Pro Bold', serif;
    color: silver;
    height: 15px;

    &:before {
        content: '';
        animation: ${({ subtitles }) => showSubtitles(subtitles)} 25s infinite
            ease-in-out;
        animation-delay: 3s;
    }
`;

export const Quote = styled.p`
    user-select: none;
    font-size: 15px;
    font-family: 'Roboto Condensed', serif;
    color: white;
    height: 15px;
    letter-spacing: 1px;
    margin-top: 60px;
    animation:
        ${reveal} 5s forwards,
        ${changeColor} 5s ease-in-out infinite;

    &:before {
        content: '#';
    }
`;
