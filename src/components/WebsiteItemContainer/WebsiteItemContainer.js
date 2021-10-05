import styled from 'styled-components';

const WebsiteItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding-top: 30px;
    padding-bottom: 50px;
    
    @media (orientation: portrait) {
        flex-wrap: wrap; 
    } 
`;

export default WebsiteItemContainer;
