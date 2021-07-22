import React from "react";
import {LinkText, StyledLink} from "./Link.styles";
import {FaBitbucket, FaGithub, FaYoutube} from "react-icons/all";
import {useTranslation} from "react-i18next";
import PropTypes from 'prop-types';

const Link = ({link, type}) => {

    const {t} = useTranslation('common');

    return (<StyledLink href={link}>
        {
            type === 'github' ? <FaGithub color={'white'} size={20} style={{marginRight: 5}}/> :
                type === 'bitbucket' ? <FaBitbucket size={20} style={{marginRight: 5}}/> :
                    type === 'youtube' ? <FaYoutube color={'red'} size={20} style={{marginRight: 5}}/> : <div/>
        }
        <LinkText>{type === 'youtube' ? t('check_out_presentation_video') : t('check_out_project_page')}</LinkText>
    </StyledLink>);
};

const types = ['github', 'bitbucket', 'youtube'];

Link.propTypes = {
    link: PropTypes.string.isRequired,
    type: PropTypes.oneOf(types).isRequired
}

export default Link;
