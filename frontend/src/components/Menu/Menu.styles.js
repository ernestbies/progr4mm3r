import styled, {css} from 'styled-components';

export const StyledMenu = styled.ul`
    width: 50px;
    position: fixed;
    right: 0;
    top: 45%;  
    z-index: 500;  
    display: flex;
    align-items: flex-end;
    flex-direction: column;
`;

export const StyledMenuWrapper = styled.a`
    height: 100%;
    display: none;
    flex: 2;
    text-decoration: none !important;
`;

export const MenuItem = styled.li`
    width: 50px;
    height: 50px;    
    background-color: #1f1c1c;
    cursor: pointer;  
    transition: 2s all;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    
    ${({expandable}) => expandable && css`
        &:hover ${StyledMenuWrapper}{
            display: flex;
        } 
        
        &:hover {
            width: 250px;
        }
    `};
    
    &:hover {
        background-color: orange;
    }
`;

export const StyledMenuLink = styled.a`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledMenuText = styled.p`
    color: white;
    font-size: 14px;
    font-family: Blender Pro Bold, serif;
    font-weight: 300;
    line-height: 1;  
    background-image: linear-gradient(to right, orange, #FF8C00);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;  
    white-space: pre-wrap;
`;

export const StyledColoredMenuText = styled.span`
    color: blue;    
`;
