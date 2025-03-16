import React from 'react';
import PropTypes from 'prop-types';
import './SkillItem.css';

const SkillItem = ({ id, name, color, image }) => {
    return (
        <div
            key={id}
            style={{ border: 0, margin: 10 }}
            className={'tooltip-class-small'}
        >
            <span className={'tooltip-text'} style={{ color: color }}>
                {name}
            </span>
            <img alt={name} src={image} className={'skill-image'} />
        </div>
    );
};

SkillItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default SkillItem;
