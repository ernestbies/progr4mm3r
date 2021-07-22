import {
    StyledAvatar,
    StyledAvatarBack,
    StyledAvatarFront,
    StyledText,
    StyledAvatarInner,
    StyledSubtext
} from "./Avatar.styles";
import React from "react";
import PropTypes from 'prop-types';
import {Logo} from "../Logo/Logo";
import {useTranslation} from "react-i18next";

const Avatar = ({width, height, src}) => {

    const {t} = useTranslation('common');

    return (
        <StyledAvatar width={width} height={height}>
            <StyledAvatarInner>
                <StyledAvatarFront src={src}/>
                <StyledAvatarBack>
                    <Logo width={50} height={50} style={{marginTop: 50, marginBottom: 10}}/>
                    <StyledText>{'Ernest Bieś'}</StyledText>
                    <StyledSubtext>{t('official_website')}</StyledSubtext>
                </StyledAvatarBack>
            </StyledAvatarInner>
        </StyledAvatar>
    );
};

Avatar.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    src: PropTypes.string.isRequired
};

Avatar.defaultProps = {
    width: 200,
    height: 200
};

export default Avatar;
