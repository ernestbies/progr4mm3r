import styled, {keyframes} from "styled-components";

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

const MysteryCharacter = styled.p`
    color: orange; 
    font-size: 30px;
    -webkit-text-stroke: 1px #000000;
    animation: ${({pos}) => moveLetters[pos]} 10s infinite;
    
    &:after {
        content: "${({character}) => character}";
    }
`;

export default MysteryCharacter;
