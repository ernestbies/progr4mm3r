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
    height: 600px;
    margin: 20px;
    opacity: 0.2;
    perspective: 100px;
    user-select: none;
    scale: 0.95;
    
    &.animated {
        animation: ${revealCard} 8s forwards;
    }
    
    &:hover {
        border: 1px solid ${({color}) => color};
        scale: 1;
    }
`;

export const CardHeader = styled.div`
    flex: 2;
    margin-top: -20px;
    margin-left: -20px;
    margin-right: -20px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    background-color: #FFFFFF90;
    position: relative;    
    
    ${Card}:hover > & {
        background-color: #00000090;
    }
`;

export const CardImage = styled.img`
    width: 90px;
    height: 75px;
    margin-top: 20px;
    
    ${Card}:hover & {
        filter: invert(100%);
    }
`;

export const CardTitle = styled.p`
   font-family: Open Sans, serif;
   font-weight: 300;
   position: absolute;
   left: 0;
   right: 0;
   bottom: -5px;
   font-size: 18px;
   color: black;    
   
   ${Card}:hover & {
       color: white; 
   }
`;

export const DivWrapper = styled.div`
    margin-left: -20px;
    margin-right: -20px;
    background-color: ${({backgroundColor}) => backgroundColor};
`;

export const CardSubtitle = styled.p`
    margin: auto;
    text-align: center;
    font-size: 15px;
    color: white;
    font-family: Open Sans, serif;
    font-weight: 300;
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
`;

export const TextContent = styled.p`
    font-size: 11px;
    font-weight: 300;
    text-align: justify;
    font-family: Open Sans, serif;
    margin: 10px;
`;

export const ColoredLink = styled.a`
    font-size: 11px;
    color: orange;
    
    &:hover {
        color: orange;
    }
`;

export const ImagesContainer = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;  
`;

export const CardIcon = styled.img`
    width: 25px;
    height: 25px;
`;
