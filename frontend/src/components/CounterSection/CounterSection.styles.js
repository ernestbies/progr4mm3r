import styled, {keyframes} from "styled-components";

export const CounterSectionDiv = styled.div`
    display: flex;
    height: 400px;
    background-color: black;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-position: top;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    width: 100%;
    background-image: url(images/wallpaper6.jpg);
`;

export const BackgroundWrapper = styled.div`
    background-color: #00000099;
    height: 100%;  
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const moveLetters = [keyframes`
    0% {
        opacity: 1;
    }
    
    50% {
        margin-top: 200px;
        opacity: 0;
    }
    
    75% {
        margin-top: 0;
        opacity: 1;
    }
    
    100% {
        margin-bottom: 200px;
        opacity: 0;
    }
`,
    keyframes`
    0% {
        opacity: 1;
    }
    
    50% {
        margin-bottom: 200px;
        opacity: 0;
    }
    
    75% {
        margin-bottom: 0;
        opacity: 1;
    }
    
    100% {
        margin-top: 200px;
        opacity: 0;
    }
`,
    keyframes`
    0% {
        opacity: 1;
    }
    
    50% {
        margin-bottom: 200px;
        opacity: 0;
    }
    
    75% {
        margin-bottom: 0;
        opacity: 1;
    }
    
    100% {
        margin-top: 200px;
        opacity: 0;
    }
`,
    keyframes`
    0% {
        opacity: 1;
    }
    
    50% {
        margin-top: 200px;
        opacity: 0;
    }
    
    75% {
        margin-top: 0;
        opacity: 1;
    }
    
    100% {
        margin-bottom: 200px;
        opacity: 0;
    }
`];

export const SingleCharacter = styled.p`
    color: orange; 
    font-size: 30px;
    -webkit-text-stroke: 1px #000000;
    animation: ${({pos}) => moveLetters[pos]} 10s infinite;
    &:after {
        content: "${({character}) => character}";
    }
`;
