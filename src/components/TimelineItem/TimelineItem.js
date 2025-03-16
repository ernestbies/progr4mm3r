import styled from 'styled-components';

const TimelineItem = styled.div`
    display: flex;
    justify-content: center;
    height: 80px;

    @media (max-width: 1024px) {
        height: 100px;
    }
`;

export default TimelineItem;
