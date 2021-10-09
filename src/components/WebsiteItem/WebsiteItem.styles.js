import styled, {css} from 'styled-components';

export const WebsiteStyledItem = styled.a`
    width: 480px;
    height: 270px;
    background-image: url(${({websiteImage}) => websiteImage});
    background-size: contain;
    background-color: ${({backgroundColor}) => backgroundColor};
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 20px;
    cursor: pointer;
    border: 1px solid #FFA50050;
    text-decoration: none !important;
    position: relative;
    transition: 1s all;
    
    ${({direction}) => direction === 'center' && css`
        z-index: 2;
        
        &:hover {
            z-index: 4;
            transform: scale(1.25);
        }
    `}
    
    ${({direction}) => direction === 'left' && css`
        z-index: 3;    
        margin-right: -50px;    
        transform: scale(1.2);   
        
        @media (orientation: portrait) {
            margin-right: 0;
        } 
        
        &:hover {
            transform: scale(1.25);
        }
    `}
         
    ${({direction}) => direction === 'right' && css`
        z-index: 1;  
        margin-left: -80px;  
        transform: scale(0.8);    
        
        @media (orientation: portrait) {
            margin-left: 0;
        } 
                    
        &:hover {
            z-index: 5;
            transform: scale(1.25);
        }
    `}
    
     &:hover {
        box-shadow: 0 0 0 1000px rgba(0,0,0,0.88) inset;
     }
    
     @media (orientation: portrait) {
        margin: 20px;
        transform: scale(1);
        
        &:hover {
            transform: scale(1.1);
        }
     } 
     
     @media (max-width: 1440px) {
        width: 360px;
        height: 203px;
     }
     
     @media (max-width: 1100px) {
        width: 288px;
        height: 163px;
     }
     
     @media (max-width: 512px) {
        height: 200px;
     }
     
     @media (max-width: 396px) {
        height: 150px;
     }
`;

export const WebsitePin = styled.div`
    width: 100px;
    height: 40px;
    position: absolute;
    bottom: -20px;
    text-align: center;
    background-color: black;
    border-radius: 20px;
    border: 1px solid #FFA50050;
    font-family: Blender Pro Bold, serif;
    font-size: 10px;
    color: orange;
    line-height: 40px;
    text-transform: uppercase;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
`;

export const WebsiteHoverContent = styled.div`
    display: flex;  
    flex-direction: column;
    align-items: start;
 `;

export const WebsiteTitle = styled.p`
    font-family: Roboto Condensed, serif;
    font-size: 17px;
    color: white;   
    margin: 15px; 
    margin-top: 30px;
    border-left-width: 5px;
    border-left-style: solid;
    border-left-color: orange;
    padding-left: 7px;
`;

export const WebsiteDesc = styled.p`
    font-family: Roboto Condensed, serif;
    font-size: 12px;
    color: white;   
    margin: 15px; 
    font-weight: 300;
    text-align: left;
`;
