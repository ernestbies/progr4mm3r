import styled, {css, keyframes} from 'styled-components';

const PAGE_MAIN_COLOR = 'black';

const revealPage = keyframes`
    0% {
        width: 0;
        opacity: 0;
        overflow: hidden;
    }
    
    100% {
        width: 100%;
        opacity: 1;
        overflow: visible;
    }
`;

export const SectionWrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    
    ${({withAnimations}) => withAnimations && css`
        animation: ${revealPage} 5s ease-in-out;
    `};
`;

export const SiteContent = styled.div`
    background-color: ${PAGE_MAIN_COLOR};
    overflow-x: hidden;
    min-height: 100vh;
`;
