import styled from 'styled-components';

export const StyledBox = styled.div`
    height: 350px;
    display: flex;
    flex-direction: row;
    background-color: black;
    border-top: solid 1px #FFFFFF50;
    
    @media (orientation: portrait) {
        flex-direction: column;
    }
`;

export const BoxElement = styled.div`
    flex: 1;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: black;
`;

export const ClipPathElement = styled.div`
    flex: 2;
    background-color: #111111;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    clip-path: polygon(31% 0, 100% 0, 100% 0, 100% 100%, 0 100%, 23% 55%, 3% 56%);
    
    @media (orientation: portrait) {
        flex: 1;
        clip-path: none;
    }
`;
