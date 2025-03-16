import styled from 'styled-components';

export const StyledLink = styled.a`
    display: inline-flex;
    align-items: center;
    text-decoration: none !important;
    text-align: center;
    margin-right: 10px;
`;

export const LinkText = styled.span`
    font-size: 10px;
    color: white;
    text-align: left;

    @media (max-width: 480px) {
        font-size: 9px;
    }
`;

export const StyledImage = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 5px;
`;
