import styled, {css} from 'styled-components';

export const StyledLogo = styled.img`
    width: ${({width}) => (width+'px')};    
    width: ${({height}) => (height+'px')};    
    ${props => props.lightMode && css`
        filter: invert(100%) hue-rotate(120deg);
    `}
`;
