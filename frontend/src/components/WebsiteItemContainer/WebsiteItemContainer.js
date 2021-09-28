import styled from 'styled-components';

const WebsiteItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 50px;
    
    @media (orientation: portrait) {
        flex-wrap: wrap; 
    } 
`;

export default WebsiteItemContainer;
