import styled, {keyframes} from 'styled-components';

const changeBorder = keyframes`
    0% {
        border-color: orange;
        border-width: 2px;
    }
    
    50% {
        border-color: #9932CC;
    }
    
    100% {
        border-color: orange;
    }
`;
export const CounterElement = styled.div`
    width: 300px;
    height: 300px;
    background-color: #00000099;
    user-select: none;
    margin-top: 10px;
    font-size: 14px;
    white-space: pre-wrap;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-style: solid;
    border-color: orange;
    border-width: 1px;
    font-family: Source Code Pro, serif;
    font-weight: 300;
    
    &:active {
        animation: ${changeBorder} 5s infinite;
    }
`;
