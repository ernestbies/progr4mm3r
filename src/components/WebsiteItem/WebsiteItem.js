import {WebsiteDesc, WebsiteHoverContent, WebsitePin, WebsiteStyledItem, WebsiteTitle} from "./WebsiteItem.styles";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";

const WebsiteItem = ({name, description, websiteImage, direction, url, backgroundColor}) => {

    const [hover, setHover] = useState(false);
    const {i18n} = useTranslation('common');

    return (
        <WebsiteStyledItem onMouseEnter={() => setHover(true)}
                           onMouseLeave={() => setHover(false)}
                           target={'_blank'}
                           href={url}
                           websiteImage={websiteImage}
                           direction={direction}
                           backgroundColor={backgroundColor}>
            <WebsitePin direction={direction}>{name}</WebsitePin>
            {hover &&
            <WebsiteHoverContent>
                <WebsiteTitle>{name}</WebsiteTitle>
                <WebsiteDesc>{description[i18n.language]}</WebsiteDesc>
            </WebsiteHoverContent>}
        </WebsiteStyledItem>
    );
};

export default WebsiteItem;
