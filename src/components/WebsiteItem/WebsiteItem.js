import {WebsitePin, WebsiteStyledItem} from "./WebsiteItem.styles";
import React from "react";

const WebsiteItem = ({name, websiteImage, direction, url, backgroundColor}) => {
    return (<WebsiteStyledItem target={'_blank'} href={url} websiteImage={websiteImage} direction={direction} backgroundColor={backgroundColor}>
        <WebsitePin direction={direction}>{name}</WebsitePin>
    </WebsiteStyledItem>);
};

export default WebsiteItem;
