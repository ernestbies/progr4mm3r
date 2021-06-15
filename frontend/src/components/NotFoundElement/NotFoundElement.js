import React from "react";
import {ColoredSpan, StyledPar} from "./NotFoundElement.styles";

const NotFoundElement = ({text}) => {
    return (<><StyledPar>{'404'}</StyledPar><ColoredSpan color={'white'}>{text}</ColoredSpan></>);
}

export default NotFoundElement;
