import styled, {css} from 'styled-components';

export const BadgeWrapper = styled.div`
    display: flex;
    justify-content: ${({position}) => position ?? 'center'};

    ${({absolute}) => absolute && css`
        position: absolute;
        right: 0;
        z-index: 1;
    `}
    
    @media (max-width: 480px) {
        justify-content: center !important;
        
        ${({absolute}) => absolute && css`
            left: 0;
        `}
    }
`;

export const StyledText = styled.span`
    color: ${({fontColor}) => fontColor ?? 'black'};
    display: inline;
    font-family: 'Blender Pro Bold', serif; 
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 2px;
`;

export const Subtitle = styled.span`
    position: absolute;
    font-family: 'Blender Pro Bold', serif; 
    text-transform: uppercase;
    color: black;
    font-size: 9px;
    letter-spacing: 2px;
    top: 0;
    right: 0;
    
    ${({subtitle}) => subtitle && css`
        &:before {
            content: "> ";
            font-family: 'Open Sans', serif;
            font-weight: bold;
            color: black;
        }
    `}
`;

export const Sign = styled.div`
    width: ${({width}) => width ?? '40'}px;
    color: ${({signFontColor}) => signFontColor ?? 'orange'};
    font-size: 8px;
    text-align: center;
    background-color: ${({signColor}) => signColor ?? 'black'};
    position: absolute;
    ${({position}) => position && css`${position}`}
`;

export const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    width: ${({width}) => width > 10 ? '300px' : '220px'};
    background-color: ${({backgroundColor}) => backgroundColor};
    height: 45px;
    margin-bottom: 25px;
    position: relative;
    margin-top: -10px;
    border-right-style: solid;
    border-right-width: 4px;
    border-right-color: #00000070;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 20%, 100% 100%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
    clip-path: polygon(0 0, 100% 0, 100% 30%, 100% 100%, 0 100%, 7% 100%, 0% 70%, 0% 30%);
    transition: background-color 0.8s ease-in-out;
   
    
    ${({onClick}) => onClick && css`
        cursor: pointer;    
        
        &:hover {
            background-color: white;
        }
    `}
    
    ${({position}) => position === 'start' ? css`
        margin-left: 50px; 
    ` : position === 'end' ? css`
        margin-right: 50px;
    ` : ``}
    
    
    @media (max-width: 480px) {
        margin: -10px 0 50px 0;
    }
`;
