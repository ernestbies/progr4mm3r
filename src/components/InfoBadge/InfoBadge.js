import React from "react";
import {BadgeItem, BadgeTitle} from "./InfoBadge.styles";
import PropTypes from 'prop-types';

const InfoBadge = ({title}) => {
    return (<BadgeItem><BadgeTitle>{title}</BadgeTitle></BadgeItem>)
};

InfoBadge.propTypes = {
    title: PropTypes.string
};

export default InfoBadge;
