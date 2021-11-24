import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const StyledCompetitionItem = styled.div`
    display: flex;    
    flex-wrap: wrap;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

export const ProjectImage = styled.div`
    width: 576px;
    height: 324px;
    background-image: url(${({image}) => image});
    background-size: contain;
    background-color: black;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 20px;
    border: 1px solid #FFA50050;
    margin-bottom: 30px;
    align-self: center;
    
    @media (max-width: 512px) {
       height: 200px;
    }
     
    @media (max-width: 396px) {
       height: 150px;
    }
    flex: 1;
`;

export const ProjectImageWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex: 2;
    order: ${({order}) => order === 'left' ? 0 : 1};
    
    @media (max-width: 1024px) {
        order: 0;
    }
`;

export const ProjectInfo = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 30px;
    width: 100%;
    order: ${({order}) => order === 'left' ? 1 : 0}
    
    @media (max-width: 1024px) {
        padding: 0;
        order: 1;
    }
`;

export const LinksBlock = styled.div`
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const BottomItem = styled.div`
    display: flex;
    margin-top: auto;
    align-items: center;
`;

export const Line = styled.div`
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;
    width: 2px;
    height: 30px;
    background-image: linear-gradient(to right, #0f0f0f, grey, #0f0f0f);
    transform: rotate(30deg);
`;

export const IconWrapper = styled.a`
    width: 40px;
    height: 40px;
    background-color: #171616;
    border: 1px solid #171616;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    border-radius: 50%;
    z-index: 1;
    transition: all 1s;
    
    &:hover {
        border: 1px solid ${({color}) => color + 90};
    }
`;

export const IconTechWrapper = styled.div`
    width: 40px;
    height: 40px;
    background-color: #171616;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    border-radius: 50%;
    z-index: 1;
`;

export const ProjectTitle = styled.p`
    font-family: Roboto Condensed, serif;
    font-size: 25px;
    line-height: 30px;
    border-left-width: 5px;
    border-left-style: solid;
    border-left-color: orange;
    padding-left: 7px;
    margin-bottom: 20px;
    text-align: left;
    
    @media (max-width: 480px) {
        font-size: 20px;
    }
`;

export const CompetitionTitle = styled.span`
    font-size: 14px;
    font-family: Roboto Condensed, serif;
    color: #C0C0C0;  
    
    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

export const CompetitionInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;

export const CompetitionSubtitle = styled.span`
    font-size: 14px;
    font-family: Roboto Condensed, serif;
    color: grey;    
    font-style: italic;
    
    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

export const ProjectDesc = styled.p`
    font-family: Roboto Condensed, serif;
    font-size: 13px;
    font-weight: 300;
    color: white;
    text-align: left;
    margin-top: 20px;
    width: 90%;
    
    @media (max-width: 1024px) {
        width: 100%;
    }
    
    @media (max-width: 480px) {
        font-size: 11px;
    }
`;

export const AwardIcon = styled(FontAwesomeIcon)`
    width: 16px;
    height: 16px;
    color: orange;
    margin-right: 5px;
`;

export const CompetitionIcon = styled.img`
    height: 16px;
    margin-right: 5px;
`;

export const StyledIcon = styled.img`
    width: 25px;
    height: 25px;
`;
