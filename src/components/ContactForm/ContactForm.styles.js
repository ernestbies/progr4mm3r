import styled from 'styled-components';

export const ContactContainer = styled.form`
    padding: 5px;
    display: flex;
    flex-direction: column;
    max-width: 580px;
    width: 100%;
`;

export const ContactInput = styled.input`
    background-color: black;
    border: 1px solid darkred;
    font-family:
        Roboto Condensed,
        serif;
    width: 100%;
    color: white;
    font-weight: 300;
    font-size: 15px;
    padding: 3px;
    padding-left: 10px;
    outline: none;

    &:focus {
        border-color: red;
    }
`;

export const ContactTextArea = styled.textarea`
    width: 100%;
    margin-top: 15px;
    background-color: black;
    border: 1px solid darkred;
    height: 250px;
    font-weight: 300;
    color: white;
    padding: 3px;
    font-size: 15px;
    resize: none;
    outline: none;

    &:focus {
        border-color: red;
    }
`;

export const InputContainer = styled.div`
    display: flex;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 480px) {
        flex-direction: column;
    }
`;

export const ContactSubmitButton = styled.button`
    margin-top: 15px;
    width: 120px;
    border: 0;
    border-left: 2px solid darkred;
    font-size: 13px;
    font-family:
        Roboto Condensed,
        serif;
    height: 30px;
    display: block;
    background: linear-gradient(to right, darkred 50%, transparent 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.5s ease-out;
    color: white;
    margin-bottom: 20px;
    position: relative;

    &:hover {
        background-position: left bottom;
    }

    &:disabled {
        color: grey;
    }
`;

export const ContactSubmitButtonSign = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 10px;
    height: 10px;
    border-right: 2px solid darkred;
    border-bottom: 2px solid darkred;
`;

export const Colored = styled.span`
    color: red;
`;

export const TextError = styled.p`
    color: white;
    font-family:
        Roboto Condensed,
        serif;
    font-size: 12px;
    margin: 5px;
`;
