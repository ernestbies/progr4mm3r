import styled from 'styled-components';

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
`;

export const CardImage = styled.img`
    width: 90px;
    height: 75px;
    margin-top: 20px;
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
    flex: 6;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    margin-right: -20px;
    margin-left: -20px;
    margin-bottom: -20px;
    background-color: rgba(0,0,0,0.7);
    position: relative;  
`;

export const ColoredLinkWrapper = styled.p`
    font-size: 11px;
    font-weight: 300;
    text-align: justify;
    font-family: Open Sans, serif;
    margin: 10px;
`;

export const ColoredLink = styled.a`
    font-size: 11px;
    color: orange;
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
