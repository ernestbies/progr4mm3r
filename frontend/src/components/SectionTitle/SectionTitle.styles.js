import styled, {css} from 'styled-components';

export const TextWrapper = styled.div`
    display: flex;
    justify-content: ${({position}) => position ?? 'center'};
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
    height: ${({height}) => height + 'px'};
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
    height: 45px;
    background-color: ${({backgroundColor}) => backgroundColor ?? 'orange'};
    margin-bottom: 25px;
    position: relative;
    margin-top: -10px;
    ${({position}) => position === 'start' ? css`
        margin-left: 50px; 
    ` : position === 'end' ? css`
        margin-right: 50px;
    ` : ``}
`;
