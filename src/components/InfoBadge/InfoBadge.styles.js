import styled from 'styled-components';

export const BadgeItem = styled.div`
    background-color: orange;
    width: 100px;
    height: 20px;
    position: absolute;
    right: 0;
    bottom: -20px;  
    display: flex;
    justify-content: center;
    align-items: center;
    clip-path: polygon(0 1%, 100% 0, 100% 100%, 24% 98%);
    border-right-style: solid;
    border-right-radius: 1px;
    border-right-color: #00000070;
`;

export const BadgeTitle = styled.span`
    color: black;
    font-size: 11px;    
    letter-spacing: 1px;
    font-family: Blender Pro Bold, serif;
    margin-left: 15px;
    
    &:before {
        content: "// ";
    }
    
    &:after {
        content: "_";
    }
`;
