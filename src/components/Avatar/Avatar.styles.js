import styled, { keyframes } from 'styled-components';

const rotateElement = keyframes`
    0% {
        transform: rotateY(0deg);
    }

    100% {
        transform: rotateY(360deg);
    }
`;

export const StyledAvatarInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    animation: ${rotateElement} 15s infinite;
`;

export const StyledAvatar = styled.div`
    width: ${({ width }) => width + 'px'};
    height: ${({ height }) => height + 'px'};
    border-radius: 50%;
    margin-top: 15px;
    margin-bottom: 15px;
    -webkit-transition: 0.2s all;
    position: relative;
    perspective: 1000px;

    &:hover {
        filter: brightness(0.4);
    }
`;

export const StyledAvatarFront = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    object-fit: cover;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    margin-left: -100px;
    border: 1px solid #ffa55090;
`;

export const StyledAvatarBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background-color: black;
    transform: rotateY(180deg);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #ffa55090;
`;

export const StyledText = styled.p`
    font-family:
        Blender Pro Bold,
        serif;
    letter-spacing: 1px;
    color: orange;
    font-size: 15px;
`;

export const StyledSubtext = styled.p`
    font-family:
        Roboto Condensed,
        serif;
    color: white;
    font-size: 10px;
    margin-top: -15px;
`;
