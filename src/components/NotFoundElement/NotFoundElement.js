import React from "react";
import {ColoredSpan, StyledPar, StyledContent} from "./NotFoundElement.styles";

const NotFoundElement = ({text}) => {
    return (
        <>
            <StyledPar>
                <StyledContent value={'4'} animation={'rotate'}/>
                <StyledContent value={'0'} animation={'change'}/>
                <StyledContent value={'4'} animation={'rotate'}/>
            </StyledPar>
            <ColoredSpan color={'white'}>
                {text}
            </ColoredSpan>
        </>
    );
}

export default NotFoundElement;
