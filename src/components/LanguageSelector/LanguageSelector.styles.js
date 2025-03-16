import styled from 'styled-components';
import { navbarThemes } from '../../parts/navbar/Navbar.styles';

export const SelectorSection = styled.div`
    display: inline;
    position: absolute;
    font-weight: 300;
    right: 50px;

    @media (max-width: 992px) {
        display: ${({ mobileDisplayStyle }) => mobileDisplayStyle};
        position: static;
        padding-bottom: 10px;
    }
`;

export const LanguageButton = styled.button`
    border: none;
    background-color: inherit;
    width: 50px;
    font-family: 'Open Sans', serif;
    font-weight: 300;
    font-size: 16px;
    color: ${({ active, theme }) =>
        active
            ? navbarThemes[theme].color
            : navbarThemes[theme].additionalColor};
    cursor: pointer;
    display: inline-block;

    &:hover {
        color: ${({ theme }) => navbarThemes[theme].color};
    }
`;

export const LanguageDivider = styled.span`
    color: ${({ theme }) => navbarThemes[theme].additionalColor};
    font-family:
        Open Sans,
        serif;

    &:after {
        content: '${({ content }) => content}';
    }
`;
