import React from 'react';
import { StyledLogo } from './Logo.styles';
import PropTypes from 'prop-types';

export const Logo = ({ width, height, lightMode, style }) => {
    const LOGO_URL = '/images/logo.png';

    return (
        <StyledLogo
            style={style}
            alt={'logo'}
            src={LOGO_URL}
            width={width}
            height={height}
            lightMode={lightMode}
        />
    );
};

Logo.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    lightMode: PropTypes.bool,
    style: PropTypes.object,
};

Logo.defaultProps = {
    width: 28,
    height: 28,
    lightMode: false,
};
