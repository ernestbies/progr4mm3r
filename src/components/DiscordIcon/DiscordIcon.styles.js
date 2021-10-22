import styled from "styled-components";

export const DiscordIconWrapper = styled.div`
    width: 75px;
    height: 75px;    
    margin: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid #696969;
    background-image: linear-gradient(#5c64f3, #5c64f3);
    background-repeat: no-repeat;
    background-size: 0% 100%;
    transition: 1s all ease-in-out; 
    cursor: pointer;
    
    &:hover {
        background-size: 100% 100%;
    }
    
    @media (max-width: 596px) {
        transform: scale(0.8);
        margin: 0;
    }
    
    @media (max-width: 480px) {
        transform: scale(0.6);
    }
`;
