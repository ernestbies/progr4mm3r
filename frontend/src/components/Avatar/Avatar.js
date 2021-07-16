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

const Avatar = ({width, height, src}) => {
    return (
        <StyledAvatar width={width} height={height}>
            <StyledAvatarInner>
                <StyledAvatarFront src={src}/>
                <StyledAvatarBack>
                    <Logo width={50} height={50} style={{marginTop: 50, marginBottom: 10}}/>
                    <StyledText>Ernest Bieś</StyledText>
                    <StyledSubtext>official website</StyledSubtext>
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
