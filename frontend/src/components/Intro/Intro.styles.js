import styled, {keyframes} from 'styled-components';

const reveal = keyframes`
    0% {
        opacity: 0.1;
    }
    
    100% {
        opacity: 1;
    }
`;

const showSubtitles = keyframes`
    0% {
        content: "GET TO KNOW ME BETTER...";
        opacity: 0;
    }

    7% {
        content: "GET TO KNOW ME BETTER...";
        opacity: 1;
    }

    14% {
        content: "GET TO KNOW ME BETTER...";
        opacity: 0;
    }

    21% {
        content: "BROWSE MY PROJECTS...";
        opacity: 0;
    }

    28% {
        content: "BROWSE MY PROJECTS...";
        opacity: 1;
    }

    35% {
        content: "BROWSE MY PROJECTS...";
        opacity: 0;
    }

    42% {
        content: "GET TO KNOW MY SKILLS...";
        opacity: 0;
    }

    49% {
        content: "GET TO KNOW MY SKILLS...";
        opacity: 1;
    }

    56% {
        content: "GET TO KNOW MY SKILLS...";
        opacity: 0;
    }

    63% {
        content: "FIND ABOUT MY INTERESTS...";
        opacity: 0;
    }

    70% {
        content: "FIND ABOUT MY INTERESTS...";
        opacity: 1;
    }

    77% {
        content: "FIND ABOUT MY INTERESTS...";
        opacity: 0;
    }

    84% {
        content: "... AND CONTACT WITH ME";
        opacity: 0;
    }

    91% {
        content: "... AND CONTACT WITH ME";
        opacity: 1;
    }

    100% {
        content: "... AND CONTACT WITH ME";
        opacity: 0;
    }
`;

export const IntroWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    @media (max-width: 480px) {
        scale: 0.6;
    }
`;

export const IntroSection = styled.div`
    height: 550px;
    display: flex;
    justify-content: center;
    background-color: #000;
    border-bottom-color: orange;
    border-bottom-style: solid;
    border-bottom-width: 1px;
`;

export const IntroHeader = styled.div`
    display: flex;
    flex-direction: row;
    opacity: 0.1;
    animation: ${reveal} 5s forwards;
    margin-top: 100px;
`;

export const IntroSubheader = styled.div`
    display: flex;
    flex-direction: row;
    animation-delay: 2s;
    opacity: 0.1;
    animation: ${reveal} 5s forwards;
    animation-delay: 2s;
`;

export const IntroTitle = styled.p`
    font-size: 60px;
    font-family: 'Blender Pro Bold', serif; 
    color: white;
    margin-top: -20px;
`;

export const IntroSubtitle = styled.span`
    font-size: 20px;
    font-family: 'Blender Pro Bold', serif; 
    color: ${({color}) => color};
    white-space: pre;
    margin-bottom: 80px;
`;

export const Subtitle = styled.p`
    font-size: 18px;
    font-family: 'Blender Pro Bold', serif; 
    color: silver;
    height: 15px;
    
    &:before {
        content: "";
        animation: ${showSubtitles} 25s infinite ease-in-out;
        animation-delay: 3s;
    }
`;

const changeColor = keyframes`
    0% {
        color: silver;
        scale: 1;
    }
    
    50% {
        color: #4169E1;
        scale: 1.05;
    }
    
    100% {
        color: silver;
        scale: 1;
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
    animation: ${reveal} 5s forwards, ${changeColor} 5s ease-in-out infinite;

    &:before {
        content: '#';
    }
`;
