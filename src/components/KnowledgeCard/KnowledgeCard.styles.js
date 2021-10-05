import styled, {keyframes} from 'styled-components';

const revealCard = keyframes`
    0% {
        opacity: 0.2;
        transform: rotateY(-180deg);
    }

    100% {
        opacity: 1;
        transform: rotateY(0deg);
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    border: 1px solid #FFFFFF90;
    background: transparent;
    padding: 20px;
    width: 330px;
    height: 280px;
    margin: 20px;
    opacity: 0.2;
    perspective: 100px;
    user-select: none;
    
    &.animated {
        animation: ${revealCard} 8s forwards;
    }
    
    &:hover {
        border: 1px solid ${({color}) => color};
    }
`;

export const CardHeader = styled.div`
    flex: 2;
    margin-top: -20px;
    margin-left: -20px;
    margin-right: -20px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    background-color: #FFFFFF60;
    position: relative;  
    background-color: #00000090;  
`;

export const CardImage = styled.img`
    width: 80px;
    height: 70px;
    margin-top: 30px;
    margin-bottom: 30px;
    filter: invert(100%);
`;

export const DivWrapper = styled.div`
    margin-left: -20px;
    margin-right: -20px;
    background-image: linear-gradient(to right, black, ${({backgroundColor}) => backgroundColor}, black);
    height: 40px;
`;

export const CardTitle = styled.p`
    margin: auto;
    text-align: center;
    font-size: 15px;
    line-height: 40px;
    color: white;
    font-family: Blender Pro Bold, serif;
    letter-spacing: 1px;
`;

export const CardContent = styled.div`
    color: white;
    flex: 6;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    margin-right: -20px;
    margin-left: -20px;
    margin-bottom: -20px;
    background-color: rgba(0,0,0,0.7);
    position: relative;  
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImagesContainer = styled.div`
    height: 30px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly; 
`;

export const CardIcon = styled.img`
    width: 25px;
    height: 25px;
`;
