import styled from 'styled-components';

const PAGE_MAIN_COLOR = 'black';

export const SectionWrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
`;

export const SiteContent = styled.div`
    background-color: ${PAGE_MAIN_COLOR};
    overflow-x: hidden;
    min-height: 100vh;
`;
