import styled from 'styled-components';

const iconColors = {
    github: '#696969',
    bitbucket: '#1a74ed',
    linkedin: '#0e76a8',
    email: '#8b0000',
};

export const StyledIcon = styled.a`
    width: 75px;
    height: 75px;
    margin: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid #696969;
    background-image: linear-gradient(
        ${({ iconType }) => iconColors[iconType]},
        ${({ iconType }) => iconColors[iconType]}
    );
    background-repeat: no-repeat;
    background-size: 0% 100%;
    transition: all 1s ease-in-out;

    &:hover {
        background-size: 100% 100%;
    }

    @media (max-width: 596px) {
        transform: scale(0.8);
        margin: 0;
    }

    @media (max-width: 480px) {
        transform: scale(0.6);
    }
`;
