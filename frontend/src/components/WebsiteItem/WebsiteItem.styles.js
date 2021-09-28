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
    text-decoration: none;
    position: relative;
    
    ${({direction}) => direction === 'center' && css`
        z-index: 2;
        
        &:hover {
            transform: scale(1.1);
        }
    `}
    
    ${({direction}) => direction === 'left' && css`
        z-index: 1;    
        margin-right: -50px;    
        transform: scale(0.9);   
        
        @media (orientation: portrait) {
            margin-right: 0;  
            transform: scale(1);  
        } 
        
        &:hover {
            transform: scale(0.95);
        }
    `}
         
    ${({direction}) => direction === 'right' && css`
        z-index: 1;  
        margin-left: -50px;  
        transform: scale(0.9);    
        
        @media (orientation: portrait) {
            margin-left: 0;  
            transform: scale(1);  
        } 
        
        &:hover {
            transform: scale(0.95);
        }
    `}
    
     @media (orientation: portrait) {
        margin: 20px;
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
    
    ${({direction}) => direction === 'center' && css`
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
    `}
    
        
    ${({direction}) => direction === 'left' && css`
        left: 5px;
    `}
    
        
    ${({direction}) => direction === 'right' && css`
        right: 5px;     
    `}
    
`;
