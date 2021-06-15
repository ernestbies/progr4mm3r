import styled from 'styled-components';

export const StyledForm = styled.form`
    max-width: 700px;
    width: 95%;
    background-color: red;
    margin: 10px;
    border-radius: 25px;
    border: 1px solid #FFFFFF90;
    background: #00000090;
`;

export const FormDiv = styled.div`
    display: flex;
    margin-left: 30px;
    margin-top: ${({marginTop}) => marginTop};
    align-items: center;
`;

export const FormTextArea = styled.textarea`
    background-color: transparent;
    margin-top: 30px;
    width: 90%;
    height: 200px;
    border-width: 1px;
    resize: none;
    outline: none;
    color: white;
    font-family: 'Open Sans', serif;
    font-weight: 300;
    font-size: 12px;
    border-radius: 5px;
    padding: 5px;    
    
    &:focus {
        border-color: #9932CC;
    }
`;

export const CaptchaDiv = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: center;
    align-items: center;    
`;

export const FormButton = styled.button`
    margin-top: 15px;
    width: 120px;
    border: 1px solid white;
    border-radius: 5px;
    font-size: 13px;
    font-family: "Open Sans", serif;
    height: 30px;
    display: block;
    background: linear-gradient(to right, #29003b 50%, transparent 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all .5s ease-out;
    color: white;  
    margin-bottom: 20px;  
    
    &:disabled {
        border: 1px solid #999999;
        background-color: #cccccc;
        color: #666666;
    }
    
    &:hover {
        background-position: left bottom; 
    }
`;

export const FormButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
`;
